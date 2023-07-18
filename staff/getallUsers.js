const getAllUser = function (url, select) {
  try {
    fetch(url + select)
      .then((response) => response.json())
      .then((data) => {
        return console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
  ``;
};
module.exports = {
  getAllUser,
};
