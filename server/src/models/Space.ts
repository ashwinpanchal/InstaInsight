import { model, Schema } from 'mongoose';
import { ISpace, SpaceVisibility } from './interfaces/space.interface';

function generateAccessCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const spaceSchema: Schema = new Schema<ISpace>(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    visibility: {
      type: String,
      enum: Object.values(SpaceVisibility),
      default: SpaceVisibility.PUBLIC,
    },
    accessCode: { type: String },
    responses: { type: [{ type: Schema.Types.Mixed }], default: [] },
  },
  {
    timestamps: true,
  }
);

spaceSchema.pre('save', function (next) {
  if (this.visibility === SpaceVisibility.PRIVATE && !this.accessCode) {
    this.accessCode = generateAccessCode();
  }
  next();
});

export const Space = model<ISpace>('Space', spaceSchema);
