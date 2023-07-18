const createUser = async (url, select, user) => {
  console.log(
    "🚀 ~ file: createNewUser.js:2 ~ createUser ~ user:",
    JSON.stringify(user)
  );
  try {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user),
    };
    console.log(
      "🚀 ~ file: createNewUser.js:20 ~ createUser ~ options:",
      options
    );

    const res = await fetch(url + "/" + select, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
};
