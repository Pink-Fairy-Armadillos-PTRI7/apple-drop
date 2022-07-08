import React, { useState, useEffect } from 'react';

import mapper from '../lib/mapper.js';

import fetcher from '../lib/fetcher.js';

function TestApp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);
  const [files, setFiles] = useState([]);

  const beforeUpload = async (e) => {
    e.preventDefault();
    const requestOptions = {
      container: 'public',
      images: files,
      list,
    };

    const response = await fetcher(
      'upload/62c4c0be9d30e99a23cbb26f',
      requestOptions
    );

    const final = await mapper(response, list);

    console.log('final', final);
    await handleUpload(final);
  };

  const handleUpload = async (parsedData) => {
    const result = await fetcher('list/62c4c0be9d30e99a23cbb26f', parsedData);
    console.log(result);
  };

  useEffect(() => {}, []);

  return (
    <>
      <form>
        {[...Array(4)].map((_, index) => {
          return (
            <div className="listItem" key={index + 24}>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setFiles([...files, { name: e.target.files[0].name }]);
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setList([
                    ...list,
                    { title, description, image: image.name, file: image },
                  ]);
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
    </>
  );
}

export default TestApp;
