import { Schema, model, Document } from 'mongoose'

interface IUserInterface extends Document {
  email: string,
  name: string
}

const UserSchema = new Schema({
  email: String,
  name: String
}, {
  timestamps: true
})

export default model<IUserInterface>('User', UserSchema)