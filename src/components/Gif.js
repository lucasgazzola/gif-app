import { Link } from 'wouter'

export default function Gif ({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className='ListOfGifs-item'>
      <small>{title}</small>
      <img alt={title} src={url} />
    </Link>
  )
}
