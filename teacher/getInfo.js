const getInfo = async function (Id) {
  try {
    // Fetch the data to check if the user exists
    const res = await fetch("http://localhost:3000/teachers");
    const data = await res.json();

    // Find the user by ID
    const matchingUser = data.find((user) => user.id === Id);

    if (!matchingUser) {
      console.log("No user found with the entered ID");
      return;
    } else {
      return console.log(matchingUser);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getInfo,
};
