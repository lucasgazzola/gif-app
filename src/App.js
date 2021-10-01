import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Route, Link } from 'wouter'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/riquelme'>JRR10</Link>
        <Link to='/gif/leo messi'>LM10</Link>
        <Link to='/gif/boca juniors'>Boca</Link>
        <Link to='/gif/argentina'>Argentina</Link>
        <Link to='/gif/futbol'>Futbol</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  )
}

export default App
