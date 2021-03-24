import React, { useContext } from 'react'
import styled from 'styled-components'

import ademe from './footer/ademe.jpg'
import repufrancaise from './footer/repufrancaise.jpg'

import Button from 'components/base/Button'
import MagicLink from 'components/base/MagicLink'
import ThemeToggle from 'components/base/ThemeToggle'
import Logo from './footer/Logo'
import Contact from './footer/Contact'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.theme.colors[props.background || 'second']};
  transition: all 600ms;
`
const Content = styled.div`
  max-width: ${(props) => props.width || '35em'};
  margin: 0 auto;
  padding: 2rem 0 0;

  ${(props) => props.theme.mq.small} {
    margin: 0 3vw;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  p,
  h2 {
    color: ${(props) => props.theme.colors[props.color || 'text']};
  }
  ${(props) => props.theme.mq.small} {
    margin-bottom: 2rem;
    text-align: center;
  }
`
const Text = styled.p``
const Title = styled.h2`
  font-size: 1.75rem;
`
const StyledButton = styled(Button)`
  align-self: center;
  margin-bottom: 1.5rem;
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
  background-color: white;
`
const Institution = styled.img`
  display: block;
  height: 5.625em;
`

export default function Footer(props) {
  return (
    <Wrapper background={props.background} id='about'>
      <Content>
        <Section color={props.color}>
          <Title>D'ou viennent ces données ?</Title>
          <Text>
            Ce simulateur réutilise les données de la{' '}
            <MagicLink to='https://www.bilans-ges.ademe.fr/fr/accueil/contenu/index/page/presentation/siGras/0'>
              Base Carbone
            </MagicLink>
            . Il s’agit d’une{' '}
            <strong>base de données publique de facteurs d'émissions</strong>,
            nécessaires à la réalisation d’un bilan d’émissions de gaz à effet
            de serre (GES) et plus généralement tout exercice de comptabilité
            carbone.
          </Text>
        </Section>
        <Section color={props.color}>
          <Title>
            Comment intégrer ces données à mon site ou application ?
          </Title>
          <Text>
            Vous souhaitez{' '}
            <strong>afficher ce simulateur sur votre site</strong> ?
            Personnalisez le et intégrez le facilement grace à notre
            configurateur :
          </Text>
          <StyledButton
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
              props.setConfiguratorOpen(true)
            }}
          >
            Configurer mon intégration
          </StyledButton>
          <Text>
            Vous souhaitez <strong>réutiliser les données brutes</strong> ?
            Contactez nous à{' '}
            <MagicLink to='mailto:datagir@ademe.fr'>datagir@ademe.fr</MagicLink>{' '}
            pour bénificier de notre expertise et accompagnement.
          </Text>
          <Text>
            Ce simulateur est développé de manière ouverte (open source).
            L’ensemble du code est{' '}
            <MagicLink to='https://github.com/datagir/monimpacttransport'>
              disponible librement
            </MagicLink>
            .
          </Text>
        </Section>
        <Section color={props.color}>
          <Title>Qui sommes nous ?</Title>
          <Text>
            <MagicLink to='https://datagir.ademe.fr/'>
              <strong>Datagir</strong>
            </MagicLink>{' '}
            est un <strong>service public gratuit</strong>, porté par l’
            <MagicLink to='https://www.ademe.fr/'>ADEME</MagicLink> et
            l’incubateur de la DINUM{' '}
            <MagicLink to='https://beta.gouv.fr/'>beta.gouv.fr</MagicLink>.
          </Text>
          <Text>
            Notre mission est de{' '}
            <strong>
              diffuser les informations et données environnementales en
              open-data de l’ADEME
            </strong>{' '}
            pour encourager l’amélioration continue et l’innovation. Pour cela,{' '}
            <strong>
              nous accompagnons toutes les applications & services dans leur
              démarche responsable
            </strong>{' '}
            par l'appropriation et l’intégration de ces données afin d’apporter
            l’information au plus près des citoyens.
          </Text>
          <StyledButton to='https://datagir.ademe.fr/'>
            En savoir plus
          </StyledButton>
        </Section>
        <Section color={props.color}>
          <Title>Nous contacter</Title>
          <Text>
            Vous souhaitez nous contacter pour{' '}
            <strong>
              obtenir de l'aide sur l'intégration des données ou des simulateurs
            </strong>{' '}
            ? Ou alors pour{' '}
            <strong>
              nous signaler un bug, nous faire une suggestion ou donner votre
              avis sur ce simulateur
            </strong>{' '}
            ? Écrivez nous à{' '}
            <strong>
              <MagicLink to='mailto:datagir@ademe.fr'>
                datagir@ademe.fr
              </MagicLink>
            </strong>{' '}
            ou utilisez le formulaire ci‑dessous :
          </Text>
          <Contact />
        </Section>

        <ThemeToggle mobile />
      </Content>
      <LogosWrapper>
        <Logos to='https://datagir.ademe.fr/'>
          <Institution src={repufrancaise} alt='République Française' />
          <Institution src={ademe} alt='ADEME' />
          <Logo />
        </Logos>
      </LogosWrapper>
    </Wrapper>
  )
}
