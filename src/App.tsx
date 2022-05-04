import React, { useState } from 'react'
import './App.css'


type AcaoProps = {
  concluida?: boolean
} & React.ComponentProps<'button'>

function Acao({ concluida, ...props}: AcaoProps) {
  return <button {...props}>{ concluida ? ' ✅' : ' ❌'}</button>
}

function App() {
  // const H1 = (args: { children: React.ReactNode}) => {
  //   return <h1>{args.children}</h1>


const [tarefas, setTarefas] = useState([
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
])

const marcarComoConcluida = (id: number) => {
  setTarefas(tarefas.map(tarefa => {
    if (tarefa.id == id) {
      return {
        ...tarefa,
        concluida: !tarefa.concluida
      }
    }
    return tarefa
  }))
}

  return (
   <div>
     <h1>Tarefas</h1>

     <ul>
       {tarefas.map(tarefa => (
         <li key={tarefa.id}>
           {tarefa.nome}
           <Acao 
            concluida={tarefa.concluida}
            onClick={() => {
              marcarComoConcluida(tarefa.id)
            }}
           />
         </li>
       ))}
     </ul>
   </div>
  )
}

export default App
