import { mount } from '@vue/test-utils'
import Table from './Table.vue'

describe('Table component', () => {

  const test = mount(Table, {
    propsData: {
      fields: [
        { key: 'name' },
        { key: 'job' },
        { key: 'address' },
        { key: 'emergency_contact' },
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
  it('renders a thead', () => {

    expect(test.find('thead').exists()).toBe(true)
  })

  it('renders a tbody', () => {

    expect(test.find('tbody').exists()).toBe(true)
  })

  it('renders a table heading', () => {

    expect(test.find('thead th').exists()).toBe(true)
  })

})
