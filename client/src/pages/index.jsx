import Image from 'next/image';
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h1> Hello World! </h1>
          {/* Add a title and short paragraph about your website here! */}
        </div>
      <div className={styles.image}>
        {/* Make use of the Next Image component here! */}
        {/* Keep in mind that any images you want to use must be imported from the /public folder */}
      </div>
    </div>
  )
}