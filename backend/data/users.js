import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Rahul",
    email: "rahul@example.com",
    password: bcrypt.hashSync("123456"),
  },
  {
    name: "Aman",
    email: "aman@example.com",
    password: bcrypt.hashSync("123456"),
  },
];

export default users;
