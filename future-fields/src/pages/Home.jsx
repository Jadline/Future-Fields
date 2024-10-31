import PageNav from "../Components/PageNav"
import Logo from "../Components/Logo"
import styles from "./Home.module.css"
import {NavLink} from 'react-router-dom'
import FeaturedProduct from '../Components/FeaturedProduct'
const featuredProducts = [
    {
        product : 'Eggs',
        price : 5,
        imgSrc : '/eggs.jpeg',
        id : 1,
        quantity : 'crate'

    },
    {
        product : 'Grapes',
        price : 3,
        imgSrc : '/grapes.jpeg',
        id : 2,
        quantity : 'packet'
    },
    {
        product : 'Strawberry',
        price : 4,
        imgSrc : '/strawberry.jpeg',
        id : 3,
        quantity : 'packet'
    },
    {
        product : 'Avocado',
        price : 20,
        imgSrc : '/avocado.jpeg',
        id : 4,
        quantity : 'crate'
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

            <div className={styles.newproduce}> 
                <h1>Available fresh produce</h1>
                <ul className={styles.featured}>
                    {featuredProducts.map((item) => 
                        <FeaturedProduct featureditem ={item} key={item.id} />
                    )}
                </ul>    
            </div>
     
           
           {/* <div>

           </div>
           <div>

           </div> */}
        </div>
    )
}
export default Home