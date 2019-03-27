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

Beers.createLagers = beers => {
  const url = `${baseUrl}/lagers`;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({beers: beers})
  };
  return fetch(url, fetchOptions).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers;
    });
  });
};


Beers.getAles = () => {
  const url = `${baseUrl}/ales`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers.map(beer => beer);
    });
  });
};



Beers.getPilsner = () => {
  const url = `${baseUrl}/pilsner`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers.map(beer => beer);
    });
  });
};



Beers.getStout = () => {
  const url = `${baseUrl}/stout`;

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
