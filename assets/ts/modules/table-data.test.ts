import { describe, it, expect } from './test';
import { TableData } from './table-data';

describe('Data-backed table selection', () => {
  it('selects 5,000 original records while returning only one page', () => {
    const records = Array.from({ length: 5000 }, (_, id) => ({ id, name: `Record ${id}` }));
    const data = new TableData();
    data.replace(records);
    expect(data.page(1, 50).length === 50);
    data.selectAll();
    expect(data.selectedRecords().length === 5000);
    expect(data.selectedRecords()[123] === records[123]);
    data.select(123, false);
    expect(data.selectedRecords().length === 4999);
    expect(!data.selected.has(123));
    expect(data.page(100, 50)[49] === records[4999]);
  });

  it('retains stable selection through sorting and filtering; select all covers matching records', () => {
    const data = new TableData();
    data.replace([
      { id: 'a', n: 1 },
      { id: 'b', n: 2 },
      { id: 'c', n: 3 },
    ]);
    data.select('a', true);
    data.filter((record) => Number(record.n) > 1);
    data.sort((a, b) => Number(b.n) - Number(a.n));
    expect(data.page(1, 1)[0].id === 'c');
    data.selectAll();
    expect(data.selected.size === 3);
    data.clear();
    data.selectAll();
    expect(data.selected.size === 2 && !data.selected.has('a'));
    data.filter(null);
    data.sort(null);
    expect(data.page(1, 1)[0].id === 'a');
    expect(data.selected.size === 2);
  });

  it('prunes removed IDs and returns replacement records on refresh', () => {
    const data = new TableData();
    data.replace([{ key: 1 }, { key: 2 }], 'key');
    data.selectAll();
    const updated = { key: 2, title: 'Updated' };
    data.replace([updated, { key: 3 }]);
    expect(data.selectedRecords().length === 1);
    expect(data.selectedRecords()[0] === updated);
  });

  it('rejects missing and duplicate IDs without replacing existing data', () => {
    const data = new TableData();
    data.replace([{ id: 'valid' }]);
    for (const records of [[{}], [{ id: 1 }, { id: 1 }], [{ id: NaN }]]) {
      let threw = false;
      try {
        data.replace(records);
      } catch {
        threw = true;
      }
      expect(threw);
      expect(data.records[0].id === 'valid');
    }
    data.replace([{ nested: { key: 42 } }], (record) => (record.nested as { key: number }).key);
    data.selectAll();
    expect(data.selected.has(42));
  });
});
