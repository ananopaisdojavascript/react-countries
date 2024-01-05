import { Fragment } from 'react'

export default function Item({
  children:
  value = "",
  name = ""
}) {
  return (
    <Fragment>
      <span>
        <strong>{name}</strong> {value}
      </span>
    </Fragment>
  )
}