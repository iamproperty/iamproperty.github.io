import { describe, expect, it } from './test';
import { createElement, installTestDom } from './test-dom';
import { readMapTableData } from './map-data';

installTestDom();

describe('Map table data', () => {
  it('keeps popup titles and visible data while excluding control and hidden cells', () => {
    const table = createElement('table');
    const head = createElement('thead');
    const headings = createElement('tr');
    ['Address', 'Price', 'Internal', 'Selection'].forEach((label) =>
      headings.appendChild(createElement('th', {}, label))
    );
    head.appendChild(headings);
    const body = createElement('tbody');
    const row = createElement('tr', { dataLongitude: '-1.5', dataLatitude: '54.5', dataOpenPopup: '' });
    row.appendChild(createElement('td', { dataPopupTitle: '' }, 'Property one'));
    row.appendChild(createElement('td', {}, '£100,000'));
    row.appendChild(createElement('td', { class: 'd-none' }, 'Private'));
    row.appendChild(createElement('td', { class: 'selectrow' }, 'Select'));
    body.appendChild(row);
    table.appendChild(head);
    table.appendChild(body);
    const result = readMapTableData(table as unknown as HTMLTableElement);
    expect(result.pinCount === 1 && result.features.length === 1);
    expect(result.features[0].geometry.coordinates.join() === '-1.5,54.5');
    expect(result.features[0].properties.title === 'Property one');
    expect(result.features[0].properties.Price === '£100,000');
    expect(!('Address' in result.features[0].properties));
    expect(!('Internal' in result.features[0].properties));
    expect(!('Selection' in result.features[0].properties));
    expect(result.onloadPopup === result.features[0]);
  });

  it('preserves cluster counts, filtered rows, invalid coordinates and bounds limits', () => {
    const table = createElement('table');
    const head = createElement('thead');
    const headings = createElement('tr');
    headings.appendChild(createElement('th', {}, 'Value'));
    head.appendChild(headings);
    const body = createElement('tbody');
    for (let index = 0; index < 22; index++) {
      const row = createElement('tr', {
        dataLongitude: index === 1 ? 'invalid' : String(-index),
        dataLatitude: String(50 + index),
      });
      if (index === 0) row.classList.add('filtered');
      if (index === 4 || index === 21) row.setAttribute('data-open-popup', '');
      row.appendChild(createElement('td', {}, String(index)));
      body.appendChild(row);
    }
    table.appendChild(head);
    table.appendChild(body);
    const result = readMapTableData(table as unknown as HTMLTableElement);
    expect(result.pinCount === 22);
    expect(result.features.length === 20);
    expect(result.boundsCoordinates.length === 15);
    expect(result.boundsCoordinates[0].join() === '-2,52');
    expect(result.boundsCoordinates[14].join() === '-16,66');
    expect(result.onloadPopup === result.features[19]);
    expect(result.onloadPopup?.properties.Value === '21');
  });
});
