import { ICourse, ICourseResponse, ICreateCourse, IFilterCourses } from '../entities/ICourse'

export interface IQuizRepository {
  create: (attrs: ICreateCourse) => Promise<ICourse | undefined>
  get: (filters: IFilterCourses) => Promise<ICourseResponse[] | undefined>
  update: (attrs: ICreateCourse) => Promise<ICourse | undefined>
  delete: (id: string) => Promise<boolean>
}
