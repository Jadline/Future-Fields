import styles from './Contact.module.css'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
import { useState,useRef } from 'react'
function Contact (){
    const[formdata,setFormData] = useState({
        firstname : '',
        lastname : '',
        email : '',
        phonenumber : ''
    })
    const[errors,setErrors] = useState({
        firstname : null,
        lastname : null,
        email: null,
        phonenumber : null
    })
    // const [requiredtext,setRequiredText] = useState(null)
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    // function to handle input change 
    function handleInputChange(e){
       const{name,value} = e.target;
       setFormData((prevdata) => ({...prevdata,[name] : value}))

    }
    function handleSubmit(e) {
        e.preventDefault()

        function validatefield(fieldname,value){
            if(!value) return 'Field is required'
            if(fieldname === 'email' && !/\S+@\S+\.\S+/.test(value)) return 'Invalid email address'
            if(fieldname === 'phonenumber' && !/^\d+$/.test(value)) return ' digits only allowed'
            return null;

        }

        const newErrors = {
            firstname : validatefield('firsname',formdata.firstname),
            lastname : validatefield('lastname',formdata.lastname),
            email :validatefield('email',formdata.email),
            phonenumber : validatefield('phonenumber',formdata.phonenumber)
        }
        setErrors(newErrors)
        const currentfieldError = Object.keys(newErrors).find(field => newErrors[field])

        if(currentfieldError) {
            // currentfieldError === 'firstname' && setRequiredText('required')||
            // currentfieldError === 'lastname' && setRequiredText('required')||
            // currentfieldError === 'email' && setRequiredText('invalid email address')||
            // currentfieldError === 'phonenumber' && setRequiredText('phone number should include digits only')
            return;
        }
        setFormData({
            firstname : '',
            lastname : '',
            email : '',
            phonenumber : ''
        })
        setErrors({
            firstname : null,
            lastname : null,
            email : null,
            phonenumber : null
        })
        
    }
    // const[firstnameInput,setfirstnameInput] = useState('')
    // const[lastnameInput,setlastnameInput] = useState('')
    // const firstnameinputRef = useRef(null)
    // const [requiredtext,setrequiredText] = useState(null);

    // useEffect(() => {
    //     firstnameinputRef.current.focus()
    // },[])

    // function  handleSubmit(e){
    //     e.preventDefault()
    //     if(firstnameInput === '' || firstnameInput === null){
    //         setrequiredText('Field is required')
    //         firstnameinputRef.current.focus()
    //         return;
    //     }
    //     else {
    //         setfirstnameInput('');
    //         firstnameinputRef.current.focus()
    //     }


    // }
    

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
                 <h1>To send an inquiry/get Newsletter</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                   
                    <label>First Name<span className={errors.firstname && styles.required}>{errors.firstname}</span></label>
                    <input type='text'
                    placeholder='Enter your first name'
                    name ='firstname'
                    value = {formdata.firstname}      
                    onChange={handleInputChange}
                    ref={firstnameRef}   
                  
                    />
                    
                    <label>Last Name<span className={ errors.lastname && styles.required}>{errors.lastname}</span></label>
                    <input type='text' 
                    placeholder='Enter your last name'
                    name ='lastname'
                    value = {formdata.lastname}      
                    onChange={handleInputChange}
                    ref={lastnameRef}
                    
                  
                    />
                    <label>Email Address<span className={errors.email && styles.required}>{errors.email}</span></label>
                    <input type='email'
                    placeholder='Enter your email'
                    name='email'
                    value = {formdata.email}      
                    onChange={handleInputChange}
                    ref={emailRef}
                    
                   
                    />
                    <label>Phone Number<span className={errors.phonenumber && styles.required}>{errors.phonenumber}</span></label>

                    <input type='tel'
                     placeholder='Enter your tel number'
                     value = {formdata.phonenumber}
                     name='phonenumber'
                     onChange={handleInputChange} 
                     ref={phoneRef}  
                     />
                    <button className={styles.submitbtn} onClick={handleSubmit}>Submit</button>
                    
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