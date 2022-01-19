const getAllUsers = (req, res) => {
  const usersData = parserClients(path);
  res.send(usersData);
};

module.exports = getAllUsers;
