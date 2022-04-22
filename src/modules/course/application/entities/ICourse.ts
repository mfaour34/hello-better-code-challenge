import { Types } from 'mongoose'

export interface ICourse extends ICreateCourse {
  _id?: Types.ObjectId
}

export interface ICreateCourse {
  name: string
  description: string
  photo: string
  language: Language
}

export enum Language {
  en = 'en',
  de = 'de',
}
