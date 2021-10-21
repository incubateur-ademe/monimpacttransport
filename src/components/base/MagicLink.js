import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MagicLink(props) {
  const { search } = useLocation()
  return !props.to ? (
    <button
      className={props.className}
      onClick={props.onClick}
      aria-label={props['aria-label']}
    >
      {props.children}
    </button>
  ) : props.to.includes(':') || props.to.includes('.') ? (
    <a
      className={props.className}
      href={props.to}
      onClick={props.onClick || null}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={props['aria-label']}
    >
      {props.children}
    </a>
  ) : (
    <Link
      className={props.className}
      to={props.to + (!props.to.includes('?') && search)}
      onClick={props.onClick || null}
      aria-label={props['aria-label']}
    >
      {props.children}
    </Link>
  )
}
