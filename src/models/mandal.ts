import mongoose, { Schema, Document } from 'mongoose';

export interface IMandal extends Document {
    description: string;
    zoneId: mongoose.Schema.Types.ObjectId;
}

const MandalSchema: Schema = new Schema({
    description: { type: String, required: true },
    zoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Zone', required: true }
});

export default mongoose.model<IMandal>('Mandal', MandalSchema);