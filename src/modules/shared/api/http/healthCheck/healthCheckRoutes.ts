import { Application } from 'express'
import { healthz } from './healthCheckController'

export const applyHealthCheckRoutes = (app: Application): void => {
  app.get('/health', healthz)
  // app.get('/readiness', readiness)
}
