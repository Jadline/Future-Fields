import { flushSync } from 'react-dom'
import styles from './Team.module.css'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

function Team({member}){
    const [isFlipped,setisFlipped] =useState(false)

    function handleClick(){
        setisFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"  >
        
          <div onClick={handleClick}>
            <img src={member.image} className={styles.staffimage}/>
            <h3 className={styles.h3}>{member.name}</h3>
            <p className={styles.occupation}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>     
          </div>
  
          <div className={styles.quote} onClick={handleClick}>
            <blockquote>{member.quote}</blockquote>
            <p>{member.name}</p>
          </div>
         
        </ReactCardFlip>
      )
//    return(
//     <>
//         {!flipcard ? 
            // <div className={flipcard ? `${styles.flipCard}` : ''} onClick={handleFlipCard}>           
            // <img src={member.image} className={styles.staffimage}/>
            // <h3 className={styles.h3}>{member.name}</h3>
            // <p className={styles.occupation}>{member.role}</p>
            // <p className={styles.description}>{member.description}</p>                       
//         </div> : <div className={styles.quote} onClick={handleFlipCard}>
           
//             <blockquote>{member.quote}</blockquote>
//              <p>{member.name}</p>
//             </div>
//         }
//         </>)
    
}
export default Team