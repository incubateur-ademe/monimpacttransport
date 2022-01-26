import React from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import MagicLink from 'components/base/MagicLink'
import ContactPrompt from 'components/base/ContactPrompt'
import Button from 'components/base/Button'
import Marianne from 'components/base/Marianne'
import Ademe from 'components/base/Ademe'
import Datagir from 'components/base/Datagir'
import MobileButtons from './footer/MobileButtons'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.theme.colors[props.iframe ? 'background' : 'footer']};
`
const Content = styled.div`
  max-width: ${(props) => props.width || '37rem'};
  margin: 0 auto;
  padding: ${(props) => (props.iframe ? 1 : 2)}rem 1rem 1rem;
  background-color: ${(props) =>
    props.iframe ? props.theme.colors.footer : 'transparent'};

  border-radius: ${(props) => (props.iframe ? '1rem' : 0)};
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  p {
    width: 100%;
  }
  h2,
  h3 {
    width: 100%;
    font-size: 1.75rem;
  }
`
const SmallButton = styled(Button)`
  margin: 0 auto;
  font-size: 0.75rem;
`
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Logos = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  background-color: #fff;
`
export default function Footer(props) {
  const iframe = useIframe()
  return (
    <Wrapper
      className={props.className}
      background={props.background}
      iframe={iframe}
      id='apropos'
    >
      <Content iframe={iframe}>
        <MobileButtons iframe={iframe} />

        {iframe && (
          <SmallButton to='https://monimpacttransport.fr/'>
            En savoir plus sur ce simulateur
          </SmallButton>
        )}
        {!iframe && (
          <>
            <Section>{props.children}</Section>
            <Section>
              <ContactPrompt />
            </Section>
            <Section>
              <h2>Qui sommes-nous ?</h2>
              <p>
                <MagicLink to='https://datagir.ademe.fr/'>
                  <strong>Datagir</strong>
                </MagicLink>{' '}
                est un <strong>service public gratuit</strong>, porté par l’
                <MagicLink to='https://www.ademe.fr/'>ADEME</MagicLink> et
                l’incubateur de la DINUM{' '}
                <MagicLink to='https://beta.gouv.fr/'>beta.gouv.fr</MagicLink>.
              </p>
              <p>
                Notre mission est de{' '}
                <strong>
                  diffuser les informations et données environnementales en
                  open-data de l’ADEME
                </strong>{' '}
                pour encourager l’amélioration continue et l’innovation. Pour
                cela,{' '}
                <strong>
                  nous accompagnons toutes les applications & services dans leur
                  démarche responsable
                </strong>{' '}
                par l'appropriation et l’intégration de ces données afin
                d’apporter l’information au plus près des citoyens.
              </p>
              <Button to='https://datagir.ademe.fr/#applications'>
                Voir tous nos simulateurs
              </Button>
            </Section>
          </>
        )}
      </Content>
      {!iframe && (
        <LogosWrapper>
          <Logos to='https://datagir.ademe.fr/' aria-label='datagir.ademe.fr'>
            <Marianne />
            <Ademe />
            <Datagir />
          </Logos>
        </LogosWrapper>
      )}
    </Wrapper>
  )
}
