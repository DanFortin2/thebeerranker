import 'whatwg-fetch';

const Beers = {};
const baseUrl = 'http://localhost:4000/api'



//General

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



//Lagers 
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

Beers.updateLagers = beers => {
  const url = `${baseUrl}/lagers/${beers.id}`; 
  const fetchOptions = {
    method: 'PUT',
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
}


Beers.deleteLagers = id => {
  const url = `${baseUrl}/lagers/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};



//Ales

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

Beers.updateAles = beers => {
  const url = `${baseUrl}/ales/${beers.id}`; 
  const fetchOptions = {
    method: 'PUT',
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
}

Beers.deleteAles = id => {
  const url = `${baseUrl}/ales/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};



//Pilsners

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

Beers.updatePilsners = beers => {
  const url = `${baseUrl}/pilsners/${beers.id}`; 
  const fetchOptions = {
    method: 'PUT',
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
}

Beers.deletePilsner = id => {
  const url = `${baseUrl}/pilsners/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};



//Stouts

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

Beers.updateStouts = beers => {
  const url = `${baseUrl}/stouts/${beers.id}`; 
  const fetchOptions = {
    method: 'PUT',
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
}

Beers.deleteStout = id => {
  const url = `${baseUrl}/stouts/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};



export default Beers;
