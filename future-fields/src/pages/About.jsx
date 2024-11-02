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
                    <h1 className={styles.title}>Future Field's Team</h1>
                    <div className={styles.staffinfo}>
                        <div>
                          
                            <img src='/john.jpeg' className={styles.staffimage}/>
                            <h3>John Peterson</h3>
                            <p className={styles.occupation}>Farm Manager</p>
                            <p>John oversees the daily operations of the ranch</p>              
                        </div>
                        <div>
                            <img src='/emilytwo.jpeg' className={styles.staffimage}/>
                            <h3>Dr Emily Lopez</h3>
                            <p className={styles.occupation}>Head Veterinarian</p>
                            <p> Emily is responsible for the health and well-being of all animals on the ranch.</p>
                        </div>
                        <div>
                            <img src='/marcus.jpeg' className={styles.staffimage}/>
                            <h3>Marcus Taylor</h3>
                            <p className={styles.occupation}>Crop Specialist</p>
                            <p>Marcus is in charge of crop cultivation and soil management.</p>
                        </div>
                        <div>
                            <img src='racheal.jpeg' className={styles.staffimage}/>
                            <h3>Racheal Harford</h3>
                            <p className={styles.occupation}>Livestock Supervisor</p>
                            <p> Rachel manages the daily care and breeding of livestock</p>
                        </div>
                        <div>
                            <img src='/alex.jpeg' className={styles.staffimage}/>
                            <h3>Alex Rivers</h3>
                            <p className={styles.occupation}>Events Coordinator</p>
                            <p>Alex's  fosters a sense of community and connection</p>
                        </div>
                    </div>
                </div>
               
               
            </div>
           
        </div>
    )
}
export default About