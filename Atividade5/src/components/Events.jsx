import React from 'react'

const Events = () => {
  // Evento com função
  const handleClick = (e) => {
      console.log(e);
      alert("Evento com função!")
  }
  const callNames = () => {alert("Testando")}
               
  return (
    <div>
      <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
        Clique Aqui
      </button>
      <div><button onClick = {handleClick}> Clique com Função</button></div>
      <div><button onClick = {callNames}> Clique com Função</button></div>
    </div>
  )
}

export default Events