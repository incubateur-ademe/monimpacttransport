import { useState, useEffect } from 'react'

export default function useIframe(initialValue) {
  const [iframe, setIframe] = useState(initialValue || false)
  useEffect(() => {
    setIframe(window.location.search.includes('iframe'))
  }, [])

  return iframe
}
