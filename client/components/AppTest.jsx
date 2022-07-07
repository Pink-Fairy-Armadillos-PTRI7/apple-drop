import React, { useState, useEffect } from 'react';
// import mapper from '../lib/mapper.js';

const listItem = {};

function TestApp() {
  const [list, setList] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);

  const formData = new FormData();

  const beforeUpload = async (e) => {
    e.preventDefault();

    for (const [key, value] of formData) {
      console.log(key, value);
    }

    const data = await fetch('/api/list/upload/62c4c0be9d30e99a23cbb26f', {
      method: 'POST',
      body: formData,
      // headers: {
      //   Authorization:
      //     'Bearer ${add token from sign up or sign in}
      // },
    }).then((res) => res.json());

    setImgUrls(data);
  };

  const handleUpload = () => {};

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
