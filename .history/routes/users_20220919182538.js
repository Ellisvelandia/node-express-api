import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the same name ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.delete('/:id')

export default router;
