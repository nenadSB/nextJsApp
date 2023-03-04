import grass from '../../public/grass.png'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      
      <main  className={styles.main}>
        <div >
            <Image src={grass} alt="grass" className={styles.pic} />
            <h1 className={styles.h1}>Welcome to my NextJs App</h1>
        </div>
      </main>
    </>
  )
}
