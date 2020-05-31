import { Schema, model, Document } from 'mongoose'

export interface ICompanyInterface extends Document {
  companyName: string,
  fantasyName: string,
  fieldActivity: string,
  registeredNumber: string,
  address: {
    zipcode: string,
    city: string,
    state: string,
    country: string,
    street: string,
    number: string
  },
  phone?: [String],
  active: boolean
}

const CompanySchema = new Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  fantasyName: {
    type: String,
    required: true,
  },
  fieldActivity: {
    type: String,
    required: true,
  },
  registeredNumber: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: Object,
    required: true,
    zipcode: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    street: { type: String },
    number: { type: String },
  },
  phone: [{
    type: String,
    required: false
  }],
  active: {
    type: Boolean,
    default: true,
    required: true
  }
}, {
  timestamps: true
})

export default model<ICompanyInterface>('Company', CompanySchema)