import { mount } from '@vue/test-utils'
import Table from './Table.vue'

describe('Table component', () => {

  const test = mount(Table, {
    propsData: {
      fields: [
        { key: 'name', filterable: true, sortable: true },
        { key: 'job', filterable: true, sortable: true },
        { key: 'address' },
        { key: 'emergency_contact', filterable: true, sortable: true },
        { key: 'actions' }
      ],
      items: [
        {
          name: 'Derrick',
          job: 'Electrician',
          address: '5 King Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Andrew',
          job: 'Electrician',
          address: '5 King Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        },
        {
          name: 'Rachel',
          job: 'Electrician',
          address: '5 King Street<br> London<br> London<br> SW20 0AL<br> United Kingdom',
          emergency_contact: 'Susan',
          actions: '<a href="#">View</a><br><a href="#">Point of Contact</a>'
        }
      ],
      show: 2
    }
  })

  // On load
  it('renders a div with the class of table wrapper', () => {

    expect(test.classes()).toContain('table__wrapper')
  })

  it('renders a thead', () => {

    expect(test.find('thead').exists()).toBe(true)
  })

  it('renders a tbody', () => {

    expect(test.find('tbody').exists()).toBe(true)
  })

  it('renders a filters form when needed', () => {

    expect(test.find('.table__filters').exists()).toBe(true)
  })

  it('renders a pagination form when needed', () => {

    expect(test.find('.table__pagination').exists()).toBe(true)
  })

  // Events
  it('can be sorted by name', async () => {

    const firstCol = test.find('[data-sortable]')
    expect(firstCol.html()).toContain('Name')

    await firstCol.trigger('click')

    let firstRowCol = test.find('tbody tr:first-child [data-label="Name"]')
    expect(firstRowCol.html()).toContain('Andrew')
  })

  it('can be filtered by name', async () => {

    const searchField = test.find('[type="search"]')

    await searchField.setValue('Andrew')
    await searchField.trigger('change')

    expect(test.findAll('tbody tr').length).toBe(1)
  })

})



/*
describe('addDataAttributes', () => {

  test('should add data-label attribute to cells', () => {
    // arrange
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    
    th1.innerHTML = 'Heading 1';
    th2.innerHTML = 'Heading 2';
    td1.innerHTML = 'Cell 1';
    td2.innerHTML = 'Cell 2';
    
    tr1.appendChild(th1);
    tr1.appendChild(td1);
    tr2.appendChild(th2);
    tr2.appendChild(td2);
    
    thead.appendChild(tr1);
    tbody.appendChild(tr2);
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // act
    addDataAttributes(table);
    
    // assert
    expect(td1.getAttribute('data-label')).toEqual('Heading 1');
    expect(td2.getAttribute('data-label')).toEqual('Heading 2');
  });

  test('should not add data-label attribute to cells if heading is undefined', () => {
    // arrange
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    
    td1.innerHTML = 'Cell 1';
    td2.innerHTML = 'Cell 2';
    
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    
    tbody.appendChild(tr1);
    
    table.appendChild(tbody);
    
    // act
    addDataAttributes(table);
    
    // assert
    expect(td1.hasAttribute('data-label')).toBeFalsy();
    expect(td2.hasAttribute('data-label')).toBeFalsy();
  });

});

*/