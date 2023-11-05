import React, { useState } from "react"
import "./styles.css"
import Weather from "./components/Weather"
import Day from "./components/Day"
import Time from "./components/Time"
import Quote from "./components/Quote"

function App() {
  const [name, setName] = useState<string | null>("")
  const [city, setCity] = useState<string | null>("")
  const [savedName, setSavedName] = useState<string | null>("")
  const [savedCity, setSavedCity] = useState<string | null>("")
  const [showComponents, setShowComponents] = useState<boolean>(false)

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSavedCity(city)
    setSavedName(name)
  }

  return (
    <div className='app'>
      {!showComponents ? (
        <>
          <form className='app__form'>
            <div className='app__form__name'>
              <label>Name:</label>
              <input
                type='text'
                placeholder='Enter your little name'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>
            <div className='app__form__city'>
              <label>City:</label>
              <input
                type='text'
                placeholder='Enter the city you prefer'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
              />
            </div>

            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                handleSave(e)
                setShowComponents(true)
              }}
            >
              Goo
            </button>
          </form>
        </>
      ) : (
        <>
          <Weather savedCity={savedCity} />
          <Day />
          <Time savedName={savedName} />
          <Quote />
        </>
      )}
    </div>
  )
}

export default App
