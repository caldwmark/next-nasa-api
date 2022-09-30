import Head from 'next/head'
import Image from 'next/future/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
    const apiKey = 'qfWeWDbohszkauG5Ssyk99GLHW7dgJPAzqZGjwEk'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()

    return {
        props: { nasa: data },
    }
}

const Home = ({ nasa }) => {
    const getDate = data => new Date(data).toDateString()

    return (
        <>
            <Head>
                <title>Astronomy Picture of the Day</title>
                <meta name='description' content='nasa photos' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <h2 className={styles.title}>{nasa.title}</h2>
                    <article className={styles.flex}>
                        <div className='relative'>
                            <Image
                                src={nasa.hdurl}
                                alt={nasa.title}
                                width={500}
                                height={500}
                                priority
                                className={styles.image}
                            />
                            <p class={styles.download}>
                                <a
                                    href={nasa.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <small>standard image</small>
                                </a>
                                &nbsp; &middot; &nbsp;
                                <a
                                    href={nasa.hdurl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <small>hd image</small>
                                </a>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <p>{nasa.copyright}</p>
                            <small>{getDate(nasa.date)}</small>
                            <p>{nasa.explanation}</p>
                        </div>
                    </article>
                </main>
            </div>
        </>
    )
}

export default Home
