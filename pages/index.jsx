import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
    const apiKey = 'qfWeWDbohszkauG5Ssyk99GLHW7dgJPAzqZGjwEk'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()

    return {
        props: { nasa: data },
    }
}

const Home = ({ nasa }) => {
    return (
        <>
            <Head>
                <title>Nasa API</title>
                <meta name='description' content='nasa photos' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>{nasa.title}</h1>

                    <article className={styles.flex}>
                        <div>
                            <Image
                                src={nasa.hdurl}
                                alt={nasa.title}
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className={styles.card}>
                            <small>{nasa.date}</small>
                            <br />
                            <br />
                            {nasa.explanation}
                        </div>
                    </article>

                    <div></div>
                </main>
            </div>
        </>
    )
}

export default Home
