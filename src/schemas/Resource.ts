import { Schema, model, Document } from 'mongoose'

export interface IResourceInterface extends Document {
  name: string,
  brand: string,
  unitPrice: {
    currency: string,
    number: number
  },
  unitMeasurement: string,
  code?: string,
  expirationDate?: Date,
  manufacturingDate?: Date,
  batchCode?: string,
  active: boolean
}

const ResourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true,
  },
  unitPrice: {
    currency: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
  unitMeasurement: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: false
  },
  expirationDate: {
    type: Date,
    required: false
  },
  manufacturingDate: {
    type: Date,
    required: false
  },
  batchCode: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
}, {
  timestamps: true
})


export default model<IResourceInterface>('Resource', ResourceSchema)