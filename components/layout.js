//layout.js
import styles from '../styles/components/Layout.module.scss'

const Layout = props => (
  <div className={styles.layout}>
    <div  className={styles.content}>
      {props.children}
    </div>
  </div>
);

export default Layout;