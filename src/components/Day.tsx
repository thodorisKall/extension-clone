import React from "react"

function Day() {
  const dateInfo: Date = new Date()
  const day: string = dateInfo.getDate().toString()
  const month: string = (dateInfo.getMonth() + 1).toString()
  const year: string = dateInfo.getFullYear().toString()

  return (
    <div className='day'>
      <h4>{`${day}/ ${month}/ ${year}`}</h4>
    </div>
  )
}

export default Day
