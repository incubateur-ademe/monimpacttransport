import React from 'react'

import Embed from 'components/layout/Embed'
import Address from './embedWrapper/Address'

export default function EmbedWrapper(props) {
  return (
    <Embed small={props.small} id={process.env.REACT_APP_IFRAME_ID}>
      <Address />
    </Embed>
  )
}
