import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Modal from 'components/base/Modal'
import FancySelect from 'components/base/FancySelect'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
export default function TeletravailModal() {
  const { teletravail: open, setTeletravail } = useContext(ModalContext)
  const { days, setDays, holidays, setHolidays, extraKm, setExtraKm } =
    useContext(SearchContext)

  return (
    <Modal open={open} setOpen={setTeletravail}>
      <Title>Mode télétravail</Title>
      <Text>
        Nous comptons{' '}
        <FancySelect
          value={days}
          onChange={setDays}
          options={[
            { value: '1', label: `1 jour` },
            { value: '2', label: `2 jours` },
            { value: '3', label: `3 jours` },
            { value: '4', label: `4 jours` },
            { value: '5', label: `5 jours` },
            { value: '6', label: `6 jours` },
            { value: '7', label: `7 jours` },
          ]}
        />{' '}
        travaillé{days > 1 && 's'} par semaine et{' '}
        <FancySelect
          value={holidays}
          onChange={setHolidays}
          options={[
            { value: '1', label: `1 semaine` },
            { value: '2', label: `2 semaines` },
            { value: '3', label: `3 semaines` },
            { value: '4', label: `4 semaines` },
            { value: '5', label: `5 semaines` },
            { value: '6', label: `6 semaines` },
            { value: '7', label: `7 semaines` },
            { value: '8', label: `8 semaines` },
            { value: '9', label: `9 semaines` },
            { value: '10', label: `10 semaines` },
            { value: '11', label: `11 semaines` },
            { value: '12', label: `12 semaines` },
            { value: '13', label: `13 semaines` },
          ]}
        />{' '}
        de congé par an (+ 7 jours fériés).
      </Text>
      <Text>
        Nous considérons que{' '}
        <FancySelect
          value={extraKm}
          onChange={setExtraKm}
          options={[
            { value: '0.0', label: `0 %` },
            { value: '0.10', label: `10 %` },
            { value: '0.15', label: `15 %` },
            { value: '0.20', label: `20 %` },
            { value: '0.25', label: `25 %` },
            { value: '0.30', label: `30 %` },
            { value: '0.35', label: `35 %` },
            { value: '0.40', label: `40 %` },
            { value: '0.45', label: `45 %` },
            { value: '0.50', label: `50 %` },
          ]}
        />{' '}
        des émissions évitées via le télétravail sont émises pour d'autres
        trajets (courses, école, etc.), comme le suggère cette{' '}
        <MagicLink to='https://librairie.ademe.fr/mobilite-et-transport/3776-caracterisation-des-effets-rebond-induits-par-le-teletravail.html'>
          étude de l'ADEME
        </MagicLink>
        .
      </Text>
      <Text>
        Les autres effets rebonds non liés aux déplacements (consommation
        d'électricité du foyer, achat de matériel pour le télétravail, etc.) ne
        sont pas modélisés ici. Pour donner un ordre de grandeur,{' '}
        <MagicLink to='https://monconvertisseurco2.fr/?co2=248&equivalents=27006_27002_27976_27010_206589'>
          la fabrication d'un écran d'ordinateur émet autant que 1 285 km de
          voiture (248 kgCO2e)
        </MagicLink>
        .
      </Text>
    </Modal>
  )
}
