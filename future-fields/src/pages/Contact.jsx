import styles from './Contact.module.css'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
function Contact (){
    return(
        <div className={styles.contactContainer}>
            <div className={styles.contactnav}>
                <Logo/>
                <PageNav/>
            </div>
            
            <div className={styles.contactinfo}>
                <div className={styles.flexitem}>
                    <h1>
                        Get in Touch
                    </h1>
                    <p>We’d love to hear from you! Whether you have questions about our products, need assistance, or just want to share your feedback, our team is here to help</p>
                </div>
                <div className={styles.flexitem}>
                    <h1>🏢 Our Address</h1>
                    <p>Future Fields Ranch 123 Country Road</p>
                    <p>Green Valley Nashville</p>
                </div>
                <div className={styles.flexitem}>
                    <h1>📞 Our Contact Info</h1>
                    <p>Phone: +1 (615) 555-1234</p>
                    <p>Email: contact@futurefieldsranch.com</p>
                    <p>Office Hours: Monday to Friday, 9:00 AM – 5:00 PM</p>
                </div>
            </div>
           
            <div className={styles.infoContainer}>
                <form className={styles.form}>
                    <h1>To send an inquiry/get Newsletter</h1>
                    <label>First Name</label>
                    <input type='text'/>
                    <label>Last Name</label>
                    <input type='text'/>
                    <label>Email Address</label>
                    <input type='email'/>
                    <label>Phone Number</label>
                    <input type='tel'/>
                    <button>Submit</button>
                    
                </form>
            </div>
            <div className={styles.mapContainer}>
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63827.04774552017!2d37.06573480888937!3d-1.016459217232527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4de9bca5883f%3A0xc6cea11ca68144fc!2sDel%20Monte%20Kenya%20Pineapple%20Farm!5e0!3m2!1sen!2ske!4v1730543896134!5m2!1sen!2ske"
       width = '95%'
        height="350"
        style={{ border: 0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
            </div>

        </div>
    )
}
export default Contact