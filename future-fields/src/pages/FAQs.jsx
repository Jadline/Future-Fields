import FaqItem from "./FaqItem";
import styles from './FAQs.module.css'
import Logo from '../Components/Logo'
import PageNav from "../Components/PageNav";
import {useState,createContext} from 'react'

const ranchFaqs = [
  { id : 1,
    question: "What activities are available at the ranch?",
    answer: "Our ranch offers a variety of activities, including horseback riding, guided tours, archery, and seasonal workshops. We also have family-friendly events and educational programs."
  },
  {
      id : 2,
    question: "Do I need to make a reservation for visits?",
    answer: "Yes, we recommend making a reservation for guided tours and activities to ensure availability. Walk-ins are welcome but subject to availability."
  },
  {
      id : 3,
      question: "Are pets allowed on the ranch?",
    answer: "We love pets, but for the safety of our animals and guests, we only allow service animals on the premises."
  },
  {
      id : 4,
    question: "What are the ranch’s operating hours?",
    answer: "Our ranch is open daily from 9:00 AM to 6:00 PM. Special events and workshops may have different timings, so please check our events page for updates."
  },
  {
      id : 5,
    question: "Is there a dress code for visiting the ranch?",
    answer: "We recommend wearing comfortable, weather-appropriate clothing and closed-toe shoes, especially if participating in activities like horseback riding or workshops."
  },
  {
      id : 6,
    question: "Do you offer group discounts?",
    answer: "Yes, we offer discounts for groups of 10 or more. Please contact us in advance to learn more about group pricing and arrangements."
  },
  {
      id : 7,
    question: "Can I host private events at the ranch?",
    answer: "Absolutely! We offer facilities for private events such as birthday parties, corporate retreats, and weddings. Contact us for more details and availability."
  },
  {
      id : 8,
    question: "Is food available on-site?",
    answer: "Yes, we have a café that serves light snacks, beverages, and meals made with fresh produce from our farm."
  },
  {
      id : 9,
    question: "Do you offer overnight stays?",
    answer: "We currently do not offer overnight accommodations, but there are local lodges and hotels nearby that we can recommend."
  },
  {
      id : 10,
    question: "What should I do if I lose an item at the ranch?",
    answer: "If you lose an item during your visit, please notify our staff or contact us with a description of the item, and we’ll do our best to help you retrieve it."
  }
];
export const FaqContext = createContext()
function FAQs (){
  const[activefaqid,setactiveFaqid] = useState(null)  

  function handleSelectedFaq(id){
    setactiveFaqid(activefaqid => activefaqid === id ? null : id )
  }
 
    return(
      <FaqContext.Provider value={
        {
          
          onhandleSelectedfaq : handleSelectedFaq,
          activefaqid
        }
      }>
        
        <div className={styles.faqsContainer}>
        <div className={styles.faqsnav}>
                <Logo/>
                <PageNav/>
            </div>
            <ul className={styles.faqs}>
              {ranchFaqs.map((faq) =>
               <FaqItem 
               faq={faq}
                key={faq.id}
               
              />)}
            </ul>
            <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(69, 75, 27)" fillOpacity="1" d="M0,0L21.8,42.7C43.6,85,87,171,131,218.7C174.5,267,218,277,262,245.3C305.5,213,349,139,393,138.7C436.4,139,480,213,524,234.7C567.3,256,611,224,655,181.3C698.2,139,742,85,785,96C829.1,107,873,181,916,197.3C960,213,1004,171,1047,176C1090.9,181,1135,235,1178,266.7C1221.8,299,1265,309,1309,282.7C1352.7,256,1396,192,1418,160L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
            <div className ={styles.faqText}>Frequently Asked Questions!</div>
     
        </div>
      
  
    </FaqContext.Provider>
    )
}
export default FAQs