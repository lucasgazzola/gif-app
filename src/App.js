import './App.css'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'
import { Route } from 'wouter'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <NavBar />
        <section className='Gif-container'>
          <Route
            component={SearchResults}
            path='/search/:keyword'
          />
          <Route
            component={Detail}
            path='/gif/:id'
          />
        </section>
      </section>
    </div>
  )
}

export default App
