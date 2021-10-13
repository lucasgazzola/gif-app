import { useContext } from 'react'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif'

export default function Detail ({ params }) {
  const { gifs } = useContext(GifsContext)
  const { id } = params
  const gif = gifs.find(singleGif => singleGif.id === id)
  return (
    <Gif {...gif} />
  )
}
