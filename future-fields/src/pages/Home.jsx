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
            <div className={styles.frostedoverlay}></div>
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
                <div className={styles.newproduceintro}>
                    <h1>Featured Products & Services</h1>
                    <p> Discover what’s in season and available now, and bring a taste of the farm home with quality you can trust.</p>
                </div>
                
                <ul className={styles.featured}>
                    {featuredProducts.map((item) => 
                        <FeaturedProduct featureditem ={item} key={item.id} />
                    )}
                </ul>    
            </div>
            <div className={styles.events}>
                <div className={styles.eventsContainer}>
                    <div className={styles.griditemone}>
                        <h1>Upcoming Events</h1>
                        <p>Stay connected with the heart of our ranch through our upcoming events</p>
                        <div className={styles.activities}>
                            <p>Archery</p>
                            <p>Harvest Festival</p>
                            <p>Culinary workshop</p>
                            <p>Educational workshop</p>
                            <p>Farmers market day</p>
                        </div>
                        
                    </div>
                    <div className={styles.griditemtwo}>
                        <div className={styles.eventone}>
                            <button className={styles.archerybtn}>checkout</button>
                        </div>
                               
                        <div className={styles.eventtwo}>
                            <button className={styles.archerybtn}>checkout</button>
                        </div>                       
                        <div className={styles.eventthree}>
                            <button className={styles.archerybtn}>checkout</button>
                        </div>
                        <div className={styles.eventfour}>
                            <button className={styles.archerybtn}>checkout</button>
                        </div>
                        <div className={styles.eventfive}>
                        <button className={styles.archerybtn}>checkout</button>
                        </div>
                    </div>
                   
                    {/* <div className={styles.griditemthree}>item 3</div> */}
                </div>
               
            </div>
            <div className={styles.recentblog}>
                <div className={styles.blogcontent}>
                    <div className={styles.contentone}>
                        <h2>Embracing Autumn in the Ranch</h2>
                        <p>As the crisp air settles in and the leaves turn to brilliant shades of amber and gold, Future Fields enters one of its most enchanting seasons—autumn. This time of year is more than just a transition; it’s a celebration of the harvest, community, and the beauty that change brings.
                        Autumn at Future Fields isn't just about harvesting; it’s about honoring traditions while creating new memories. The scent of bonfires fills the air as we gather to share stories and laughter with friends and neighbors. Families come together to participate in apple picking, hayrides, and nature walks that weave through the fiery tapestry of the woods. 
                        It’s a season that deepens our connection with the land and each other.Beyond the crops, our livestock enjoy the cooler weather, grazing contentedly in the crisp mornings and basking in the gentle, golden glow of the late afternoon sun. It’s a scene that reminds us of the harmony between our animals, the land, and the changing environment. 
                        Their behavior is a testament to how nature itself adapts gracefully to the rhythms of the seasons.
                        </p>
                        <NavLink className={styles.blogbtn} to='/blog'>Other Blogs</NavLink>
                    </div>
                   
                </div>
            </div>
            <div className={styles.action}>
                <div className={styles.actionintro}>
                    {/* <p>As the beauty of the season unfolds, we invite you to be part of the magic at Future Fields! Here are a few ways you can get involved</p> */}
                    <h1 className={styles.actionheading}>Join Us This Autumn!<span></span></h1>  
                </div>
                <div className={styles.majoractions}>
                    <div>
                        <h3>🌟 Book an Event</h3>
                        <p>Don’t miss our upcoming Harvest Festival! Reserve your spot today to enjoy hayrides, pumpkin picking, and delicious seasonal treats. Bring your family and friends for a memorable day on the ranch!</p>
                        <button>Book Event</button>
                    </div>
                    <div>
                        <h3>📰 Sign Up for Our Newsletter</h3>
                        <p>Stay connected with us! Sign up for our newsletter to receive the latest updates on events, special offers, and insights into our sustainable farming practices. Be the first to know about workshops and seasonal highlights!</p>
                        <button>News Letter</button>
                    </div>
                    <div>
                        <h3>🛒 Visit Our Store</h3>
                        <p>Explore our store to find fresh, locally sourced produce and handcrafted goods. Whether you're looking for ingredients for your next meal or unique gifts, our store has something for everyone. Come see what’s in season and support local agriculture!</p>
                        <button>Visit Store</button>
                    </div>
                    <div>
                        <h3>📸 Follow Us on Social Media</h3>
                        <p>Join our community on social media! Follow us on Instagram and Facebook for daily updates, behind-the-scenes looks at ranch life, and inspiration from nature. Share your own experiences with us using #FutureFields!</p>
                        
                    </div>
                    <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fill-opacity="1" d="M0,192L34.3,208C68.6,224,137,256,206,229.3C274.3,203,343,117,411,101.3C480,85,549,139,617,138.7C685.7,139,754,85,823,53.3C891.4,21,960,11,1029,58.7C1097.1,107,1166,213,1234,234.7C1302.9,256,1371,192,1406,160L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>

                </div>
               
            </div>
     
           
           {/* <div>

           </div>
           <div>

           </div> */}
        </div>
    )
}
export default Home