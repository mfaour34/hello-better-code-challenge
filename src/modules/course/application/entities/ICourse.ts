import { Types } from 'mongoose'
import { IChapter } from './IChapter'
import { ILesson } from './ILesson'
import { IPage } from './IPage'

export interface ICourse extends IBaseCourse {
  _id?: Types.ObjectId
}

export interface IBaseCourse {
  name: string
  description: string
  photo: string
  language: Language
}

export interface ICourseResponse extends ICreateCourse {
  _id: Types.ObjectId
}

export interface IFilterCourses {
  ids: string[]
}

export interface ICreateCourse extends IBaseCourse {
  chapters: IChapter[]
  lessons: ILesson[]
  pages: IPage[]
}

export enum Language {
  en = 'en',
  de = 'de',
}
