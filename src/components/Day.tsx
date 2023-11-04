import React from "react"

function Day() {
  const dateInfo: Date = new Date()
  const day: string = dateInfo.getDate().toString()
  const month: string = (dateInfo.getMonth() + 1).toString()
  const year: string = dateInfo.getFullYear().toString()

  return (
    <div>
      <h3>{`${day}/ ${month}/ ${year}`}</h3>
    </div>
  )
}

export default Day
