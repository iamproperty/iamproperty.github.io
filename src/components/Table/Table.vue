<template>
  <iam-table ref="table" :data-backed="dataBacked ? '' : null">
    <slot name="before"></slot>
    <table v-if="fields && !dataBacked">
      <thead>
        <tr>
          <th v-for="field in fields" :key="field.key">{{ cellHeading(field.key) }}</th>
        </tr>
      </thead>
      <tbody v-if="items">
        <tr v-for="(value, index) in items" :key="index" :data-row-id="value['rowid']">
          <td
            :key="cellIndex"
            v-for="(cellValue, cellIndex) in Object.fromEntries(
              Object.entries(value).filter(([key]) => key !== 'rowid')
            )"
            v-html="cellValue"
          ></td>
        </tr>
      </tbody>
    </table>
    <slot v-else-if="!dataBacked"></slot>
  </iam-table>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    name: 'Table',
    props: {
      dataBacked: { type: Boolean, default: false },
      rowKey: { type: [String, Function], default: 'id' },
      items: {
        type: Array,
        required: false,
      },
      fields: {
        type: Array,
        required: false,
      },
    },
    watch: {
      items() {
        this.syncData();
      },
      fields() {
        this.syncData();
      },
    },
    methods: {
      syncData() {
        if (!this.dataBacked || !this.$refs.table?.setData) return;
        this.$refs.table.setData(this.items || [], {
          rowKey: this.rowKey,
          columns: (this.fields || []).map((field) => ({
            key: field.key,
            label: field.label || this.cellHeading(field.key),
            render: field.render,
            sort: field.sort,
            filters: field.filters,
            format: field.format,
          })),
        });
      },
      getSelectedRecords() {
        return this.$refs.table.getSelectedRecords();
      },
      getSelectedIds() {
        return this.$refs.table.getSelectedIds();
      },
      selectAll() {
        this.$refs.table.selectAll();
      },
      clearSelection() {
        this.$refs.table.clearSelection();
      },
      setFilter(predicate) {
        this.$refs.table.setFilter(predicate);
      },
      setSort(comparator) {
        this.$refs.table.setSort(comparator);
      },
    },
    computed: {
      cellHeading() {
        return (heading) => {
          return `${ucfirst(unsnake(heading))}`;
        };
      },
    },
    created() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table/table.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table`)) window.customElements.define(`iam-table`, module.default);
            this.syncData();
          })
          .catch((err) => {
            console.log(err.message);
          });

        import(`../../../assets/js/components/pagination/pagination.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-pagination`))
              window.customElements.define(`iam-pagination`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
    updated() {},
  };
</script>
