import styles from './BlogPost.module.css'
import { useState,useEffect } from 'react';



function BlogPost({post}){
    const[showblog,setshowblog] = useState(false);
    const[countlikes,setcountLikes] = useState(() => {
        const savedLikes = localStorage.getItem(`likes_${post.id}`)
        return savedLikes ? Number(savedLikes) : 0;
    })

    useEffect(() => {
        localStorage.setItem(`likes_${post.id}`,countlikes)
    },[countlikes])

    const bloglength = post.content.length;
    const bloghalf = Math.floor(bloglength/2)
    function handleLike(){
        setcountLikes(curcount => curcount + 1);
    }
    let className ;

    switch(post.type){
        case 'blog-one':
            className = styles.blogone;
            break;
        case 'blog-two':
            className = styles.blogtwo;
            break;
        case 'blog-three':
            className = styles.blogthree;
            break;
        case 'blog-four':
            className = styles.blogfour;
            break;
        case 'blog-five':
            className = styles.blogfive;
            break;
        default :
            className = styles.contentContainer;
            break;
    }
    return(
        <li className={`${styles.contentContainer} ${className}`} >
           <img src={post.image} className={styles.flexitemone}/>
        <div className={styles.flexitemtwo}>
           <h3>{post.title}</h3>
           <p>{showblog ? post.content : `${post.content.slice(0,bloghalf)}.....`}
            <button onClick={() => setshowblog(showblog => !showblog)} className={styles.expandbtn}>{showblog ? 'show less' : 'learn more'}</button>

           </p>
           <div className={styles.authorContent}>
            <p>author:{post.author}</p>
            <p>date: {post.date}</p>
            <div className={styles.likecount}>
                <button className={styles.like} onClick={handleLike}>👍</button>
                <p>{countlikes}</p>
            </div>
           </div>
        </div>
        </li>
    )
}
export default BlogPost