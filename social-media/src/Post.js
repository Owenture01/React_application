import React from "react";
import PropTypes from 'prop-types';

function Post({id, title}){
    return(
        <div className="Post"> 
            <div className="Post_title">{title}</div>
            <img 
                className="Post_image" 
                src={`https://source.unsplash.com/random?sig=${id}`}
                alt = "Post"
            />
        </div>
    )
}

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Post;