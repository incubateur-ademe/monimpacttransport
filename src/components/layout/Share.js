import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import Select from 'components/base/FancySelect'
import Panel from 'components/base/Panel'
import Integration from './share/Integration'
import Link from './share/Link'
import Mail from './share/Mail'
import Facebook from './share/Facebook'
import Twitter from './share/Twitter'
import Linkedin from './share/Linkedin'
import Whatsapp from './share/Whatsapp'

const ShareButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  svg {
    display: block;
    width: 3.5rem;
    height: auto;

    ${(props) => props.theme.mq.small} {
      width: 2.5rem;
    }

    path {
      fill: ${(props) => props.theme.colors.main};
    }
  }
`
const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.second};
  font-weight: bold;
  line-height: 1.2;

  ${(props) => props.theme.mq.small} {
    font-size: 1.5rem;
  }
`
export default function Share(props) {
  const {
    shareOpen,
    setShareOpen,
    typeShare,
    url,
    setTypeShare,
    setEmbedOpen,
  } = useContext(UXContext)

  const absoluteUrl = `${window.location.origin}${url}`
  return (
    <Panel
      small={props.small}
      id={props.small ? 'share-mobile' : null}
      open={shareOpen}
      toggleClose={() => setShareOpen((prevOpen) => !prevOpen)}
      index={1}
    >
      <Title>
        Partager{' '}
        <Select
          fancy
          value={typeShare}
          onChange={setTypeShare}
          options={[
            { value: 'simulator', label: `ce simulateur` },
            {
              value: 'result',
              label: `ce résultat`,
            },
          ]}
        />
      </Title>
      <ShareButtons>
        <Integration onClick={() => setEmbedOpen(true)} />
        <Mail
          subject={props.messages.mail[typeShare].subject}
          body={props.messages.mail[typeShare].body}
          url={absoluteUrl}
        />
        <Facebook
          quote={props.messages.facebook[typeShare].quote}
          url={absoluteUrl}
        />
        <Twitter
          title={props.messages.twitter[typeShare].title}
          url={absoluteUrl}
        />
        <Linkedin
          title={props.messages.linkedin[typeShare].title}
          summary={props.messages.linkedin[typeShare].summary}
          source={props.messages.linkedin[typeShare].source}
          url={absoluteUrl}
        />
        <Whatsapp
          title={props.messages.whatsapp[typeShare].title}
          url={absoluteUrl}
        />
      </ShareButtons>
      <Link url={absoluteUrl} />
    </Panel>
  )
}
