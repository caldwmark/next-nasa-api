import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <article className={styles.layout}>
                <nav className={styles.flex}>
                    <section>
                        <h1 className={styles.logo}>
                            Astronomy Picture of the Day
                        </h1>
                    </section>
                    <section>
                        <ul className={styles.list}>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/random'>Random Day</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </article>
        </header>
    )
}

export default Header
