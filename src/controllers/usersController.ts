import { Request, Response } from "express";
import { usersService } from "../services/usersService.js";

export class usersController {
    service = new usersService();

}