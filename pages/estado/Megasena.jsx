import { useEffect, useState } from "react"
import mega from '../../functions/Mega.mjs'
import NumeroDisplay from '../../components/NumeroDisplay'


const Megasena = () => {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])
    

    const renderNumbers = () => {
        return numeros.map( 
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }
    useEffect(() => {
        setNumeros(mega(qtde)); 
    },[]);

    return (
        <div style={{
            display: "flex",       
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {renderNumbers()}
            </div>

            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={(e) => setQtde(e.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
                
            </div>

        </div>
    )
}

export default Megasena


// import { useState, useEffect } from "react";
// import mega from "../../functions/Mega.mjs";
// import NumeroDisplay from "../../components/NumeroDisplay";

// const Megasena = () => {
//   const [qtde, setQtde] = useState(6);
//   const [numeros, setNumeros] = useState([]);

//   useEffect(() => {
//     setNumeros(mega(qtde)); // Só executa no cliente
//   }, [qtde]);

//   const renderNumbers = () => {
//     return numeros.map((numero) => (
//       <NumeroDisplay key={numero} numero={numero} />
//     ));
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1>Mega Sena</h1>
//       <div style={{ display: "flex" }}>
//         {renderNumbers()}
//       </div>
//       <div>
//         <input
//           type="number"
//           min={6}
//           max={20}
//           value={qtde}
//           onChange={(e) => setQtde(e.target.value)}
//         />
//         <button
//           className=""
//           onClick={() => setNumeros(mega(qtde))}
//         >
//           Gerar Aposta
//         </button>
//       </div>
//       <h1>{qtde}</h1>
//     </div>
//   );
// };

// export default Megasena;
