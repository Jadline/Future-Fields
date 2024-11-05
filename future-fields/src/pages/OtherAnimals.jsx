import styles from './OtherAnimals.module.css'
function OtherAnimals (){
    return (
        <div className={styles.othersContainer}>
            <div>
                <img src='/horses.jpeg'/>
                <div>
                    <h1>Horses</h1>
                    <p>The horses on the ranch, including breeds like Quarter Horse, are used for work and recreational activities.Beyond work, our horses provide enjoyable recreational opportunities for our family and visitors. We offer trail rides, riding lessons, and other equestrian activities that promote a connection with nature and an appreciation for these magnificent animals.</p>
                </div>
            </div>
            <div>
                <img src='/pigs.jpeg'/>
                <div>
                <h1>Pigs</h1>
                <p>Our pigs, often Berkshire or Duroc, are known for their flavorful meat.The primary purpose of raising pigs on our ranch is for meat production. We focus on high-quality, sustainable farming practices that ensure the pigs are raised in a healthy environment, ultimately leading to premium pork products.</p>
                </div>
            </div>
           
        </div>
    )
}
export default OtherAnimals