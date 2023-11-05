import React, { useState, useEffect } from "react"
import axios from "axios"
import { QuoteApiResponse } from "../interfaces/QuoteInterface"

const Quote = () => {
  const [quotesData, setQuoteData] = useState<QuoteApiResponse | null>(null)
  const quotesApiUrl = "https://api.quotable.io/random"

  const fetchQuotes = () => {
    axios
      .get<QuoteApiResponse>(quotesApiUrl)
      .then((res) => {
        setQuoteData(res.data)
        console.log("Quotes: ", res.data)
      })
      .catch((err) => console.log("ERROR at Quotes api", err.message))
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className='quote'>
      <h3>{quotesData?.content}</h3>
      <p>- {quotesData?.author}</p>
    </div>
  )
}

export default Quote
