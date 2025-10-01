<script setup >
import { ref, onMounted } from 'vue';
import Table from '@/components/Table/Table.vue';

let i = 0;
const total = ref(0);
const checked = ref(0);
const percent = ref(0);
const arrSaved = ref(localStorage.getItem('checkedStories') ? JSON.parse(localStorage.getItem('checkedStories')) : []); // Load rom device if present

const filename = ref(document.querySelector('#filename') ? document.querySelector('#filename').value() : "application");

const launch = ($event) => {
  total.value = document.querySelectorAll('tr:has([data-required=true]) input[type="checkbox"]').length;
  checked.value = document.querySelectorAll('tr:has([data-required=true]) input[type="checkbox"]:checked').length;
  percent.value = Math.round((100 * checked.value) / total.value);

  Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]:checked) td[data-label="Story"]')).forEach((td) => {
  
    if(!isSaved(td.innerHTML))
      arrSaved.value.push(td.innerHTML);
  });

  Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]:not(:checked)) td[data-label="Story"]')).forEach((td) => {
  
    if(arrSaved.value.indexOf(td.innerHTML) >= 0)
      arrSaved.value = arrSaved.value.filter(item => item !== td.innerHTML);
  });

  // Save to device
  localStorage.setItem('checkedStories', JSON.stringify(arrSaved.value));
};

const clear = ($event) => {
  checked.value = 0;
  percent.value = 0;

  arrSaved.value = [];
  localStorage.setItem('checkedStories', JSON.stringify(arrSaved.value));
};

const isSaved = (story) => {

  return arrSaved.value.includes(story);
}

const submit = ($event) => {

  const filenameCSV = filename.value.replace(" ", "_").toLowerCase();
  const rows = [];

  Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]) td[data-label="Story"]')).forEach((td) => {
  
    const row = td.closest('tr');
    rows.push([td.innerHTML, row.querySelector('input[type="checkbox"]:checked') ? true : false])
  });


  rows.push(["Total passed", checked.value ]);
  rows.push(["Total stories", total.value ]);
  rows.push(["Percent passed", percent.value ]);

  let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filenameCSV}.csv`);
  link.classList.add('d-none');
  document.body.appendChild(link); // Required for FF

  link.click();
}

onMounted(() => {

  filename.value = document.querySelector('#filename') ? document.querySelector('#filename').value : "application";
  launch();
});
</script>
<template>
  <main>
    <h1>NFR's Launch list</h1>
    <p class="md-col-end-8">Our non-functional requirements can be used to test the readiness of an application. Designed to measure the usability and inclusiviness of web pages.</p>
    <div class="md-col-start-9 text-end"><button class=" btn btn-secondary" @click="($event) => clear($event)">Clear</button></div>


    

    <template v-for="(group, title) in $shared.nfrs" v-bind:key="title">
      <Table data-show="99">
      <h2>{{ title }}</h2>

      <table v-for="nfr in group" v-bind:key="nfr.story">
        <thead>
          <tr>
            <th>Story</th>
            <th>Implement</th>
            <th>Test</th>
            <th>Required</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nfr in group" v-bind:key="nfr.story">
            <td>{{ nfr.story }}</td>
            <td>{{ nfr.implement }}</td>
            <td>{{ nfr.test }}</td>
            <td :data-required="`${nfr.required}`">{{ nfr.required == "true" ? `Yes` : `No` }}</td>
            <td><label>Passed <input type="checkbox" :name="`check-${i++}`" :checked="isSaved(nfr.story)"  @change="($event) => launch($event)" /></label></td>
          </tr>
        </tbody>
      </table>
      </Table>
    </template>

    <label class="md-col-end-6 pt-5">
      File Name:
      <input id="filename" name="filename" type="text" value="Application 1" required />
    </label>
    <button class=" btn btn-primary" @click="($event) => submit($event)">Save CSV</button>

    <div class="progress__wrapper">
      <label :data-percent="percent">NFRs Passed<progress :max="total" :value="checked"></progress></label>
    </div>

    
  </main>
</template>

<style lang="scss" scoped>

main:has(.progress__wrapper){
  padding-bottom: 0;
}

.progress__wrapper {
  grid-column: full-width;
  position: sticky;
  bottom: 0;
  left: 0;

  label {
    text-indent: -100%;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  progress {
    --border-radius: 0;
    height: 3rem;
    margin: 0;
    max-width: 100%;
  }

}
label[data-percent]:not(:has(strong)):has(progress):before {
  
  text-indent: 0;
  top: 50%;
  right: 0.5rem;
}
</style>