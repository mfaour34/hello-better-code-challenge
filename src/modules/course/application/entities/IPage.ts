import { Types } from 'mongoose'

export interface IPage extends ICreatePage {
  _id?: Types.ObjectId
}

export interface ICreatePage {
  components: IComponent[]
  lessonId: Types.ObjectId
}

export interface IComponent {
  photo: string
  video: string
  paragraph: string
  textInput: string
}
