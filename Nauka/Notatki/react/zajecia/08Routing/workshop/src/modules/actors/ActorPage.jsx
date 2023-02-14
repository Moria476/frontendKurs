import { Link, Outlet, useParams } from 'react-router-dom'
import { actors } from '../../assets/actorsData'
import { Actor } from './Actor'

export const ActorPage = () => {
  const { actorId } = useParams()

  const actor = actors.find(actor => {
    return actor.id === Number(actorId)
  })

  if (!actor) {
    return (
      <>
        <h1>Nie znaleziono aktora... 😭</h1>
        <Outlet />
      </>
    )
  }

  return (
    <div>
      <Actor {...actor} />
      <Outlet />
      <Link to="/actors">Powrót</Link>
    </div>
  )
}
