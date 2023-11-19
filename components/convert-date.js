import { parseISO, format } from "date-fns"

// console.log(format(new Date(), 'yyyy-MM-dd'))
export default function ConvertDate({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      { format( parseISO(dateISO), 'yyyy年MM月dd日' ) }
    </time>
  )
}
