import React from 'react';

function listForm() {
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
          listItem.file = e.target.files[0];
          setFiles([...files, { name: e.target.files[0].name }]);
        }}
      />
    </div>
  );
}

export default listForm;
