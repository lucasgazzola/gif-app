import { useState } from 'react'
import { useLocation } from 'wouter'

export default function Browser () {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
    setKeyword('')
  }

  const handleChange = e => setKeyword(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Search gif...' value={keyword} type='text' onChange={handleChange} />
    </form>
  )
}
