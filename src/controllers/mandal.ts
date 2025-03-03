import { Request, Response } from 'express';
import Mandal from '../models/mandal';

export class MandalController {
    public async getAllMandals(req: Request, res: Response): Promise<void> {
        try {
            const mandals = await Mandal.find().populate('zoneId');
            res.json(mandals);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async getMandalById(req: Request, res: Response): Promise<void> {
        try {
            const mandal = await Mandal.findById(req.params.id).populate('zoneId');
            if (mandal) {
                res.json(mandal);
            } else {
                res.status(404).send('Mandal not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async createMandal(req: Request, res: Response): Promise<void> {
        try {
            const newMandal = new Mandal(req.body);
            const mandal = await newMandal.save();
            res.status(201).json(mandal);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async updateMandal(req: Request, res: Response): Promise<void> {
        try {
            const mandal = await Mandal.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (mandal) {
                res.json(mandal);
            } else {
                res.status(404).send('Mandal not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async deleteMandal(req: Request, res: Response): Promise<void> {
        try {
            const mandal = await Mandal.findByIdAndDelete(req.params.id);
            if (mandal) {
                res.json(mandal);
            } else {
                res.status(404).send('Mandal not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }
}