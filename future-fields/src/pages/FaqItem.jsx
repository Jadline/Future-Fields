import styles from './FaqItem.module.css'
import {useContext } from 'react'
import {FaqContext} from './FAQs'
function FaqItem({faq}){
    const {activefaqid,onhandleSelectedfaq} = useContext(FaqContext);
    // console.log(activefaqid,onhandleSelectedfaq)
    return(
        <li className={styles.questionsContainer}>
            <div className={styles.question}  onClick={() =>  onhandleSelectedfaq(faq.id)}>
                <h3 >{faq.question}</h3>
                <button>{activefaqid === faq.id ? '-' : '+'}</button>
            </div>
            <div className={activefaqid === faq.id ? styles.show : styles.answer}>{faq.answer}</div>
            

        </li>
    )
}
export default FaqItem