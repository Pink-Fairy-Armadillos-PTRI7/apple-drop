const mapper = async (images, list) => {
  const finalList = [];
  const requestOptions = {
    method: 'PUT',
    body: null,
  };
  for (let i = 0; i < list.length; i++) {
    const listItem = { title: list[i].title, description: list[i].description };
    const match = images.find((image) => list[i].image === image.originalName);

    if (match) {
      requestOptions.body = list[i].file;
      const putObj = await fetch(match.signedURL, requestOptions);
      console.log(putObj.status, 'result');
      listItem.image = match.location;
    }
    finalList.push(listItem);
  }
  return finalList;
};

export default mapper;
