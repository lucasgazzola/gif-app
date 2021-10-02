import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Route, Link } from 'wouter'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'><h1 style={{ cursor: 'pointer' }}>App</h1></Link>
        <Link to='/search/riquelme'>JRR10</Link>
        <Link to='/search/leo messi'>LM10</Link>
        <Link to='/search/boca juniors'>Boca</Link>
        <Link to='/search/argentina'>Argentina</Link>
        <Link to='/search/futbol'>Futbol</Link>
        <Route
          component={ListOfGifs}
          path='/search/:keyword'
        />
      </section>
    </div>
  )
}

export default App
