import styles from '@/styles/card.module.css'
import Button from './pure/Button'

const Card = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tarjeta de prueba</h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button>
        Enviar
      </Button>
    </div>
  )
}
export default Card
