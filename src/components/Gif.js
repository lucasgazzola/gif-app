import './Gif.css'
import { Link } from 'wouter'

export default function Gif ({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className='Img-container'>
      <small>{title}</small>
      <img alt={title} src={url} />
    </Link>
  )
}
