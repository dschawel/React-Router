import React from 'react'

const Blog = props => {
    // let content = props.posts.map((post, i) => {
    //     return <p key={i}>{post}</p>
    // })
    return (
        <div classname='blog'>
            <h1>Blog</h1>
                <div className='posts'>
                    {/* {content} */}
                </div>
        </div>
    )
}

export default Blog