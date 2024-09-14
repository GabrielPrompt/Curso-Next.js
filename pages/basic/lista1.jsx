export default function Lista1() {

    const geraSpan = (quant) => {
        let lista = []
        for (let i = 1; i <= quant; i++ ) {
            lista.push(<span>{i}, </span>)
        }
        return lista
    }


    return (
        <div>
           {geraSpan(20)}
        </div>
    )
}


