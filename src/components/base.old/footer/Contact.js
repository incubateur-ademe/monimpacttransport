import React, { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import TextInput from 'components/base/TextInput'
import TextArea from 'components/base/TextArea'
import Select from 'components/base/Select'

const Wrapper = styled.form`
  width: 100%;
  margin-bottom: 1rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Warning = styled.p``
const Alert = styled.p`
  margin-top: 1rem;
  text-align: center;
`
export default function CO2EModal() {
  const [user, setUser] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  return (
    <Wrapper
      id='contact'
      method='post'
      data-netlify='true'
      name='contact'
      onSubmit={(e) => {
        e.preventDefault()
        setSuccess(false)
        setError(false)
        if (!user.nom || !user.email || !user.message) {
          setError(true)
        } else {
          fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode({
              'form-name': 'contact',
              ...user,
            }),
          })
            .then(() => setSuccess(true))
            .catch((error) => setSuccess(true))
        }
      }}
    >
      <TextInput
        name={'nom'}
        value={user.nom}
        error={error && !user.nom}
        label={'Votre nom'}
        onChange={({ name, value }) =>
          setUser((prevUser) => ({ ...prevUser, [name]: value }))
        }
      />
      <TextInput
        type='email'
        name={'email'}
        error={error && !user.email}
        value={user.email}
        label={'Votre email'}
        onChange={({ name, value }) =>
          setUser((prevUser) => ({ ...prevUser, [name]: value }))
        }
      />
      <Select
        name={'objet'}
        value={user.objet}
        label={'Votre sujet'}
        onChange={({ name, value }) =>
          setUser((prevUser) => ({ ...prevUser, [name]: value }))
        }
      >
        <option value={null}></option>
        <option value='transportmanquant'>
          Il manque un mode de transport
        </option>
        <option value='integration'>
          Je n'arrive pas à intégrer le simulateur
        </option>
        <option value='autre'>Autre</option>
      </Select>
      {user.objet && (
        <Warning>
          {user.objet === 'transportmanquant'
            ? `Ce simulateur n'est qu'une illustration des différences entre les principaux modes de transport et n'a pas pour objectif d'être exhaustif.`
            : ''}
        </Warning>
      )}
      <TextArea
        name={'message'}
        value={user.message}
        error={error && !user.message}
        label={'Votre message'}
        onChange={({ name, value }) =>
          setUser((prevUser) => ({ ...prevUser, [name]: value }))
        }
      />
      <ButtonWrapper>
        <Button submit>Envoyer mon message</Button>
      </ButtonWrapper>
      {error && <Alert>Merci de remplir tous les champs</Alert>}
      {success && <Alert>Merci ! Nous avons bien reçu votre message</Alert>}
    </Wrapper>
  )
}
