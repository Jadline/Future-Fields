import styles from "./About.module.css"
import PageNav from "../Components/PageNav"
import Logo from "../Components/Logo"
import  {useState,useEffect} from 'react'
import Team from './Team'
const aboutSections = [
    {
        title: "Established in 1990",
        content: "Future Fields was established with a vision to blend tradition with innovation, creating a sustainable haven for both crops and livestock. From humble beginnings, it has grown into a community-centered ranch that champions responsible farming and connection with nature.",
        buttonLabel: "Read more"
    },
    {
        title: "Mission & Vision",
        content: "At Future Fields Ranch, our mission is to cultivate a sustainable and thriving environment where both nature and people prosper. Our vision is to be a beacon of sustainability and innovation in ranching, showcasing how harmony between humans, animals, and the environment can lead to a prosperous future.",
        buttonLabel: "Read more"
    }
];
const aboutPageQuotes = [
    "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. — Masanobu Fukuoka",
    "To forget how to dig the earth and tend the soil is to forget ourselves. — Mahatma Gandhi",
    "The land is where our roots are. The children must be taught to feel and live in harmony with the Earth. — Maria Montessori",
    "Sustainability is about ecology, economy, and equity. — Ralph Bicknese",
    "Farming is a profession of hope. — Brian Brett",
    "The Earth does not belong to us: we belong to the Earth. — Marlee Matlin",
    "When tillage begins, other arts follow. The farmers, therefore, are the founders of human civilization. — Daniel Webster",
    "Agriculture is the most healthful, most useful, and most noble employment of man. — George Washington",
    "The farmer has to be an optimist or he wouldn’t still be a farmer. — Will Rogers",
    "Sustainable agriculture is the way of the future; it offers hope and resilience in an ever-changing world."
];
const teamMembers = [
    {
        id: 1,
        name: "John Peterson",
        role: "Farm Manager",
        description: "John oversees the daily operations of the ranch.",
        image: "/john.jpeg",
        quote: "Farming isn't just a job; it's a way of life that keeps us connected to nature."
    },
    {
        id: 2,
        name: "Dr Emily Lopez",
        role: "Head Veterinarian",
        description: "Emily is responsible for the health and well-being of all animals on the ranch.",
        image: "/emilytwo.jpeg",
        quote: "Caring for animals means caring for the land and our future."
    },
    {
        id: 3,
        name: "Marcus Taylor",
        role: "Crop Specialist",
        description: "Marcus is in charge of crop cultivation and soil management.",
        image: "/marcus.jpeg",
        quote: "Healthy soil is the foundation of healthy crops and a sustainable future."
    },
    {
        id: 4,
        name: "Racheal Harford",
        role: "Livestock Supervisor",
        description: "Racheal manages the daily care and breeding of livestock.",
        image: "/racheal.jpeg",
        quote: "Every animal has a story, and it’s our job to ensure it’s a happy one."
    },
    {
        id: 5,
        name: "Alex Rivers",
        role: "Events Coordinator",
        description: "Alex fosters a sense of community and connection.",
        image: "/alex.jpeg",
        quote: "Connecting people with the farm creates a community that values and supports each other."
    }
];




function About (){
    const[showText,setshowText] = useState(false);
    const[showMessage1,setshowMessage1] = useState(false);
    const[currentquoteindex,setcurrentquoteindex] = useState(0)
    
    
    useEffect(() => {
         const intervalid = setInterval(() => {
            setcurrentquoteindex(curindex => curindex === aboutPageQuotes.length-1 ? 0 : curindex+1)
        },4000)
        return() => clearInterval(intervalid)
    },[])




    const message1 = aboutSections[0].content
    const message1half = Math.floor(message1.length/2)
    const message2 = aboutSections[1].content
    const message2half = Math.floor(message2.length/2)

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
           
            <div className={styles.quotesContainer}>
            {aboutPageQuotes[currentquoteindex]}

            </div>
            <div className={styles.fieldContainers}>
                <div className={styles.fieldcontainerone}>
                    <div className={styles.frostoverlayone}>
                        <h1>{aboutSections[0].title}</h1>
                        <p>{showMessage1 ? message1 : `${message1.slice(0,message1half + 20)}...`}
                            <button onClick={() => setshowMessage1(!showMessage1)} className={styles.expandbtn}>{showMessage1 ? 'show less': 'show more'} </button>
                        </p>
                    </div>
                    <img src='/farmhouse.jpeg' className={styles.aboutimages}/>    
                </div>
                <div className={styles.fieldcontainertwo}>
                <div className={styles.frostoverlayone}>
                    <h1>{aboutSections[1].title}</h1>
                    <p>{showText ? message2 : `${message2.slice(0,message2half+38)}...`} 
                        <button onClick={() => setshowText(!showText)} className={styles.expandbtn}>{showText ? 'show less' : 'show more'}</button>
                    </p>
                </div>
                <img src='/yard.jpeg' className={styles.aboutimages}/>
                   
                </div>
            </div>
            <div className={styles.staffContainer}>
                <div className={styles.frostoverlaytwo}>
                    <h1 className={styles.title}>Future Field's Team</h1>
                    <div className={styles.staffinfo}>
                        {teamMembers.map(member => <Team member={member} key={member.id}/>)}
         
                    </div>
                </div>
               
               
            </div>
           
        </div>
    )
}
export default About