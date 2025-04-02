import { mount } from '@vue/test-utils';
import Chart from './Chart.vue';

describe('Chart component', () => {
  const test = mount(Chart, {
    propsData: {
      max: 100,
      min: 0,
      yaxis: [
        {
          value: 0,
          display: '£0',
        },
        {
          value: 50,
          display: '£50',
        },
        {
          value: 100,
          display: '£100',
        },
      ],
      fields: [{ key: 'year' }, { key: 'Growth' }, { key: 'Growth2' }],
      items: [
        {
          year: '2011',
          growth: '£50.0',
          growth2: '£50.10',
        },
        {
          year: '2012',
          growth: '£75.00',
          growth2: '£50.10',
        },
        {
          year: '2013',
          growth: '£45.00',
          growth2: '£57.10',
        },
        {
          year: '2014',
          growth: '£35.00',
          growth2: '£80.10',
        },
      ],
    },
  });

  // On load render a table
  it('renders a thead', () => {
    expect(test.find('thead').exists()).toBe(true);
  });

  it('renders a tbody', () => {
    expect(test.find('tbody').exists()).toBe(true);
  });

  // Render a bar chart
  it('renders a y-axis', () => {
    expect(test.find('.chart__yaxis').exists()).toBe(true);
  });

  it('renders guidelines', () => {
    expect(test.find('.chart__guidelines').exists()).toBe(true);
  });

  it('Numeric value and percent value is added to the table cells', () => {
    expect(test.html()).toContain(
      '<td data-label="Growth" data-numeric="50" style="--bottom:0%;--percent:50%;"><span data-group="2011" data-label="Growth">£50.0</span></td>'
    );
  });
});

describe('Line Chart component', () => {
  const test = mount(Chart, {
    propsData: {
      type: 'line',
      max: 100,
      min: 0,
      yaxis: [
        {
          value: 0,
          display: '£0',
        },
        {
          value: 50,
          display: '£50',
        },
        {
          value: 100,
          display: '£100',
        },
      ],
      fields: [{ key: 'year' }, { key: 'Growth' }, { key: 'Growth2' }],
      items: [
        {
          year: '2011',
          growth: '£50.0',
          growth2: '£50.10',
        },
        {
          year: '2012',
          growth: '£75.00',
          growth2: '£50.10',
        },
        {
          year: '2013',
          growth: '£45.00',
          growth2: '£57.10',
        },
        {
          year: '2014',
          growth: '£35.00',
          growth2: '£80.10',
        },
      ],
    },
  });

  it('SVG line is created ', () => {
    expect(test.html()).toContain(
      '<path fill="none" d="M 0 50 L 66.66666666666667 25 L 133.33333333333334 55 L 200 65 "></path>'
    );
  });
});

describe('Pie Chart component', () => {
  const test = mount(Chart, {
    propsData: {
      type: 'pie',
      max: 100,
      min: 0,
      yaxis: [
        {
          value: 0,
          display: '£0',
        },
        {
          value: 50,
          display: '£50',
        },
        {
          value: 100,
          display: '£100',
        },
      ],
      fields: [{ key: 'year' }, { key: 'Growth' }, { key: 'Growth2' }],
      items: [
        {
          year: '2011',
          growth: '£50.0',
          growth2: '£50.10',
        },
        {
          year: '2012',
          growth: '£75.00',
          growth2: '£50.10',
        },
        {
          year: '2013',
          growth: '£45.00',
          growth2: '£57.10',
        },
        {
          year: '2014',
          growth: '£35.00',
          growth2: '£80.10',
        },
      ],
    },
  });

  it('SVG pie section is created ', () => {
    expect(test.html()).toContain(
      '<path d="M -100 1.2246467991473532e-14 A 100 100 0 0 1 100 -2.4492935982947064e-14 L 0 0"></path>'
    );
  });
});
