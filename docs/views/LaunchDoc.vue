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

  document.querySelector('.progress__wrapper progress').setAttribute('class', 'colour-danger');

  if(percent.value > 60)
    document.querySelector('.progress__wrapper progress').setAttribute('class', 'colour-warning');

  if(percent.value > 80)
    document.querySelector('.progress__wrapper progress').setAttribute('class', 'colour-success');
  
  if(percent.value == 100)
    document.querySelector('.progress__wrapper progress').setAttribute('class', 'colour-complete');


};

const clear = ($event) => {
  checked.value = 0;
  percent.value = 0;

  arrSaved.value = [];
  localStorage.setItem('checkedStories', JSON.stringify(arrSaved.value));
  document.querySelector('.progress__wrapper progress').removeAttribute('class');

  Array.from(document.querySelectorAll('tr:has([data-required=true]) input[type="checkbox"]')).forEach((checkbox) => {
  
    checkbox.checked = false;
  });
};

const isSaved = (story) => {

  return arrSaved.value.includes(story);
}

const submit = ($event) => {

  const filenameCSV = filename.value.replace(" ", "_").toLowerCase();
  const rows = [];

  Array.from(document.querySelectorAll('tr:has(input[type="checkbox"]) td[data-label="Story"]')).forEach((td) => {
  
    const row = td.closest('tr');
    rows.push([`"${td.innerHTML}"`, row.querySelector('input[type="checkbox"]:checked') ? true : false])
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
  <main class="integration-launch-list">
    <h1>Launch list</h1>
    <p class="lead">Our non-functional requirements can be used to test the readiness of an application. Designed to measure the usability and inclusiviness of web pages.</p>

    <label class="md-col-end-6 pb-5">
      Application/Page:
      <input id="filename" name="filename" type="text" value="Application 1" required />
    </label>


    <template v-for="(group, title) in $shared.nfrs" v-bind:key="title">
      <Table data-show="99">
      <h2>{{ title }}</h2>

      <table>
        <thead>
          <tr>
            <th>Story</th>
            <th>Implement</th>
            <th>Test</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nfr in group" v-bind:key="nfr.story">
            <td :data-required="`${nfr.required}`">{{ nfr.story }}{{ nfr.required == "true" ? `` : ` (Optional)` }}</td>
            <td v-html="nfr.implement"></td>
            <td v-html="nfr.test"></td>
            <td><label class="me-0">Passed <input type="checkbox" :name="`check-${i++}`" :checked="isSaved(nfr.story)"  @change="($event) => launch($event)" /></label></td>
          </tr>
        </tbody>
      </table>
      </Table>
    </template>


    <div class="text-end mb-5"><button class="btn btn-primary" @click="($event) => submit($event)">Save to CSV</button></div>

    <div class="progress__wrapper">


      <label :data-percent="percent">NFRs Passed<progress :max="total" :value="checked"></progress></label>
      <button class=" btn btn-action m-0" @click="($event) => clear($event)">Clear</button>
    </div>

    
  </main>
</template>
<style>

body:has(.integration-launch-list) {
  
  --max-width: 200rem;
  --container-max-width: 200rem;
}


</style>
<style lang="scss" scoped>

@layer components {
 
html table :is(th,td):last-child{
  width: 1%;
  padding-right: 0 !important;
}
 
}

:is(th,td):empty {
  background-color: red;
}

table :is(th,td):nth-child(2) {

  display: none;
}

table:has(td:nth-child(2):not(:empty)) :is(th,td):nth-child(2) {

  display: table-cell;
}

table :is(th,td):nth-child(3) {

  display: none;
}

table:has(td:nth-child(3):not(:empty)) :is(th,td):nth-child(3) {

  display: table-cell;
}

table :is(th,td):nth-child(4) {

  display: none;
}

table:has(td:nth-child(4):not(:empty)) :is(th,td):nth-child(4) {

  display: table-cell;
}


main:has(.progress__wrapper){
  padding-bottom: 0;
}

.progress__wrapper {
  grid-column: full-width;
  position: sticky;
  bottom: 0;
  left: 0;
  height: 2.5rem;
  padding-inline: 2rem;


  > label {
    text-indent: -100%;
    margin: 0;
    padding: 0;
    max-width: 100%;
    position: absolute;
    inset: 0 1rem;
  }

  progress {
    --border-radius: 0;
    position: absolute;
    height: auto;
    margin: 0;
    max-width: 100%;
    inset: 0;
  }

  button {
    
    position: absolute;
    height: auto;
    margin: 0;
    max-width: 100%;
    z-index: 99;
    top: 50%;
    right: 2rem;
    left: auto;
    bottom: auto;
    translate: 0 -50%;
  }

  &:has(progress[value="0"]){
    display: none;
  }

}
label[data-percent]:not(:has(strong)):has(progress):before {
  
  text-indent: 0;
  top: 50%;
  right: 5rem;
  bottom: auto;
  z-index: 2;
  line-height: 1em;
  height: 1em;
  translate: 0 -50%;
}
label[data-percent]:not(:has(strong)):has(progress.colour-complete):before {
  
  color: white;
}
</style>