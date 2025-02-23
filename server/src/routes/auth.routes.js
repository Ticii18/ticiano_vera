import { Router } from "express";
import {
  signInCtrl,
  getMeCtrl,
  signUpCtrl,
  signOutCtrl,
} from "../controllers/auth.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import {
  signInValidation,
  signUpValidation,
} from "../validations/auth.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const authRouter = Router();

authRouter.post("/sign-in", signInValidation ,applyValidations, signInCtrl);
authRouter.post("/sign-up", signUpValidation, applyValidations, signUpCtrl);
authRouter.get("/me/:id", validateJwt, getMeCtrl);
authRouter.post("/sign-out", signOutCtrl)

export { authRouter };
