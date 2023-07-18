const updateUser = async function (url, select, Id, updates) {
  try {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(updates),
    };

    // Fetch the data to check if the user exists
    const res = await fetch(url + "/" + select);
    const data = await res.json();

    // Find the user by ID
    const matchingUser = data.find((user) => user.id === Id);

    if (!matchingUser) {
      console.log("No user found with the entered ID");
      return;
    } else {
      await fetch(url + "/" + select + "/" + matchingUser.id, options);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateUser,
};
