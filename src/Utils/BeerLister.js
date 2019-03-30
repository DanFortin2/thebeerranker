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

Beers.deleteLagers = id => {
  const url = `${baseUrl}/lagers/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
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

Beers.deleteAles = id => {
  const url = `${baseUrl}/ales/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

Beers.getPilsner = () => {
  const url = `${baseUrl}/pilsners`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers.map(beer => beer);
    });
  });
};

Beers.deletePilsner = id => {
  const url = `${baseUrl}/pilsners/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

Beers.getStout = () => {
  const url = `${baseUrl}/stouts`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.beers.map(beer => beer);
    });
  });
};

Beers.deleteStout = id => {
  const url = `${baseUrl}/stouts/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

Beers.createBeer = beers => {
  let urlVariable = '';
  switch (beers.beerlist) {
    case 'lager':
      urlVariable = '/lagers';
      break;
    case 'stout':
      urlVariable = '/stouts';
      break;
    case 'pilsner':
      urlVariable = '/pilsners';
      break;
    case 'ale':
      urlVariable = '/ales';
      break;
    default:
      urlVariable = '/lagers';
      break;
  }
  const url = `${baseUrl}${urlVariable}`;
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


export default Beers;
