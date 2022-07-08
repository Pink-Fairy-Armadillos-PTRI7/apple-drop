function fetcher(url, data) {
  return fetch(`/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
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
