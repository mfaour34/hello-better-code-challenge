import { ICreateCourse } from '@course/application/entities/ICourse'
import { CourseRepository } from '@course/infrastructure/repositories/CourseRepository'
import { handleHttpError } from '@shared/utils/handleHttpError'
import { validateRequired } from '@shared/utils/validateRequired'
import { Request, Response } from 'express'
import _ from 'lodash'

export class CourseController {
  constructor() {
    //bind all functions to this
    const methodsNames = _(Object.getOwnPropertyNames(CourseController.prototype)).without('constructor').value()
    _.bindAll(this, methodsNames)
  }

  public async create(req: Request, res: Response) {
    const courseRepo = new CourseRepository()
    try {
      const validatedBody = validateRequired(req.body, ['name', 'description', 'photo', 'language']) as ICreateCourse
      const request = await courseRepo.create({
        ...validatedBody,
      })
      res.status(200).json(request)
    } catch (error) {
      handleHttpError(res, error)
    }
  }
  public async list(req: Request, res: Response) {
    const courseRepo = new CourseRepository()
    try {
      const filters = this.getAttributesFromQuery(req)
      const request = await courseRepo.get(filters)
      res.status(200).json(request)
    } catch (error) {
      handleHttpError(res, error)
    }
  }

  public async delete(req: Request, res: Response) {
    const courseRepo = new CourseRepository()
    try {
      const body = validateRequired(req.body, ['id'])
      const request = await courseRepo.delete(body)
      request ? res.status(200).json({ msg: 'success' }) : res.status(402).json({ msg: 'failed' })
    } catch (error) {
      handleHttpError(res, error)
    }
  }
  public async update(req: Request, res: Response) {
    const courseRepo = new CourseRepository()
    try {
      const request = await courseRepo.update(req.body)
      request ? res.status(200).json({ msg: 'success' }) : res.status(402).json({ msg: 'failed' })
    } catch (error) {
      handleHttpError(res, error)
    }
  }

  private getAttributesFromQuery(request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = {}
    if (request.query?.id) {
      body['ids'] = request.query.id as string[]
    }
    return body
  }
}
