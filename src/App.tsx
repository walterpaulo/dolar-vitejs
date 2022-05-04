import React, { useState } from 'react'
import './App.css'

function App() {
  // const H1 = (args: { children: React.ReactNode}) => {
  //   return <h1>{args.children}</h1>
const tarefas = [
  {
    id: 1,
  nome: 'reatec',
  concluida: false
  },
  {
    id: 2,
  nome: 'reatec',
  concluida: false
  }
]
  

  return (
   <div>
     <h1>Tarefas</h1>

     <ul>
       {tarefas.map(tarefa => (
         <li key={tarefa.id}>
           {tarefa.nome}
           {tarefa.concluida ? ' ✅' : ' ❌'}
         </li>
       ))}
     </ul>
   </div>
  )
}

export default App
