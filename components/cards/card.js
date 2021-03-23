//card.js
import styles from '../styles/components/Cards.module.scss'

const Card = props => (
  <div className={styles.layout}>
    <div  class='st-card__cell st-card__cell--border-bottom'>
      {props.children}
    </div>
  </div>
);

export default Card;