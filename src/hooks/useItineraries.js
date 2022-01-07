import { useQuery } from 'react-query'
import axios from 'axios'

export function useCarItineraries(start, end) {
  return useQuery(
    ['car', start, end],
    () =>
      axios
        .get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${start.latitude}%2C${start.longitude}&origins=${end.latitude}%2C${end.longitude}&key=AIzaSyAZ3aBiFOelyV_Qa4tHiCWPqTlARhmyXbw`
        )
        .then((res) => res.data.rows),
    {
      enabled: start && end ? true : false,
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    }
  )
}
