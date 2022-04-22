import { IChapter } from '@course/application/entities/IChapter'
import { Schema, model } from 'mongoose'

const chapterSchema = new Schema<IChapter>({
  name: { type: String },
  photo: { type: String },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
})

export const Chapter = model<IChapter>('Chapter', chapterSchema)
