import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Singlepage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.completed ? 'completed' : 'not completed'}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export { Singlepage };