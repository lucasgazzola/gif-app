import { Link } from 'wouter'
import Browser from './Browser'

export default function NavBar () {
  return (
    <div className='Nav-container'>
      <Link to='/'><h1 style={{ cursor: 'pointer' }}>App</h1></Link>
      <Browser />
      <Link to='/search/riquelme'>JRR10</Link>
      <Link to='/search/leo messi'>LM10</Link>
      <Link to='/search/boca juniors'>Boca</Link>
      <Link to='/search/argentina'>Argentina</Link>
      <Link to='/search/futbol'>Futbol</Link>
    </div>
  )
}
