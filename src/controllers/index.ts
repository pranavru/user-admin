import { Request, Response } from 'express';

export class IndexController {
    getIndex(req: Request, res: Response) {
        res.send('Welcome to the Express Server!');
    }
}