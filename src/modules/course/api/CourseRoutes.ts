import { Application } from 'express'
import { CourseController } from './CourseController'

export const applyCourseRoutes = (app: Application): void => {
  const courseController = new CourseController()
  app.post('/course', courseController.create)
  app.get('/course', courseController.list)
  app.patch('/course', courseController.update)
  app.delete('/course', courseController.delete)
}
