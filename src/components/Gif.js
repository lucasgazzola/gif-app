import './Gif.css'

export default function Gif ({ id, title, url }) {
  return (
    <a href={`#${id}`} className='gif-container'>
      <h3>{title}</h3>
      <img alt={title} src={url} />
    </a>
  )
}
