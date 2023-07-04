const Festival = require('../src/api');
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

test('fetchData retrieves festival data', () => {
  const festival = new Festival();
  
  return festival.fetchData().then(data => {
    expect(data).toBeDefined();
    expect(festival.data).toEqual(data);
  });
});

test('showData displays festivals', () => {
  const festival = new Festival();
  const mockData = {
    records: [
      {
        fields: {
          commune_principale: 'Commune 1',
          domaine: 'Domaine 1',
          date_debut_ancien: '2023-07-01',
          date_de_fin_ancien: '2023-07-05'
        }
      },
      {
        fields: {
          commune_principale: 'Commune 2',
          domaine: 'Domaine 2',
          date_debut_ancien: '2023-07-10',
          date_de_fin_ancien: '2023-07-15'
        }
      }
    ]
  };
  
  // Mocking the fetchData method
  festival.fetchData = jest.fn().mockResolvedValue(mockData);
  
  // Mocking the DOM element
  document.body.innerHTML = `
    <ul id="festivalsList"></ul>
  `;
  const festivalsList = document.getElementById('festivalsList');
  
  // Calling the showData method
  festival.showData();
  
  // Checking if the festivals are correctly displayed
  expect(festivalsList.innerHTML).toContain('Commune: Commune 1, Domaine: Domaine 1, Date de début: 2023-07-01, Date de fin: 2023-07-05');
  expect(festivalsList.innerHTML).toContain('Commune: Commune 2, Domaine: Domaine 2, Date de début: 2023-07-10, Date de fin: 2023-07-15');
});