import { Request, Response } from 'express';
import Zone from '../models/zone';

export class ZoneController {
    public async getAllZones(req: Request, res: Response): Promise<void> {
        try {
            const zones = await Zone.find();
            res.json(zones);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async getZoneById(req: Request, res: Response): Promise<void> {
        try {
            const zone = await Zone.findById(req.params.id);
            if (zone) {
                res.json(zone);
            } else {
                res.status(404).send('Zone not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async createZone(req: Request, res: Response): Promise<void> {
        try {
            const newZone = new Zone(req.body);
            const zone = await newZone.save();
            res.status(201).json(zone);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async updateZone(req: Request, res: Response): Promise<void> {
        try {
            const zone = await Zone.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (zone) {
                res.json(zone);
            } else {
                res.status(404).send('Zone not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async deleteZone(req: Request, res: Response): Promise<void> {
        try {
            const zone = await Zone.findByIdAndDelete(req.params.id);
            if (zone) {
                res.json(zone);
            } else {
                res.status(404).send('Zone not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }
}