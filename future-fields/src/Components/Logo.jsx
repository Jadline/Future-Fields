import styles from "./Logo.module.css"
import { useNavigate } from "react-router-dom"
function Logo(){
    const navigate = useNavigate()
    return(
        <div className={styles.logoContainer} onClick={() => navigate('/')} >
            <img src='logo-one.jpeg' alt='logo' className ={styles.logo}/>
            <h1>Future Fields</h1>
        </div>
    )
}
export default Logo