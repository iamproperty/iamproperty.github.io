export interface MapTableFeature {
  type: 'Feature';
  geometry: { type: 'Point'; coordinates: [number, number] };
  properties: Record<string, string>;
}

export interface MapTableData {
  pinCount: number;
  features: MapTableFeature[];
  boundsCoordinates: Array<[number, number]>;
  onloadPopup: MapTableFeature | undefined;
}

// Read each row's cells once; querying nth-child for every field is costly on large tables.
export const readMapTableData = (table: HTMLTableElement): MapTableData => {
  const headings = Array.from(table.querySelectorAll('thead th')).map(
    (heading) => heading.querySelector('.th__content')?.textContent?.trim() || heading.textContent?.trim() || ''
  );
  const allRows = Array.from(table.querySelectorAll<HTMLTableRowElement>('tr[data-longitude][data-latitude]'));
  const features: MapTableFeature[] = [];
  const boundsCoordinates: Array<[number, number]> = [];
  let onloadPopup: MapTableFeature | undefined;

  allRows
    .filter((row) => !row.classList.contains('filtered'))
    .forEach((row, index) => {
      const longitude = Number(row.dataset.longitude);
      const latitude = Number(row.dataset.latitude);
      if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return;
      if (index <= 15) boundsCoordinates.push([longitude, latitude]);

      const cells = Array.from(row.children);
      // Preserve descendant-selector behaviour for rows containing nested tables.
      const nested = row.querySelector('table') !== null;
      const rowData: Record<string, string> = {};
      headings.forEach((heading, column) => {
        const directCell = cells[column];
        const cell =
          !nested && directCell?.tagName === 'TD' ? directCell : row.querySelector(`td:nth-child(${column + 1})`);
        if (
          !cell ||
          cell.hasAttribute('data-popup-title') ||
          cell.classList.contains('selectrow') ||
          cell.classList.contains('d-none') ||
          cell.classList.contains('td--expand')
        )
          return;
        if (cell.children.length === 0) {
          rowData[heading] = cell.textContent?.trim() || '';
          return;
        }
        if (cell.querySelector('a:first-child:last-child')) return;
        rowData[heading] = cell.querySelector('.td__content')?.textContent?.trim() || cell.textContent?.trim() || '';
      });
      const link = row.querySelector<HTMLAnchorElement>('a:first-child:last-child');
      const feature: MapTableFeature = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [longitude, latitude] },
        properties: {
          title: row.querySelector('[data-popup-title]')?.textContent?.trim() || '',
          link: link?.href || '',
          linkText: link?.textContent?.trim() || '',
          ...rowData,
        },
      };
      features.push(feature);
      if (row.hasAttribute('data-open-popup')) onloadPopup = feature;
    });
  return { pinCount: allRows.length, features, boundsCoordinates, onloadPopup };
};
