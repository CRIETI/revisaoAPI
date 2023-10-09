import { Request, Response } from 'express';
export class TesteController {

    async list(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'teste' });
    }
}