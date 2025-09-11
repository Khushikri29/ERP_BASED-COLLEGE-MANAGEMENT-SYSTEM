import express, { Router } from "express"
import { forgotPassword, login, signup } from "../controller/Auth.controller.js"
const AuthRoute = express.Router()


AuthRoute.post('/login', login)
AuthRoute.post('/signup', signup)
AuthRoute.post('/forgot-password', forgotPassword)

export default AuthRoute