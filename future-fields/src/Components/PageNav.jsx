import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css"
function PageNav(){
    return (
        <ul className={styles.linkContainer}>
            <li>
                <NavLink to="/about" className={styles.navlink}>About</NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={styles.navlink}>
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={styles.navlink}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/ecommerce" className={styles.navlink}>
                    Ecommerce
                </NavLink>
            </li>
            
            <li>
                <NavLink to="/events" className={styles.navlink}>
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to="/faqs" className={styles.navlink}>
                    FAQs
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" className={styles.navlink}>
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/livestock" className={styles.navlink}>
                    Livestock
                </NavLink>
            </li>
            <li>
                <NavLink to="/crops" className={styles.navlink}>
                    Crops
                </NavLink>
            </li>
            
            <li>
                <NavLink to='/signin' className={styles.navlink}>
                    Sign In
                </NavLink>
            </li>
        </ul>
    )
}
export default PageNav