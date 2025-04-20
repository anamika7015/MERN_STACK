import express from 'express';
import { create, getAllUsers } from '../controller/user.controller.js';
const route = express.Router();
route.post("/user",create);
route.get("/users",getAllUsers)
export default route;