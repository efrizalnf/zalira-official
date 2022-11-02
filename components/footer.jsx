import Image from "next/image";
import styles from '/styles/Home.module.css';
import Logo from '../public/assets/img/zlogo.png';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <a
                href="https://zalira.my.id"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' zalira'}
                <span className={styles.logo}>
                    <Image src={Logo} alt="Vercel Logo" width={20} height={20} />
                </span>
            </a>
        </footer>
    )
}

export default Footer;