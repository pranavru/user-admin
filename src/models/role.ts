import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
    roleName: string;
    description: string;
}

const RoleSchema: Schema = new Schema({
    roleName: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.model<IRole>('Role', RoleSchema);