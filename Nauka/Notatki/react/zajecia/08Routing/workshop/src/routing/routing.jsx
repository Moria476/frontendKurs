import { ActorsPage } from '../modules/actors/ActorsPage'
import { MoviesPage } from '../modules/movies/MoviesPage'

export const routes = {
  '/movies': <MoviesPage />,
  '/actors': <ActorsPage />,
  '/': <h1>Hello from my site!</h1>,
}
