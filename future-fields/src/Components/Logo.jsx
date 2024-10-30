import styles from "./Logo.module.css"
function Logo(){
    return(
        <div className={styles.logoContainer} >
            <img src='logo-one.jpeg' alt='logo' className ={styles.logo}/>
            <h1>Future Fields</h1>
        </div>
    )
}
export default Logo