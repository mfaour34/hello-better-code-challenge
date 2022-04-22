import { ILesson } from '@course/application/entities/ILesson'
import { Schema, model } from 'mongoose'

const lessonSchema = new Schema<ILesson>({
  name: { type: String, required: true },
  photo: { type: String },
  description: { type: String, required: true },
  chapterId: { type: Schema.Types.ObjectId, ref: 'Chapter' },
})

export const Lesson = model<ILesson>('Lesson', lessonSchema)
