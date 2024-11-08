import styles from './Blog.module.css'
import Logo from '../Components/Logo'
import PageNav from '../Components/PageNav'
import BlogPost from './BlogPost';
import { useState,useRef,useEffect } from 'react';
const blogPosts = [
    {
        id : 1,
        type: 'blog-one',
      title: "The Changing Seasons at Future Fields",
      date: "2024-11-02",
      author: "Jadline",
      content: "The ranch experiences dramatic changes throughout the year, from the vibrant greens of spring to the golden hues of autumn. Each season brings unique challenges and joys, shaping how we care for our crops and animals. This blog takes you through the transformations we see at Future Fields and how we adapt to nature's rhythms.Autumn is perhaps the most rewarding time at Future Fields. The hard work put into planting and caring for crops is repaid with the bounty of the harvest. Our team works long days to collect crops, package produce, and ensure the storage of grains and feed for the colder months. The landscape transforms into hues of gold, orange, and deep red, creating a picturesque scene for visitors.",
      image: "/blogphotoone.jpeg",
    },
    {
        id : 2,
        type: 'blog-two',
      title: "A Day in the Life of a Rancher",
      date: "2024-11-01",
      author: "Jadline",
      content: "Life at Future Fields is a blend of early mornings, hard work, and deep satisfaction. The day starts at sunrise, with the gentle sounds of roosters signaling the beginning of another productive day. Farmers head out to check the crops, ensure the irrigation systems are functioning smoothly, and inspect the health of the livestock. The ranch's staff is committed to sustainable practices, ensuring each day’s work reflects care for both the land and the community. From feeding the animals to harvesting fresh produce, each moment at Future Fields is filled with purpose and pride.",
      image: "/blogphototwo.jpeg",
    },
    {
        id : 3,
        type: 'blog-three',
      title: "Sustainable Practices at Future Fields",
      date: "2024-10-30",
      author: "Jadline",
      content: "At Future Fields, sustainability isn’t just a concept; it’s a way of life. Every process, from crop rotation to organic feeding methods, is designed to preserve the health of the land for generations to come. Solar panels help power our operations, reducing our carbon footprint, while water conservation techniques ensure efficient use of this vital resource. By integrating these sustainable practices, we foster a balanced ecosystem that supports the growth of both crops and community spirit.",
      image: "/blogphotofive.jpeg",
    },
    {
        id : 4,
        type: 'blog-four',
      title: "Caring for Our Animals with Love",
      date: "2024-10-29",
      author: "Jadline",
      content: "At Future Fields, sustainability isn’t just a concept; it’s a way of life. Every process, from crop rotation to organic feeding methods, is designed to preserve the health of the land for generations to come. Solar panels help power our operations, reducing our carbon footprint, while water conservation techniques ensure efficient use of this vital resource. By integrating these sustainable practices, we foster a balanced ecosystem that supports the growth of both crops and community spirit.",
      image: "/blogphotothree.jpeg",
    },
    {
        id : 5,
        type: 'blog-five',
      title: "Seasonal Harvest: What to Expect",
      date: "2024-10-28",
      author: "Jadline",
      content: "Harvest season at Future Fields is a time of celebration and gratitude. After months of nurturing the crops, the fields come alive with golden hues, signaling that the harvest is ready. It’s a time where the community comes together to reap the fruits of collective effort. Whether it's rows of fresh vegetables or an orchard brimming with fruit, each yield tells a story of dedication, careful planning, and the richness of working in harmony with nature",
      image: "/blogphotofour.jpeg",
    },
  ];
  

  
function Blog (){
  const[query,setQuery] = useState('');
  const filteredblogs = blogPosts.filter(post => post.content.toLowerCase().includes(query.toLowerCase()))
  const[comment,setComment] = useState('')
  const textareRef = useRef(null)
  useEffect(() => {
    textareRef.current.focus()
  },[])
  function handlemakeComment(e){
    e.preventDefault()
    setComment('');
    textareRef.current.focus()

  }
    
    return(
        <div className={styles.blogContainer}>
              <div className={styles.blognav}>
                <Logo/>
                <PageNav/>
            </div>
            <div className ={styles.inputContainer}>
              <h2>Search:</h2>
              <input type='text' placeholder='search blog' value={query} onChange={(e) => setQuery(e.target.value)} />
              {/* <p>{query}</p> */}
            </div>
            <div className={styles.postsContainer}>
                {filteredblogs?.map((post) => <BlogPost key={post.id} post={post}/>)}
            </div>
            <div className={styles.commentSection}>
              <p>Leave us a comment </p>
              <textarea placeholder='please leave us a comment'
               value={comment} 
               onChange={(e) => setComment(e.target.value)} 
               ref={textareRef}
               onKeyDown={(e) => {
                if(e.key === 'Enter') {
                  e.preventDefault()
                  handlemakeComment(e)
                }
               }}

               >

              </textarea>
              <button type='submit' onClick={handlemakeComment}>Comment</button>
              
            </div>
            
        </div>
    )
}
export default Blog