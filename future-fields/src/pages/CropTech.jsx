import styles from './CropTech.module.css'
function CropTech(){
    return(
        <div className={styles.techContainer}>
            <img src='/hydroponics.jpeg'/>
            <div>
                <h1>Crop Technology & Innovation</h1>
                <p>At Future Fields, we harness cutting-edge technology to optimize our farming practices, ensuring efficiency and sustainability. One of our key innovations is hydroponics, a soil-less cultivation method that enables us to grow crops using nutrient-rich water solutions. This approach conserves water by recycling it within a closed system and supports faster, more consistent crop growth, regardless of outdoor conditions.</p>
            </div>
        </div>
    )
}
export default CropTech