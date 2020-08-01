import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Leonatdo", email: "leonardo@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async store(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Leo", email: "leo@email.com" },
      message: { subject: "Bem vindo", body: " Ao sistema" },
    });

    return res.send("Sucesso");
  },
};
