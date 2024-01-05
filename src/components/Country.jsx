import { Fragment } from 'react'
import Item from "./Item"

export default function Country({children: country = null}) {
  
  if(!country) {
    return <div>Não foi possível mostrar o país</div>
  }
  return (
    <Fragment>
      <div>
        <ul>
          <li><Item name="Nome:">{country}</Item></li>
        </ul>
      </div>
    </Fragment>
  )
}