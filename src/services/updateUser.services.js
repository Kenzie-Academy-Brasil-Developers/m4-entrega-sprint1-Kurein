import users from "../database";

const updateUserService = (id, name, email) => {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "not found";
  }

  const date = new Date();

  users[userIndex].name = name || users[userIndex].name;
  users[userIndex].email = email || users[userIndex].email;
  users[userIndex].updatedOn = date.toLocaleString();

  return users[userIndex];
};

export default updateUserService;
