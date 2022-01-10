import { useQuery } from 'react-query'
import axios from 'axios'

export function useSuggestions(search) {
  return useQuery(
    ['search', search],
    () =>
      search && search.length > 2
        ? axios
            .get(
              `https://v2--ecolab-transport.netlify.app/.netlify/functions/callGMapSearch?input=${search}&language=fr`
            )
            .then((res) => res.data.predictions)
        : Promise.resolve([]),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}
export function useAddress(id) {
  return useQuery(
    ['address', id],
    () =>
      axios
        .get(
          `https://v2--ecolab-transport.netlify.app/.netlify/functions/callGMapPlace?place_id=${id}`
        )
        .then((res) => res.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: id ? true : false,
    }
  )
}
export function usePosition(position) {
  return useQuery(
    ['position', position?.timestamp],
    () =>
      axios
        .get(
          `https://api-adresse.data.gouv.fr/reverse/?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
        )
        .then((res) => res.data),
    {
      enabled: position ? true : false,
      refetchOnWindowFocus: false,
    }
  )
}
