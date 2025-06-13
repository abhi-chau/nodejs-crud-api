const users = [
  { id: 1, name: "Abhishek", role: "Developer" },
  { id: 2, name: "Ravi", role: "Tester" }
];

exports.getUsers = ()=>{
  return users;
}

exports.getUsersById = (id) =>{
  return  users.filter(u=>u.id === id);
}