import styles from '@/styles/card.module.css'
import Button from './pure/Button'

const Card = ({ task }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.paragraph}>{task.description}</p>
      <Button>
        Enviar
      </Button>
    </div>
  )
}
export default Card
