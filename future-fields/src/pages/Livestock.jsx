import styles from './Livestock.module.css'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
import { NavLink,Outlet } from 'react-router-dom'
// import Cattle from './Cattle'
// import OtherAnimals from './OtherAnimals'
// import Poultry from './Poultry'
// import Goats from './Goats'



function Livestock (){
    return(
        <div className={styles.livestockhub}>
             <header className={styles.livestocknav}>
                    <Logo/>
                    <PageNav/>
            </header>
            {/* <div className={styles.sidebar}> sidebar

            </div> */}
            <div className={styles.introContainer}>
                <h1>Welcome to Our Livestock Hub</h1>
                <p>At Future Fields, our livestock is at the heart of our ranching operations, providing a foundation for sustainable farming and a rich connection to traditional agricultural practices. We take pride in raising a diverse range of animals that contribute to both the vitality of the ranch and the quality products we offer.</p>
            </div>
            <div className={styles.Container}>

                <div className={styles.livestockContainer}>
                    <div className={styles.animalButtons}>
                        <NavLink to='cattle' className={styles.cta}>Cattle</NavLink>
                        <NavLink to='poultry'  className={styles.cta}>Poultry</NavLink>
                        <NavLink to='goats'  className={styles.cta}>Goats/Sheep</NavLink>
                        <NavLink to='otheranimals'  className={styles.cta}>Others</NavLink>
                    </div>
                    
                        <Outlet/>
                   
                    
                </div>
            </div>
        </div>
    )
}
export default Livestock