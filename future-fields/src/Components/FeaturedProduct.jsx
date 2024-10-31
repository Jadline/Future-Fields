
import styles from './FeaturedProduct.module.css'
function FeaturedProduct({featureditem}){
    
    return(
        <li className={styles.productContainer}>

            <div className={styles.imageContainer}>
                <img src={featureditem.imgSrc} alt={featureditem.product} className={styles.productImage}/>
            </div>
            <p>{featureditem.product}</p>
            <p>quantity:{featureditem.quantity}</p>
            <p>Price:${featureditem.price}.00</p>
            <button className={styles.cartbtn}>Add to Cart</button>
            
        </li>
    )
}
export default FeaturedProduct