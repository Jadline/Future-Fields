import styles from './FaqItem.module.css'
function FaqItem({faq}){
    return(
        <li className={styles.questionsContainer}>
            <div className={styles.question}>
                <h3>{faq.question}</h3>
                <button>+</button>
            </div>
            <div>{faq.answer}</div>
            {/* <span role='button'>+</span> */}

        </li>
    )
}
export default FaqItem