import React, { useState } from 'react';
import mapper from '../lib/mapImageUrlToObj.js';

const listItem = {};

function TestApp() {
  const [list, setList] = useState([]);

  const formData = new FormData();

  const beforeUpload = async (e) => {
    e.preventDefault();

    const data = await fetch('/api/list/upload/62c4c0be9d30e99a23cbb26f', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MDYxNTY3LCJleHAiOjE2NTcxNDc5Njd9.OhbwlQIuRj0I2Ox5l3fVA3LvrXo8vrYI4Zc2IWI_5mc',
      },
    }).then((res) => res.json());
    console.log(data, 'line 21!!!');

    const newList = mapper(data, list);
    console.log(newList, 'line 25');
  };

  const handleUpload = () => {};
  return (
    <>
      <form>
        {[...Array(4)].map((_, index) => {
          return (
            <div className="listItem" key={index + 24}>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => (listItem.title = e.target.value)}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) => (listItem.description = e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => {
                  listItem.image = e.target.files[0].name;
                  formData.append('image', e.target.files[0]);
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setList((list) => [...list, listItem]);
                }}
              >
                Push
              </button>
            </div>
          );
        })}
        <button type="submit" onClick={beforeUpload}>
          submit
        </button>
      </form>

      {/* <div className="listItem">
        <input type="text" />
        <input type="file" />
      </div>
      <div className="listItem">
        <input type="text" />
        <input type="file" />
      </div>
      <div className="listItem">
        <input type="text" />
        <input type="file" />
      </div>
    </div>*/}
    </>
  );
}

export default TestApp;
