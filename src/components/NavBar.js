import { Link } from 'wouter'
import Browser from './Browser'

export default function NavBar () {
  return (
    <div className='Nav-container'>
      <Link to='/'><h1 style={{ cursor: 'pointer' }}>App</h1></Link>
      <Browser />
      <Link to='/search/simpsons'>Simpsons</Link>
      <Link to='/search/fun'>Fun</Link>
      <Link to='/search/memes'>Memes</Link>
    </div>
  )
}
