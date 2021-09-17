<template>
  <div class="container">
    <ul class="breadcrumb mb-0">
      <li><a href="/examples">Examples</a></li>
    </ul>
    <h1>Filter by age</h1>
    <p>Built in table filters only compare strings. More complex evaluations like greater than or less than a bespoke form with its own method will be needed. The table component has been created so that it can handle outside filtering and still be sortable and pageable.</p>
    <form class="mb-2 row" @submit="filterTable">
      <div class="col-sm-4 pb-3">
        
        <Input id="filterAge" label="Filter by age" type="number" min="5" max="60" required v-model="filterAge" class="mb-0 form-control-inline"></Input>
      </div>
      <div class="col-sm-4 pb-3">

        <select class="form-select" id="filterType" name="filterType" v-model="filterType">
          <option value="==">Equal to</option>
          <option value=">">Greater than</option>
          <option value="<">Less than</option>
          <option value=">=">Greater than or equal to</option>
          <option value="<=">Less than or equal to</option>
        </select>
      </div>
      <div class="col-sm-4 pb-3">
        <button class="btn btn-tertiary mb-0">Filter</button>
      </div>
    </form>
    
    <Table :fields="fields" :items="items" sortBy="Age" sort="ascending" class="table-fullwidth" :show="5"></Table>
    
  </div>
</template>

<script>
import Table from '@/elements/Table/Table.vue'
import Input from '@/elements/Input/Input.vue'

const initialData = () => ({
  filterAge: '',
  filterType: '==',
  fields: [
    { 
      key: 'name',
      sortable: true
    },
    { 
      key: 'age',
      sortable: true 
    }
  ],
  items: [
    {
      name: 'Tiffany',
      age: 5
    },
    {
      name: 'Derrick',
      age: 10
    },
    {
      name: 'Bill',
      age: 20
    },
    {
      name: 'Harry',
      age: 15
    },
    {
      name: 'Sharon',
      age: 35
    },
    {
      name: 'Susan',
      age: 45
    }
  ]
})

export default {
  components: {
    Table,
    Input
  },
  methods:{
    filterTable: function (e) {
      
      let filterAge = parseInt(this.filterAge);
      let filterType = this.filterType;
      const data = initialData();

      this.items = data.items.filter(function (el) {
        
        switch(filterType) {
          case '>':
            return el.age > filterAge;
            break;
          case '<':
            return el.age < filterAge;
            break;
          case '>=':
            return el.age >= filterAge;
            break;
          case '<=':
            return el.age <= filterAge;
            break;
          default:
            return el.age == filterAge;
        }
      });
      e.preventDefault();
    }
  },
  data () {
    return initialData();
  }
}
</script>