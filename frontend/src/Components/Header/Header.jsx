import Image from "next/image";
import styles from './Header.module.css';

function Header() {
    return (
        <>
           <header className={styles.headerContainer}>
               <Image src={'/images/logo.svg'} alt={'logo'} width={30} height={30}/>
               <span>Pattes & Cie</span>
           </header>
        </>
    )
}

export default Header
