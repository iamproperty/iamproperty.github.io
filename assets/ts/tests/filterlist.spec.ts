// @ts-nocheck
import '@testing-library/jest-dom'
import { filterTheList } from "../modules/filterlist";


const listHTML = `
<li class="lead text-primary pb-1">Olivia Anderson</li>
<li class="lead text-primary pb-1">Ethan Ramirez</li>
<li class="lead text-primary pb-1">Sophia Patel</li>
<li class="lead text-primary pb-1">Noah Jenkins</li>
<li class="lead text-primary pb-1">Ava Thompson</li>
<li class="lead text-primary pb-1">Lucas Myers</li>
<li class="lead text-primary pb-1">Mia Carter</li>
<li class="lead text-primary pb-1">Benjamin Lee</li>
`;

describe('addDataAttributes', () => {

  let list = document.createElement('div');
  list.innerHTML = listHTML;

  filterTheList(list, "Lucas");

  test('should add a class of d-none to each item except the one containing Lucas Myers', () => {

    expect(list.querySelectorAll('li:not(.d-none)').length).toEqual(1);
    expect(list.querySelector('li:not(.d-none').textContent).toEqual('Lucas Myers');
  });
});
