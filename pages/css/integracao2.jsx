import styles from './integracao2.module.css'


const integracao2 = () => {
  return (
    <div id={styles.center}>
      <div className={styles.vermelha}>Texto #01</div>
      <div className={styles.azul}>Texto #02</div>
      <div className={styles.branca}>Texto #03</div> 
    </div>
  )
}

export default integracao2