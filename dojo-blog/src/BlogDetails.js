import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";

const BlogDetails = () => {

    const { id} = useParams();
    const {error, isPending, data:blog} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = ()=> {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/')
        })
    }

    return (
       
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && 
               <article>
                    <h2>Title  {blog.title} </h2>
                    <h3>Written by {blog.author} </h3>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            }
           
        </div>
    )
}

export default BlogDetails
