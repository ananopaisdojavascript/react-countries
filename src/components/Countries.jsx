import { Fragment } from 'react'
import Country from "./Country"

export default function Countries({children: countries = []}) {
  return (
    <Fragment>
      <h2>{countries.length} País(es)</h2>
      <section>{countries.map(country => {
        return <Country key={country.name.common}>{country.name.common}</Country>
      })}</section>
    </Fragment>
  )
}