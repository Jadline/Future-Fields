
import styles from './FeaturedProduct.module.css'
function FeaturedProduct({featureditem}){
    
    return(
        <li className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <img src={featureditem.imgSrc} alt={featureditem.product} className={styles.productImage}/>
            </div>
            <p>{featureditem.product}</p>
            <p>{featureditem.price}</p>
            <p>{featureditem.quantity}</p>
        </li>
    )
}
export default FeaturedProduct