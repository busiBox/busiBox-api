import { Schema, model, Document } from 'mongoose'

export interface IProductInterface extends Document {
  name: string,
  description?: string,
  code?: string,
  resource: [{
    resourceId: Schema.Types.ObjectId,
    quantity: number,
  }]
  unitCost: {
    currency: string,
    number: number
  },
  unitMeasurement: string,
  expirationDate?: Date,
  manufacturingDate?: Date,
  batchCode?: string,
  active: boolean
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  resource: [{
    resourceId: {
      type: Schema.Types.ObjectId,
      ref: 'Resource',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  unitCost: {
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


export default model<IProductInterface>('Product', ProductSchema)