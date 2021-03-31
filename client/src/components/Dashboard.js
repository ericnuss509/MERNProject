import axios from 'axios'
import React, { useState } from 'react'
import { Link } from '@reach/router'


const Dashboard = (props) => {
    const [posts, setPosts] = useState([])

    const seeAllPosts = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/api/post')
            .then(response => setPosts(response.data.results))
    }

    const seeYourPosts = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/api/post')
            .then(response => {
                const postList = posts.filter((message, i ) => message.username === props.username)
                setPosts(postList)
            })
    }

    return (
        <>
            <div>
                <h1>Posts</h1>
            </div>
            <div>
                <h3>Choose which posts you would like to see</h3>
                <button type ="button" classname sm ={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1onClick={seeAllPosts} All Posts</button>
                <button type ="button" classname sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1 onClick={seeYourPosts}Your Posts</button>
            </div>
            <div>
                {posts.map((message, i) => {
                    return <ul key = {i}>                        
                        <li>{message.postBody}</li>
                        {/* <li><button Link to = {}>Play</button></li> */}
                    </ul>
                })}
            </div>
        </>
    )
}

export default Dashboard
