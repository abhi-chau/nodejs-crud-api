const userService = require('../services/userService');

exports.getAllUsers = (req , res) =>{
  const users = userService.getUsers();
  res.json(users);
}

exports.getAllUsersById = (req , res) =>{
  const user = userService.getUsersById(parseInt(req.params.id))
  if (!user) return res.status(404).send("User not found");
  res.json(user);
}

