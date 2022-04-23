import { ICourse, ICreateCourse, IFilterCourses, IUpdateCourse } from '../entities/ICourse'

export interface ICourseRepository {
  create: (attrs: ICreateCourse) => Promise<ICourse | undefined>
  get: (filters: IFilterCourses) => Promise<ICourse[] | undefined>
  update: (attrs: IUpdateCourse) => Promise<ICourse | null>
  delete: (id: string) => Promise<boolean>
}
