import React from 'react';
import s from './Post.module.css';

const Post = () => {
   return (
          <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/a/ac/Walter_Hartwell_White.jpg"/>
            post1
            <div>
            <span>Like</span>
          </div>
       </div>
      )
}

export default Post;