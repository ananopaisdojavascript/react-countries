import { Fragment, useState, useEffect } from 'react'
import Header from "../components/Header"
import Main from "../components/Main"
import TextInput from "../components/TextInput"
import Countries from "../components/Countries"

export default function ReactCountries() {
  const [countryFilter, setCountryFilter] = useState("")
  const [data, setData] = useState([]);

  // Obter os países com useEffect
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const countryFilterLowerCase = countryFilter.trim().toLowerCase()

  // Filtrar os países
  const filteredCountries = countryFilterLowerCase.length >= 3 ? data.filter(({name}) => {
    return name.common.toLowerCase().includes(countryFilterLowerCase)
  }) : data

  console.log(filteredCountries)

  // Função para selecionar o país ao digitar o nome na barra de pesquisa
  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter)
  }

  console.log(filteredCountries)

  return (
    <Fragment>
      <Header title="React Countries"/>
      <Main>
        <TextInput 
          labelDescription="Digite o nome de um país (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          autoFocus
          labelName="inputCountryFilter"
          id="inputCountryFilter"
          onInputChange={handleCountryFilterChange}
        />
        <Countries>
          {filteredCountries}
        </Countries>
      </Main> 
    </Fragment>
  )
}