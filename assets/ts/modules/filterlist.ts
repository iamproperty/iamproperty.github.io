// @ts-nocheck
function filterlist(list: Element, input:Element) {

  addFilterlistEventListeners(list,input);
}

function addFilterlistEventListeners(list: Element, input:Element) {

  var timer;

  input.addEventListener('keyup', (event) => {

    clearTimeout(timer);
      timer = setTimeout(function(){
        filterTheList(list,input);
      }, 1000);
  });

  input.addEventListener('change', (event) => {

    clearTimeout(timer);
    
    filterTheList(list,input);
  });

}

function filterTheList(list: Element, input:Element){

  let searchTerm = input.value.toLowerCase();

  Array.from(list.querySelectorAll(':scope > li')).forEach((item, index) => {
    let content = item.textContent.toLowerCase();

    item.classList.add('d-none');

    if(content.includes(searchTerm))
      item.classList.remove('d-none');
  });

  console.log(input.value)
}

export default filterlist;
