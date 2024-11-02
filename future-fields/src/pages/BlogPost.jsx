import styles from './BlogPost.module.css'



function BlogPost({post}){
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
           <p>{post.content}</p>
           <div className={styles.authorContent}>
            <p>{post.author}</p>
            <p>{post.date}</p>
           </div>
        </div>
        </li>
    )
}
export default BlogPost