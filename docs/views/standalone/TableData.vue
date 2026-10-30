<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
  import Header from '@/components/Header/Header.vue';
  import TableAdvanced from '@/components/Table/TableAdvanced.vue';
  import { createColumns, generateRecords } from './data/table-data-records';

  type DemoRecord = ReturnType<typeof generateRecords>[number];

  const recordCount = ref(5000);
  const records = shallowRef<DemoRecord[]>([]);
  const mode = ref<'data' | 'html' | null>(null);
  const run = ref(0);
  const ready = ref(false);
  const loading = ref(false);
  const checking = ref(false);
  const result = ref('Choose a mode.');
  const selectedCount = ref(0);
  const selectionMessage = ref('');
  const checks = ref('');
  const advancedTable = ref<InstanceType<typeof TableAdvanced> | null>(null);
  const legacyTable = ref<HTMLElement | null>(null);
  const previewDialog = ref<HTMLDialogElement | null>(null);
  const previewRecord = shallowRef<DemoRecord | null>(null);
  const previewJson = computed(() => JSON.stringify(previewRecord.value, null, 2));
  const columns = createColumns(showProperty);
  const disabled = computed(() => !ready.value || loading.value || checking.value);
  let startedAt = 0;
  let disposed = false;

  // Load both implementations before timing either table.
  onMounted(async () => {
    try {
      const [pagination, table, advanced] = await Promise.all([
        import('../../../assets/js/components/pagination/pagination.component.min.js'),
        import('../../../assets/js/components/table/table.component.min.js'),
        import('../../../assets/js/components/table-advanced/table-advanced.component.min.js'),
      ]);
      for (const [name, component] of [
        ['iam-pagination', pagination.default],
        ['iam-table', table.default],
        ['iam-table-advanced', advanced.default],
      ]) {
        if (!customElements.get(name)) customElements.define(name, component);
      }
      if (!disposed) ready.value = true;
    } catch (error) {
      if (!disposed) result.value = `Unable to load the table components: ${error.message}`;
    }
  });

  onBeforeUnmount(() => {
    disposed = true;
  });

  async function showProperty(record: DemoRecord): Promise<void> {
    previewRecord.value = record;
    await nextTick();
    if (!disposed && !previewDialog.value.open) previewDialog.value.showModal();
  }

  const frame = (): Promise<void> => new Promise((resolve) => requestAnimationFrame(() => resolve()));

  async function load(nextMode: 'data' | 'html'): Promise<void> {
    loading.value = true;
    mode.value = null;
    await nextTick();
    if (disposed) return;
    records.value = generateRecords(recordCount.value);
    selectedCount.value = 0;
    selectionMessage.value = '';
    checks.value = '';
    run.value++;
    startedAt = performance.now();
    mode.value = nextMode;
    if (nextMode === 'html') {
      await nextTick();
      await finishLoad();
    }
  }

  async function finishLoad(): Promise<void> {
    const currentRun = run.value;
    await nextTick();
    await frame();
    await frame();
    if (disposed || currentRun !== run.value) return;
    const element = mode.value === 'data' ? advancedTable.value.$el : legacyTable.value;
    result.value = `${mode.value === 'data' ? 'Data-backed' : 'HTML'}: ${records.value.length} records, ${element.querySelectorAll('tbody tr').length} mounted rows, ${(performance.now() - startedAt).toFixed(1)} ms to two animation frames.`;
    loading.value = false;
  }

  function selectionChanged(event: CustomEvent<{ selectedCount: number }>): void {
    selectedCount.value = event.detail.selectedCount;
    selectionMessage.value = '';
  }

  function retrieveSelection(): void {
    const selected = advancedTable.value.getSelectedRecords();
    selectionMessage.value = `Retrieved ${selected.length} original records; first ID: ${selected[0]?.id ?? 'none'}`;
  }

  function filterFullMatches(): void {
    advancedTable.value.setFilter((record) => record.matchCriteria === 'full');
  }

  function sortPriceDescending(): void {
    advancedTable.value.setSort((a, b) => b.currentPrice - a.currentPrice);
  }

  // Exercise the public API without moving Vue-owned elements out of the DOM.
  async function runChecks(): Promise<void> {
    checking.value = true;
    const assert = (condition: boolean, message: string): void => {
      if (!condition) throw new Error(message);
    };
    const originalRecords = records.value;
    const table = advancedTable.value;
    const element = table.$el;
    const rowCount = (): number => element.querySelectorAll('tbody tr').length;
    try {
      table.setFilter(null);
      table.setSort(null);
      table.clearSelection();
      // Clear any filters applied interactively before running the checks.
      for (const button of [...element.querySelectorAll('th[data-filtered] [data-filter-btn]')]) {
        const key = button.closest('th').dataset.key;
        [...element.querySelectorAll('th')]
          .find((heading) => heading.dataset.key === key)
          .querySelector('[data-filter-btn]')
          .click();
        [...element.querySelectorAll('dialog button')].find((button) => button.textContent === 'Reset').click();
      }
      assert(rowCount() === 50, 'Only one page should be mounted');
      table.selectAll();
      assert(table.getSelectedRecords().length === originalRecords.length, 'Selection must include every page');
      assert(table.getSelectedRecords()[123] === originalRecords[123], 'Selected objects must retain their identity');
      element.shadowRoot.querySelector('iam-pagination').setAttribute('data-page', '2');
      assert(element.querySelector('tbody tr').dataset.rowId === '50', 'Second page should start at record 50');
      element.querySelector('tbody input').click();
      assert(!table.getSelectedIds().includes(50), 'Deselection should use the record ID');
      table.clearSelection();
      filterFullMatches();
      table.selectAll();
      assert(
        table.getSelectedRecords().length ===
          originalRecords.filter((record) => record.matchCriteria === 'full').length,
        'Filtered selection must include off-page records'
      );
      table.setFilter(null);
      table.clearSelection();
      const priceHeading = (): HTMLButtonElement =>
        element.querySelector<HTMLButtonElement>('th[data-key="currentPrice"] [data-sort-btn]')!;
      priceHeading().click();
      assert(
        element.querySelector('tbody tr').dataset.rowId ===
          String([...originalRecords].sort((a, b) => a.currentPrice - b.currentPrice)[0].id),
        'Prices should sort numerically'
      );
      priceHeading().click();
      priceHeading().click();
      element.querySelector('th[data-key="weeksOnMarket"] [data-filter-btn]').click();
      element.querySelector('dialog input').value = String(originalRecords[0].weeksOnMarket);
      element.querySelector('dialog form').requestSubmit();
      assert(
        Number(element.dataset.total) ===
          originalRecords.filter((record) => record.weeksOnMarket === originalRecords[0].weeksOnMarket).length,
        'Column filters must cover every record'
      );
      element.querySelector('th[data-key="weeksOnMarket"] [data-filter-btn]').click();
      [...element.querySelectorAll('dialog button')].find((button) => button.textContent === 'Reset').click();
      records.value = originalRecords.slice(0, 10);
      await nextTick();
      assert(rowCount() === 10, 'Replacing items should refresh the table');
      records.value = [];
      await nextTick();
      assert(element.dataset.total === '0', 'Empty items should show an empty table');
      checks.value =
        'PASS: bounded rendering, cross-page selection, original objects, pagination, filtering, sorting and reactive data refresh.';
    } catch (error) {
      checks.value = `FAIL: ${error.message}`;
    } finally {
      records.value = originalRecords;
      table.setFilter(null);
      table.setSort(null);
      table.clearSelection();
      await nextTick();
      checking.value = false;
    }
  }
