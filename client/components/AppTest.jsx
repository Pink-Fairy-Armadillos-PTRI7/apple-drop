import React, { useState, useEffect } from 'react';
// import mapper from '../lib/mapper.js';

const listItem = {};

function TestApp() {
  const [list, setList] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);

  const formData = new FormData();

  const beforeUpload = async (e) => {
   e.preventDefault()
    for (const [key, value] of formData) {
      console.log('key', key, ' value ' , value);
    }
    const data = await fetch('/api/list/upload/62c632dacdbe83fa03518f70', {
      method: 'POST',
      body: formData,
      headers: { 'Content-Type': 'application/json' },
      headers: {
        Authorization:
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM2MzJkYWNkYmU4M2ZhMDM1MThmNzAiLCJlbWFpbCI6ImFubmFAZGV2LmNvbSIsImlhdCI6MTY1NzE1NjMxNiwiZXhwIjoxNjU3MjQyNzE2fQ.c58o7emX2jLWVMpaxZNMAzGpdqpyDNwqr2_LQ2Kb70Y`
      },
    }).then((res) => res.json());
    console.log('data--->', data)
    setImgUrls(data);
  };



  const handleUpload = () => { };

  // const mapper = (data, list) => {
  //   console.log(data, 'hiiiii');
  //   if (data.length) {
  //     return list.map((item, index) => {
  //       const location = data.find(
  //         (file) => file.name === item.image.name
  //       ).location;

  //       item.image = location;
  //       return item;
  //     });
  //   }
  // };

  useEffect(() => {
    console.log(imgUrls);
    // console.log(mapper(imgUrls, list));
  }, [imgUrls]);

  return (
    <>
      <form onSubmit={beforeUpload}>
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
        <button type="submit" >
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
