import Cookies from 'js-cookie';

function fetcher(url, data) {
  const token = Cookies.get('token');

  return fetch(`/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },

    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status > 399 && res.status < 200) {
        throw new Error();
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export default fetcher;
