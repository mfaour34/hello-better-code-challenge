import { IChapter, IComponent, ICourse, ILesson, IPage, Language } from '@course/application/entities/ICourse'
import { Schema, model } from 'mongoose'

const componentSchema = new Schema<IComponent>(
  {
    paragraph: { type: String, required: true },
    photo: { type: String, required: false },
    textInput: { type: String, required: true },
    video: { type: String, required: false },
  },
  { _id: false },
)

const pageSchema = new Schema<IPage>(
  {
    components: { type: componentSchema, required: true },
  },
  { _id: false },
)

const lessonSchema = new Schema<ILesson>(
  {
    name: { type: String, required: true },
    photo: { type: String },
    description: { type: String, required: true },
    pages: { type: [pageSchema] },
  },
  { _id: false },
)

const chapterSchema = new Schema<IChapter>(
  {
    name: { type: String },
    photo: { type: String },
    lessons: { type: [lessonSchema] },
  },
  { _id: false },
)

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
  chapters: { type: [chapterSchema] },
})

export const Course = model<ICourse>('Course', courseSchema)
