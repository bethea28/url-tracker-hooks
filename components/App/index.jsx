import React, { useState } from 'react'
import axios from 'axios'
import './app.scss'

let App = () => {
  const [inputValue, setInputValue] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [baseUrl, setBaseUrl] = useState('localhost:4000')

  const handleClick = (event) => {
    let longUrl = inputValue
    let fullUrl = baseUrl + longUrl
    let shortUrl = Math.floor(Math.random() * (999 - 100 + 1) + 100)

    axios.post('/', {
      longUrl: inputValue,
      shortUrl: baseUrl + '/' + shortUrl.toString(),
    })

    setInputValue('')
    setShortUrl(baseUrl + '/' + shortUrl.toString())
  }
  return (
    <section className='app-component'>
      <div className='app-component__container'>
        <p>URL TO BE SHORTENED</p>
        <input
          className='app-component__input'
          value={inputValue}
          placeholder='e.x. www.google.com'
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
        <button onClick={handleClick} className='app-component__button'>
          POST URL
        </button>
      </div>
      <h1 className='app-component__short-url'>{shortUrl}</h1>
    </section>
  )
}
export default App
