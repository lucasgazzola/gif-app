import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  return { loading, gifs }
}
