import React, { useContext } from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'

const StyledModal = styled(Modal)`
  padding: 0;
`
export default function SurveyModal() {
  const { survey: open, setSurvey: setOpen } = useContext(ModalContext)

  const iframe = useIframe()

  return (
    <StyledModal open={open} setOpen={setOpen}>
      <iframe
        title='enquete'
        src={
          iframe
            ? 'https://airtable.com/embed/shrHHi3KASi7cDNJl?backgroundColor=teal'
            : 'https://airtable.com/embed/shrHHi3KASi7cDNJl?backgroundColor=teal'
        }
        frameBorder='0'
        width='100%'
        height='533'
      ></iframe>
    </StyledModal>
  )
}