</script>

<template>
  <main>
    <Header>
      <ul class="breadcrumbs">
        <li><a href="/standalone">Standalone examples</a></li>
        <li>Table performance</li>
      </ul>
      <h1>Table performance comparison</h1>
    </Header>

    <div class="container py-4">
      <p>
        Compare the data-backed advanced table with the original HTML table using the same property records. Timings
        include rendering and two animation frames; downloads and record generation are excluded.
      </p>
      <p>
        The first 15 rows use the supplied property examples. Additional rows are synthetic, with calculated price
        reductions and dates. Repeat each run when comparing performance.
      </p>
      <div class="d-flex flex-wrap align-items-end gap-3">
        <label
          >Records
          <select v-model.number="recordCount" :disabled="disabled">
            <option v-for="count in [1000, 5000, 10000, 50000]" :key="count" :value="count">
              {{ count.toLocaleString() }}
            </option>
          </select>
        </label>
        <button type="button" class="btn btn-primary" :disabled="disabled" @click="load('data')">
          Load data-backed table
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="load('html')">
          Load HTML table
        </button>
      </div>
      <p role="status">{{ loading ? 'Loading table…' : result }}</p>
      <div v-if="mode === 'data'" class="d-flex flex-wrap gap-2">
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="advancedTable.selectAll()">
          Select all matching
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="advancedTable.clearSelection()">
          Clear selection
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="filterFullMatches">
          Full matches only
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="advancedTable.setFilter(null)">
          Clear filter
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="sortPriceDescending">
          Price: high to low
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="retrieveSelection">
          Retrieve selected records
        </button>
        <button type="button" class="btn btn-secondary" :disabled="disabled" @click="runChecks">
          Run behaviour checks
        </button>
      </div>
      <p v-if="mode === 'data'" role="status">{{ selectionMessage || `${selectedCount} records selected` }}</p>
      <p v-if="checks" role="status">{{ checks }}</p>
    </div>

    <div class="admin-panel" :aria-busy="loading || checking">
      <TableAdvanced
        v-if="mode === 'data'"
        :key="run"
        ref="advancedTable"
        data-backed
        data-selectall
        data-show="50"
        :items="records"
        :fields="columns"
        row-key="id"
        @ready="finishLoad"
        @selection-change="selectionChanged"
      />
      <iam-table v-else-if="mode === 'html'" :key="run" ref="legacyTable" data-selectall data-show="50">
        <table>
          <thead>
            <tr>
              <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.id">
              <td v-for="column in columns" :key="column.key">
                <button
                  v-if="column.key === 'action'"
                  type="button"
                  class="btn btn-action text-nowrap"
                  :aria-label="`View property: ${record.property}`"
                  @click="showProperty(record)"
                >
                  View property
                </button>
                <template v-else>{{ column.render ? column.render(record) : record[column.key] }}</template>
              </td>
            </tr>
          </tbody>
        </table>
      </iam-table>
    </div>

    <dialog ref="previewDialog" aria-labelledby="property-preview-title" @close="previewRecord = null">
      <h2 id="property-preview-title" class="h4">{{ previewRecord?.property }}</h2>
      <p>{{ previewRecord?.synthetic ? 'Synthetic test record.' : 'Supplied sample record.' }}</p>
      <pre>{{ previewJson }}</pre>
      <form method="dialog"><button class="btn btn-primary">Close</button></form>
    </dialog>

    <div class="container py-4">
      <h2>Using the Vue component</h2>
      <pre><code>&lt;TableAdvanced ref="table" data-backed data-selectall data-show="50"
  :items="records" :fields="columns" row-key="id" /&gt;</code></pre>
      <p>
        Keep large record arrays in a shallowRef and replace the array when data changes. Column definitions accept key,
        label, sort, filters, format and an optional render callback. Retrieve the original selected objects with
        table.getSelectedRecords().
      </p>
      <p>
        Filters combine across columns and cover the full dataset. Selecting all retains previous selections outside the
        current filter. Clearing selection removes every selected ID. The preview is local; it does not open production
        property links.
      </p>
      <p>
        Record rendering, pagination and filter dialogs are owned by the web component. Vue owns the demo controls,
        input records, table lifecycle and property preview.
      </p>
    </div>
  </main>
</template>
