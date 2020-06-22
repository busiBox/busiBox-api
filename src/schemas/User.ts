import { Schema, model, Document } from 'mongoose'

export interface IUserInterface extends Document {
  name: string,
  email: string,
  cpf: string,
  phone?: string,
  avatar?: string,
  company: Schema.Types.ObjectId,
  active: boolean,
  role: string,
  password: string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  company: {
    type: Schema.Types.ObjectId,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})


export default model<IUserInterface>('User', UserSchema)