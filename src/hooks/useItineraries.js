import { useQuery } from 'react-query'
import axios from 'axios'

export function useItinerary(start, end, mode, transit) {
  return useQuery(
    ['car', start, end, mode],
    () =>
      axios
        .get(
          `https://v2--ecolab-transport.netlify.app/.netlify/functions/callGMap/?destinations=${start.latitude}%2C${start.longitude}&origins=${end.latitude}%2C${end.longitude}&mode=${mode}`
        )
        .then((res) => res.data.rows),
    {
      enabled: start && end ? true : false,
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    }
  )
}
