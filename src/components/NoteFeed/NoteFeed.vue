<template>
  <div class="container note-feed mb-2">
    <span class="h3" v-html="title" v-if="title"></span>

    <Table :fields="[{ key: 'date_added' },{ key: 'user' },{ key: 'note' }]" :items="itemsData" v-bind="$props" class="mb-0"></Table>
    <form :action="action" :method="method" @submit.prevent="submitForm(...arguments)">
      <input type="hidden" :value="user" name="user" />
      <Input id="addNote" type="textarea" label="Add note" required class="mw-100"></Input>
      <button class="btn btn-tertiary">Submit note</button>
    </form>
  </div>
</template>

<script>
import Input from '../../elements/Input/Input.vue'
import Table from '../../elements/Table/Table.vue'
let tableProps = Table.props;
tableProps.fields.required = false;


export default {
  components: {
    Table,
    Input
  },
  data () {
    return {
      itemsData: [...this.items] // Redefine data to avoid bleeding of data to other components
    }
  },
  methods: {
    submitForm: function(event){

      console.log(this)

      const data = new FormData(event.target);

      let today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      today = dd + '/' + mm + '/' + yyyy;

      this.itemsData.unshift({
        date_added: today,
        user: data.get('user'),
        note: data.get('addNote')
      });

      this.$emit('formSubmitted',event);
    }
  },
  name: 'NoteFeed',
  props: {
    user: {
      type: String,
      required: true
    },
    ...tableProps,
    title: {
      type: String,
      required: false
    },
    method: {
      type: String,
      required: false,
      default: 'post'
    },
    action: {
      type: String,
      required: false
    }
  }
}
</script>
