import PageNav from "../Components/PageNav"
import Logo from "../Components/Logo"
import styles from "./Home.module.css"
import {NavLink} from 'react-router-dom'
function Home (){
    return(
        <div>
            
        <div className={styles.homeContainer}>
            <header className={styles.homenav}>
                    <Logo/>
                    <PageNav/>
            </header>
            <div className={styles.ranchIntro}>
                <h1 className={styles.title}>Future Fields</h1>
                <p className={styles.introContent}>With purpose and passion at the heart of everything we do, our ranch is dedicated to sustainable practices and a thriving ecosystem </p>
                <NavLink className={styles.btn} to='/signin'>Sign Up</NavLink>
            </div>
        </div>
           <h1>Welcome to the ranch!</h1>
           {/* <div>

           </div>
           <div>

           </div> */}
        </div>
    )
}
export default Home