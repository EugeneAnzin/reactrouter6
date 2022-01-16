import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Blogpage = () => {
        
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);

    return (
        <div>
            <h1>Our news</h1>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export { Blogpage };