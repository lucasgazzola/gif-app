import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <div>
      <h3>Ultima Busqueda</h3>
      <div className='ListOfGifs'>
        {gifs.map(({ id, title, url }) => (
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />))}
      </div>
    </div>
  )
}
