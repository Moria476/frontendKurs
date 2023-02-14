import styled from 'styled-components'
import { Movie } from './Movie'

const movies = [
  {
    id: 1,
    name: 'Batman',
    avatarUrl:
      'https://m.media-amazon.com/images/M/MV5BZGZjM2UwZWEtM2M4OS00ZmU5LWE5NzgtNjdjOTA4NDFlODc3XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    actors: ['Robert Pattison', 'Jeffrey Wright'],
  },
  {
    id: 2,
    name: 'The Book of Boba Fett',
    avatarUrl:
      'https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description:
      "Bounty hunter Boba Fett & mercenary Fennec Shand navigate the underworld when they return to Tatooine to claim Jabba the Hutt's old turf.",
    actors: ['Temuera Morrison', 'Ming-Na Wen', 'Frank Trigg'],
  },
  {
    id: 3,
    name: "Don't Look Up",
    avatarUrl:
      'https://m.media-amazon.com/images/M/MV5BNDlkYTkyZGQtNjkyNS00NTU5LWFhYmYtNTNkMGMzNTg0ZGVkXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_QL75_UY562_CR11,0,380,562_.jpg',
    description:
      'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.',
    actors: ['Leonardo DiCaprio', 'Jennifer Lawrence', 'Meryl Streep'],
  },
]

export const MoviesPage = () => (
  <Wrapper>
    <h1>Movies</h1>
    {movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 2rem 4rem;
`
