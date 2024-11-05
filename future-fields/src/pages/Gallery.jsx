
import styles from './Gallery.module.css'
import GalleryImage from './GalleryImage'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
const galleryImages = [
    { id: 1, src: '/gallery/galleryphoto1.jpeg', description: 'cattle grazing' },
    { id: 2, src: '/gallery/galleryphoto2.jpeg', description: 'new born calves' },
    { id: 3, src: '/gallery/galleryphoto3.jpeg', description: 'Horse running.' },
    // { id: 4, src: '/gallery/galleryphoto4.jpeg', description: 'Horses trotting in the field during sunset.' },
    { id: 5, src: '/gallery/galleryphoto5.jpeg', description: 'strawberry plantation' },
    { id: 6, src: '/gallery/galleryphoto6.jpeg', description: 'orange plantation' },
    // { id: 7, src: '/gallery/galleryphoto7.jpeg', description: 'The ranch’s main gate adorned with seasonal flowers.' },
    { id: 8, src: '/gallery/galleryphoto8.jpeg', description: 'Horse stable' },
    { id: 9, src: '/gallery/galleryphoto9.jpeg', description: 'Watermelon plantation' },
    { id: 10, src: '/gallery/galleryphoto10.jpeg', description: 'spring onions harvesting' },
    { id: 11, src: '/gallery/galleryphoto11.jpeg', description: 'Ranch launch' },
    { id: 12, src: '/gallery/galleryphoto12.jpeg', description: 'peaceful evening at the ranch' },
    { id: 13, src: '/gallery/galleryphoto13.jpeg', description: 'Ranch worker\'s party' },
    { id: 14, src: '/gallery/galleryphoto14.jpeg', description: 'community lunch setup' },
    { id: 15, src: '/gallery/galleryphoto15.jpeg', description: 'Nursery area' },
    { id: 16, src: '/gallery/galleryphoto16.jpeg', description: 'Hay harvesting' },
    { id: 17, src: '/gallery/galleryphoto17.jpeg', description: 'Chariot riding' },
    { id: 18, src: '/gallery/galleryphoto18.jpeg', description: 'Archery' },
    { id: 19, src: '/gallery/galleryphoto19.jpeg', description: 'during kids educational workshop.' }
  ];
  
  
  
function Gallery (){
    return(
        <div className ={styles.mainContainer}>
             <div className={styles.gallerynav}>
                <Logo/>
                <PageNav/>
            </div>
            <h1 className={styles.count}>Total Count<span>🧡 : X </span><span>👍 : X </span></h1>
            <div className={styles.galleryContainer}>
                {galleryImages.map((image) => <GalleryImage image={image} key={image.id}/>)}
            
            </div>
        </div>
    )
}
export default Gallery