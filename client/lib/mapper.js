const mapper = (data, list) => {
  if (data.length) {
    return list.map((item, index) => {
      const location = data.find(
        (file) => file.name === item.image.name
      ).location;

      item.image = location;
      return item;
    });
  }
};

export default mapper;
