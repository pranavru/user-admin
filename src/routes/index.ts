import { Application } from "express";
import { ZoneController } from '../controllers/zone';
import { MandalController } from '../controllers/mandal';
import { IndexController } from '../controllers/index';
import { RoleController } from "../controllers/role";

const routes = {
    index: '/',
    zones: '/zones',
    zoneById: '/zones/:id',
    mandals: '/mandals',
    mandalById: '/mandals/:id',
    roles: '/roles',
    roleById: '/roles/:id'
};

export const setRoutes = (app: Application) => {
    const indexController = new IndexController();
    const zoneController = new ZoneController();
    const mandalController = new MandalController();
    const roleController = new RoleController();

    app.get(routes.index, indexController.getIndex.bind(indexController));
    
    app.get(routes.zones, zoneController.getAllZones.bind(zoneController));
    app.get(routes.zoneById, zoneController.getZoneById.bind(zoneController));
    app.post(routes.zones, zoneController.createZone.bind(zoneController));
    app.put(routes.zoneById, zoneController.updateZone.bind(zoneController));
    app.delete(routes.zoneById, zoneController.deleteZone.bind(zoneController));
    
    app.get(routes.mandals, mandalController.getAllMandals.bind(mandalController));
    app.get(routes.mandalById, mandalController.getMandalById.bind(mandalController));
    app.post(routes.mandals, mandalController.createMandal.bind(mandalController));
    app.put(routes.mandalById, mandalController.updateMandal.bind(mandalController));
    app.delete(routes.mandalById, mandalController.deleteMandal.bind(mandalController));

    app.get(routes.roles, roleController.getAllRoles.bind(roleController));
    app.get(routes.roleById, roleController.getRoleById.bind(roleController));
    app.post(routes.roles, roleController.createRole.bind(roleController));
    app.put(routes.roleById, roleController.updateRole.bind(roleController));
    app.delete(routes.roleById, roleController.deleteRole.bind(roleController));
}
