
import styles from './Crops.module.css'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
import {NavLink,Outlet} from 'react-router-dom'
import {useParams} from 'react-router-dom'
function Crops (){
    const {currentCrop} = useParams()
    console.log(currentCrop)
 
    
    return(
        <div className={styles.cropsContainer}>
            <div className={styles.cropsnav}>
                <Logo/>
                <PageNav/>
            </div>
            <div className={styles.cropintro}>
                <h1>Welcome to Crop Hub</h1>
                <p>Welcome to the heart of our agricultural operations at Future Fields. Here, we cultivate a diverse range of crops using sustainable farming methods that ensure the health of our land and the quality of our produce</p>
                </div>
            <div className={styles.Container}>
                
                <div className={styles.sidebar}>
                    <h1>Crops Hub</h1>
                <div className={styles.links}>
                    <NavLink to='grains'>Grains</NavLink>
                    <NavLink to='veggies'>Vegetables</NavLink>
                    <NavLink to='fruits'>Fruits</NavLink>
                    <NavLink to='herbs'>Herbs</NavLink>
                    <NavLink to='croptech'>Technology & Innovation</NavLink>
                </div>
                </div>
                <div className={styles.mainContainer}>
                    <Outlet/>

                </div>
            </div>
            
        </div>
    )
}
export default Crops