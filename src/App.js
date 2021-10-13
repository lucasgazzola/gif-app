import './App.css'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import NavBar from './components/NavBar'
import { Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <NavBar />
        <div>
          <section className='Gif-container'>
            <GifsContextProvider>
              <Route
                component={SearchResults}
                path='/search/:keyword'
              />
              <Route
                component={Detail}
                path='/gif/:id'
              />
            </GifsContextProvider>
          </section>
        </div>
      </section>
    </div>
  )
}

export default App
