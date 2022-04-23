import { ICreateCourse, ICourse, IFilterCourses, IUpdateCourse } from '@course/application/entities/ICourse'
import { ICourseRepository } from '@course/application/repositories/ICourseRepository'
import mongoose from 'mongoose'
import { Course } from '../schema/Course'

export class CourseRepository implements ICourseRepository {
  public async delete(id: string): Promise<boolean> {
    try {
      let course = undefined
      if (mongoose.Types.ObjectId.isValid(id)) {
        course = await Course.findByIdAndDelete(new mongoose.Types.ObjectId(id))
      }
      return Boolean(course)
    } catch (error) {
      console.error(error)
      return false
    }
  }

  public async update(attrs: IUpdateCourse): Promise<ICourse | null> {
    try {
      const course = await Course.findByIdAndUpdate(attrs.id, { $set: { ...attrs, id: undefined } })
      console.log(attrs)
      return course
    } catch (error) {
      console.error(error)
      return null
    }
  }

  public async get(filters: IFilterCourses): Promise<ICourse[] | undefined> {
    try {
      const filter = this.applyFilters(filters)
      const courses = await Course.find(filter)
      return courses
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  public async create(attrs: ICreateCourse): Promise<ICourse | undefined> {
    try {
      const course = await Course.create(attrs)
      return course
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  private applyFilters(filters: IFilterCourses) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = {}
    if (filters?.ids) {
      body['_id'] = { $in: filters?.ids }
    }

    return body
  }
}
