import { useState } from "react"


const Formulario = () => {

    const [valor, setValor] = useState("Valor Inicial")


  return (
    <div>
        <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
        <h1>{valor}</h1>
    </div>
  )
}

export default Formulario