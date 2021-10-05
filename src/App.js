import './App.css'
import ListOfGifs from './components/ListOfGifs'
import GifDetail from './components/GifDetail'
import NavBar from './components/NavBar'
import { Route } from 'wouter'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <NavBar />
        <section className='Gif-container'>
          <Route
            component={ListOfGifs}
            path='/search/:keyword'
          />
          <Route
            component={GifDetail}
            path='/gif/:id'
          />
        </section>
      </section>
    </div>
  )
}

export default App
