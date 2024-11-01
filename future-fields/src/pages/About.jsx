import styles from "./About.module.css"
import PageNav from "../Components/PageNav"
import Logo from "../Components/Logo"
function About (){
    return(
        <div className={styles.aboutContainer}>
            <div className={styles.aboutnav}>
                <Logo/>
                <PageNav/>
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.innerContainerContents}>
                    <div className={styles.frostoverlay}></div>
                    <div className={styles.plogo}>
                        <img src='/logo-one.jpeg' className={styles.logo}/>
                        <p>With passion & purpose</p>
                    </div>
                    <h1>FUTURE FIELDS</h1>

                 </div>
                 {/* <div className={styles.messages}>
                    <div className={styles.date}>since 1990</div>
                 </div> */}
            </div>
            <div className={styles.fieldContainers}>
                <div className={styles.fieldcontainerone}>
                    <div className={styles.frostoverlayone}>
                        <h1>Established in 1990</h1>
                        <p>Future Fields was established with a vision to blend tradition with innovation, creating a sustainable haven for both crops and livestock. From humble beginnings, it has grown into a community-centered ranch that champions responsible farming and connection with nature.</p>
                    </div>
                    <img src='/farmhouse.jpeg' className={styles.aboutimages}/>    
                </div>
                <div className={styles.fieldcontainertwo}>
                <div className={styles.frostoverlayone}>
                    <h1>Mission & Vision </h1>
                    <p>At Future Fields Ranch, our mission is to cultivate a sustainable and thriving environment where both nature and people prosper.
                        Our vision is to be a beacon of sustainability and innovation in ranching, showcasing how harmony between humans, animals, and the environment can lead to a prosperous future. 
                    </p>
                </div>
                <img src='/yard.jpeg' className={styles.aboutimages}/>
                   
                </div>
            </div>
            <div className={styles.staffContainer}>
                <div className={styles.frostoverlaytwo}>
                    <h1>Our Staff</h1>
                    <div className={styles.staffinfo}>
                        <div>
                          
                            <img src='/john.jpeg' className={styles.staffimage}/>
                            <p>John Peterson</p>
                            <p>Farm Manager</p>
                            <p>John oversees the daily operations of the ranch</p>
                         
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
               
               
            </div>
           
        </div>
    )
}
export default About