import React from "react"

type TimeTypes = {
  savedName: string | null
}

const Time = ({ savedName }: TimeTypes) => {
  const currentDate: Date = new Date()
  const currentHour: string = currentDate.getHours().toString()
  const currentMinute: string = currentDate.getMinutes().toString()
  const currentSecond: string = currentDate.getSeconds().toString()
  if (savedName === null) {
    savedName = "Theo"
  }

  const getGreetings = (hours: string, savedName: string) => {
    const numHours: number = Number(hours)

    if (numHours >= 5 && numHours < 12) {
      return `Good Morning, ${savedName} `
    } else if (numHours >= 12 && numHours < 18) {
      return `Good Afternoon, ${savedName}`
    } else if (numHours >= 18 && numHours <= 23) {
      return `Good Evening, ${savedName}`
    } else {
      return `Why are you awake at this hour, ${savedName}?`
    }
  }

  return (
    <div className='time'>
      <h2>{`${currentHour}:${currentMinute}:${currentSecond}`}</h2>
      <h3>{getGreetings(currentHour, savedName)}</h3>
    </div>
  )
}

export default Time
