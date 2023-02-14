import { createGlobalStyle } from 'styled-components'
import { PageLayout } from './components/PageLayout'
import { NotFound } from './NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { MoviesPage } from './modules/movies/MoviesPage'
import { ActorsPage } from './modules/actors/ActorsPage'
import { MenuItem } from './components/MenuItem'
import { ActorPage } from './modules/actors/ActorPage'

export const App = () => {
  return (
    <BrowserRouter>
      <PageLayout
        menuContent={
          <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/movies">Movies</MenuItem>
            <MenuItem to="/actors">Actors</MenuItem>
          </>
        }
      >
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/actors/:actorId" element={<ActorPage />}>
            <Route
              path="details"
              element={
                <p>
                  Tu mogłyby być jakieś dodatkowe dane renderowane, czy cuś 😊
                </p>
              }
            />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
      <GlobalStyles />
    </BrowserRouter>
  )
}
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`
