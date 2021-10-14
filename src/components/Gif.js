import { Link } from 'wouter'

export default function Gif ({ id, title, url }) {
  return (
    <div>
      <Link to={`/gif/${id}`} className='ListOfGifs-item'>
        <small>{title}</small>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}
