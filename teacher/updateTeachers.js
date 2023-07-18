const updateTeacher = async function (Id, updates) {
  try {
    const options = {
      method: "PUT",
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

    // Fetch the data to check if the teacher exists
    const res = await fetch(`http://localhost:3000/teachers`);
    const data = await res.json();

    // Find the teacher by ID
    const matchingTeacher = data.find((teacher) => teacher.id === Id);

    if (!matchingTeacher) {
      console.log("No teacher found with the entered ID");
      return;
    } else {
      await fetch(
        `http://localhost:3000/teachers/${matchingTeacher.id}`,
        options
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateTeacher,
};
