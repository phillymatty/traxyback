//card.js
import styles from '../../styles/components/cards/St-card.module.scss'

const Card = props => (
  <div className={styles.card}>
    <div  className={styles.card_body}>
        <div  className={styles.card_cell}>
        {props.children}
        </div>
    </div>
  </div>
);

export default Card;