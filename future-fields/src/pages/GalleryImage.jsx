import styles from './GalleryImage.module.css'

function GalleryImage({image}){
    return(
        <li className={styles.imageContents}>
            <div className={styles.imageWrapper}>
                <img src={image.src} className={styles.image}/>
            </div>
            <span className={styles.imagedata}>
                <h3>{image.description}</h3>
                <button>🤍 : X</button>
                <button>👍 : X</button>
            </span>
        </li>
    )
}
export default GalleryImage