import mongoose, { Schema, Document } from 'mongoose';

export interface IZone extends Document {
    description: string;
}

const ZoneSchema: Schema = new Schema({
    description: { type: String, required: true }
});

export default mongoose.model<IZone>('Zone', ZoneSchema);