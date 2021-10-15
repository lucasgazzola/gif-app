import { API_KEY } from './settings'

export default function getTrendingTerms ({ keyword = 'random' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`
  return fetch(API_URL)
    .then(data => data.json())
    .then(json => {
      const { data } = json
      if (Array.isArray(data)) {
        const gifs = data.map(gif => {
          const { images, title, id } = gif
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs
      }
    })
}
