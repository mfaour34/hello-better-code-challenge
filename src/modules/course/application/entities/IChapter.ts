import { Types } from 'mongoose'

export interface IChapter extends ICreateChapter {
  _id?: Types.ObjectId
}

export interface ICreateChapter {
  name: string
  photo: string
  courseId: Types.ObjectId
}
