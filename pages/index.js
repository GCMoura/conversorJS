import React, { useState } from 'react'
import Country from '../src/Components/Country'
import Flag from '../src/Components/Flag'
import Header from '../src/Components/Header'
import Amount from '../src/Components/Amount'
import Div from '../src/Components/Div'

import BRA from '../src/assets/brasil.png'
import EUR from '../src/assets/uniao-europeia.png'
import USA from '../src/assets/estados-unidos.png'
import Button from '../src/Components/Button'

export default function Home() {

  const [euro, setEuro] = useState(" ")
  const [dolar, setDolar] = useState(" ")

  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const amount = formData.get('amount')
    
    try {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=USD&to=BRL`)
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          setDolar(result.rates.BRL.toFixed(2).toString().replace('.', ','))
        })
    } catch (error) {
      console.log(error)
    }

    try {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=EUR&to=BRL`)
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          setEuro(result.rates.BRL.toFixed(2).toString().replace('.', ','))
        })
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <>
      <Header>Currency Converter</Header>
      <form onSubmit={handleSubmit}>
        <Country>
          <Div>
            <Flag 
              src={ BRA.src }
            />
            <h1>R$</h1>
            <Amount type="number" name="amount" min="0" step="any"></Amount>
          </Div>

          <Div>
          <Flag 
              src={ USA.src }
            />
            <h1>R$</h1>
            <Amount type="text" readOnly value={dolar} ></Amount>
          </Div>
          
          <Div>
          <Flag 
              src={ EUR.src }
            />
            <h1>R$</h1>
            <Amount type="text" readOnly value={euro} ></Amount>
          </Div>


        </Country>  

        <Button>Converter</Button>

      </form>
    </>

  ) 
}
