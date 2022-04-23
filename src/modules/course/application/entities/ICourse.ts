import { Types } from 'mongoose'

export interface ICourse extends IBaseCourse {
  _id?: Types.ObjectId
  chapters?: Types.ObjectId[]
}

export interface IBaseCourse {
  name: string
  description: string
  photo: string
  language?: Language
}

export interface IUpdateCourse {
  id: string
  name?: string
  description?: string
  photo?: string
  language?: Language
}

export interface IFilterCourses {
  ids: string[]
}

export interface ICreateCourse extends IBaseCourse {
  chapters?: ICreateChapter[]
}

export enum Language {
  en = 'en',
  de = 'de',
}

export interface IChapter extends IBaseChapter {
  _id?: Types.ObjectId
  lessons?: ILesson
}

export interface IBaseChapter {
  name: string
  photo: string
  courseId?: Types.ObjectId
}

export interface ICreateChapter extends IBaseChapter {
  lessons: ICreateLesson[]
}

export interface ILesson extends IBaseLesson {
  _id?: Types.ObjectId
  pages?: IPage[]
}

export interface IBaseLesson {
  name: string
  description: string
  photo: string
  chapterId?: Types.ObjectId
}

export interface ICreateLesson extends IBaseLesson {
  pages: ICreatePage[]
}

export interface IPage extends ICreatePage {
  _id?: Types.ObjectId
}

export interface ICreatePage {
  components: IComponent
  lessonId?: Types.ObjectId
}

export interface IComponent {
  photo: string
  video: string
  paragraph: string
  textInput: string
}
