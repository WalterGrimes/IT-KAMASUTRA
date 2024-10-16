// Post.jsx
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.walter} src="https://cdn.dribbble.com/users/1581974/screenshots/4303423/attachments/981292/white-start.jpg" alt='Walter' />
      <img className={s.soldierBoy} src="https://i.ytimg.com/vi/aZJRWkcLj_M/maxresdefault.jpg" alt='SoldierBoy' />
      <img className={s.butcher} src="https://comicvine.gamespot.com/a/uploads/original/11153/111537976/8823687-2524504010-l-int.jpg" alt='Butcher' />
      <img className={s.lou} src="https://i.pinimg.com/originals/42/f8/32/42f83258fe91e6d8e8c2aae1c923bda5.png" alt='Lou' />
      <img className={s.patrick} src="https://playerok.com/file-storage/images/1ee2c6d6-5b2f-6b30-5c67-eab490cb5de7.jpg?timestamp=1690455886" alt='Patrick' />
      <img className={s.batman} src="https://get.wallhere.com/photo/sleeve-cape-electric-blue-Justice-League-personal-protective-equipment-fictional-character-ART-darkness-Toy-costume-event-action-film-carmine-superhero-action-figure-fiction-hero-Batman-cloak-2004909.jpg" alt='Batman' />
      <div>{props.message}</div>
      <div>
        <span>Like</span> {props.LikesCount}
      </div>
    </div>
  );
}

export default Post;
