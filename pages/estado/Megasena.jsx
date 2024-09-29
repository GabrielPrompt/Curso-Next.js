import { useState } from "react"
import mega from '../../functions/Mega.mjs'
import NumeroDisplay from '../../components/NumeroDisplay'



const Megasena = () => {

    const [numeros, setNumeros] = useState(mega(qtde))
    const [qtde, setQtde] = useState(0)

    const renderNumbers = () => {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }



    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex" }}>
                {renderNumbers()}
            </div>

            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={(e) => setQtde(e.target.value)} />
                <button className={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>

        </div>
    )
}

export default Megasena