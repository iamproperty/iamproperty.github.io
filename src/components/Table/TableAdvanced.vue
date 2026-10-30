<template>
  <iam-table-advanced ref="table" :data-backed="dataBacked ? '' : null">
    <slot name="before"></slot>
    <slot v-if="!dataBacked"></slot>
  </iam-table-advanced>
</template>

<script lang="ts">
  import type { TableRecord } from '../../../assets/ts/modules/table-data';
  import { ucfirst, unsnake } from '../../helpers/strings';

  export default {
    emits: ['ready'],
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
      items(): void {
        this.syncData();
      },
      fields(): void {
        this.syncData();
      },
    },
    methods: {
      syncData(): void {
        if (!this.dataBacked || !this.$refs.table?.setData) return;
        this.$refs.table.setData(this.items || [], {
          rowKey: this.rowKey,
          columns: (this.fields || []).map((field) => ({
            key: field.key,
            label: field.label ?? this.cellHeading(field.key),
            render: field.render,
            sort: field.sort,
            filters: field.filters,
            format: field.format,
          })),
        });
      },
      getSelectedRecords(): TableRecord[] {
        return this.$refs.table.getSelectedRecords();
      },
      getSelectedIds(): Array<string | number> {
        return this.$refs.table.getSelectedIds();
      },
      selectAll(): void {
        this.$refs.table.selectAll();
      },
      clearSelection(): void {
        this.$refs.table.clearSelection();
      },
      setFilter(predicate: ((record: TableRecord) => boolean) | null): void {
        this.$refs.table.setFilter(predicate);
      },
      setSort(comparator: ((a: TableRecord, b: TableRecord) => number) | null): void {
        this.$refs.table.setSort(comparator);
      },
    },
    computed: {
      cellHeading() {
        return (heading: string): string => {
          return `${ucfirst(unsnake(heading))}`;
        };
      },
    },
    created(): void {
      this.$nextTick(function () {
        import(`../../../assets/js/components/table-advanced/table-advanced.component.min.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-table-advanced`))
              window.customElements.define(`iam-table-advanced`, module.default);
            this.syncData();
            this.$emit('ready');
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
  };
</script>
