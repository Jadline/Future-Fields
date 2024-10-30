import PageNav from "../Components/PageNav"
import Logo from "../Components/Logo"
import styles from "./Home.module.css"
import {NavLink} from 'react-router-dom'
import FeaturedProduct from '../Components/FeaturedProduct'
const featuredProducts = [
    {
        product : 'eggs',
        price : 5,
        imgSrc : '/eggs.jpeg',
        id : 1,
        quantity : 'crate'

    },
    {
        product : 'grapes',
        price : 3,
        imgSrc : '/grapes.jpeg',
        id : 2,
        quantity : 'packet'
    },
    {
        product : 'strawberry',
        price : 4,
        imgSrc : '/strawberry.jpeg',
        id : 3,
        quantity : 'packt'
    }
]
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
                <p className={styles.introContent}>With purpose and passion at the heart of everything we do, our ranch is dedicated to sustainable practices and a thriving ecosystem that enriches the land, supports our community, and provides fresh, 
                    high-quality products for families near and far</p>
                <NavLink className={styles.btn} to='/signin'>Sign Up</NavLink>
            </div>
        </div>
        <ul className={styles.featured}>
            {featuredProducts.map((item) => 
                <FeaturedProduct featureditem ={item} key={item.id} />
            )}
        </ul>
           
           {/* <div>

           </div>
           <div>

           </div> */}
        </div>
    )
}
export default Home