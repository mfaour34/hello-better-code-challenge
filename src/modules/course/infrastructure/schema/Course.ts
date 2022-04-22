import { ICourse, Language } from '@course/application/entities/ICourse'
import { Schema, model } from 'mongoose'

const courseSchema = new Schema<ICourse>({
  description: { type: String, required: true },
  language: {
    type: String,
    default: Language.en,
    required: true,
    enum: Language,
  },
  name: { type: String, required: true },
  photo: String,
})

export const Course = model<ICourse>('Course', courseSchema)
