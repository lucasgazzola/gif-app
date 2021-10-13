import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    loading
      ? <h3 style={{ display: 'inline-block' }}>Loading...</h3>
      : <ListOfGifs gifs={gifs} />
  )
}
