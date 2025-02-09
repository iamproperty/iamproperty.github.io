<template>
  <iam-chart role="figure">
    <slot></slot>
    <table v-if="fields">
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
  </iam-chart>
</template>

<script>
  import { ucfirst, unsnake } from '../../helpers/strings';
  //import iamChart from '../../../assets/ts/components/chart/chart.component.ts'

  export default {
    name: 'Chart',
    components: {},
    props: {
      items: {
        type: Array,
        required: false,
      },
      fields: {
        type: Array,
        required: false,
      },
    },
    computed: {
      cellHeading() {
        return (heading) => {
          return `${ucfirst(unsnake(heading))}`;
        };
      },
    },
    mounted() {
      this.$nextTick(function () {
        import(`../../../assets/js/components/chart/chart.component.js`)
          .then((module) => {
            if (!window.customElements.get(`iam-chart`)) window.customElements.define(`iam-chart`, module.default);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    },
  };
</script>
