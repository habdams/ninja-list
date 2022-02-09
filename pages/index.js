import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci doloribus vero voluptate nulla hic totam saepe ratione. Voluptate dolorem maiores, consectetur delectus natus doloremque sit porro voluptatum quo, est nulla soluta sint ipsum!</p>

        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde mollitia necessitatibus eaque saepe, eius suscipit.
        </p>

        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      
      </div>
    </>
  )
}
