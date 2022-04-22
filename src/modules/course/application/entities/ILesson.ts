import { Types } from 'mongoose'

export interface ILesson extends ICreateLesson {
  _id?: Types.ObjectId
}

export interface ICreateLesson {
  name: string
  description: string
  photo: string
  chapterId: Types.ObjectId
}
