import { useState } from 'react'
import styles from './counter.module.css'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div className={styles.container}>
            <h1 className="counter">
                {counter}
            </h1>

            <div>
                <button className={styles.Bottons} onClick={() => setCounter(counter + 1)}> + </button>
                <button className={styles.Bottons} onClick={() => setCounter(counter - 1)}> - </button>
            </div>
        </div>
    )
}

export default Counter