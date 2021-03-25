//card.js
import styles from '../../styles/components/cards/St-card.module.scss'

const CardCell = props => (
        <div  className={styles.card_cell}>
        {props.children}
        </div>
);

export default CardCell;