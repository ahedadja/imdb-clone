import React from "react"
import { Typography } from "@mui/material"
import { format, previousFriday, addDays, getMonth } from "date-fns"

function CurrentWeekend() {
  let friday = previousFriday(new Date())
  let sunday = addDays(friday, 2)

  let date = format(friday, "MMMM d - ")
  if (getMonth(friday) !== getMonth(sunday)) {
    date += format(sunday, "MMMM ")
  }
  date += format(sunday, "d, yyyy")

  return (
    <Typography variant="body1" sx={{ flexGrow: 1 }} gutterBottom>
      Weekend of {date}
    </Typography>
  )
}

export default CurrentWeekend
