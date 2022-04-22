import { IComponent, IPage } from '@course/application/entities/IPage'
import { Schema, model } from 'mongoose'

export const componentSchema = new Schema<IComponent>({
  paragraph: { type: String, required: true },
  photo: { type: String, required: false },
  textInput: { type: String, required: true },
  video: { type: String, required: false },
})

const pageSchema = new Schema<IPage>({
  components: { type: [componentSchema], required: true },
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson' },
})

export const Page = model<IPage>('Page', pageSchema)
