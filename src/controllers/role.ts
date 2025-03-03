import { Request, Response } from 'express';
import Role from '../models/role';

export class RoleController {
    public async getAllRoles(req: Request, res: Response): Promise<void> {
        try {
            const roles = await Role.find();
            res.json(roles);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async getRoleById(req: Request, res: Response): Promise<void> {
        try {
            const role = await Role.findById(req.params.id);
            if (role) {
                res.json(role);
            } else {
                res.status(404).send('Role not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async createRole(req: Request, res: Response): Promise<void> {
        try {
            const newRole = new Role(req.body);
            const role = await newRole.save();
            res.status(201).json(role);
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async updateRole(req: Request, res: Response): Promise<void> {
        try {
            const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (role) {
                res.json(role);
            } else {
                res.status(404).send('Role not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }

    public async deleteRole(req: Request, res: Response): Promise<void> {
        try {
            const role = await Role.findByIdAndDelete(req.params.id);
            if (role) {
                res.json(role);
            } else {
                res.status(404).send('Role not found');
            }
        } catch (err) {
            res.status(500).send((err as Error).message);
        }
    }
}