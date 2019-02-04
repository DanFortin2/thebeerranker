import 'whatwg-fetch';

const Beers = {};
const baseUrl = 'http://localhost:4000/api'


Beers.getLagers = () => {
  const url = `${baseUrl}/lagers`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers.map(beer => beer);
    });
  });
};

export default Beers;
