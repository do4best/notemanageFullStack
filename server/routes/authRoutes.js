import express from "express";
import {AuthController} from "../controller/authController.js";
const router = express.Router()

router.post('/register',AuthController.registerUser)

export {router}