import styles from './Team.module.css'
function Team({member}){
    return(
        <div>
       <img src={member.image} className={styles.staffimage}/>
        <h3 className={styles.h3}>{member.name}</h3>
        <p className={styles.occupation}>{member.role}</p>
        <p className={styles.description}>{member.description}</p>              
        </div>
    )
}
export default Team