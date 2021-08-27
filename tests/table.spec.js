import { mount } from '@vue/test-utils'
import Table from '@/elements/Table/Table.vue'

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

    expect(test.findAll('thead').exists()).toBe(true)
  })

  it('renders a tbody', () => {

    expect(test.findAll('tbody').exists()).toBe(true)
  })

  it('renders a filters form when needed', () => {

    expect(test.findAll('.table__filters').exists()).toBe(true)
  })

  it('renders a pagination form when needed', () => {

    expect(test.findAll('.table__pagination').exists()).toBe(true)
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
