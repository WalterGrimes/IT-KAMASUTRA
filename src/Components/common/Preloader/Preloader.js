import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

const Preloader = () => {
  console.log("Preloader component rendered");  // Проверка, что компонент рендерится

  return (
    <div>
      <img
        src={preloader}
        alt="Загрузка..."
        style={{ width: '50px', height: '50px', position: 'fixed', top: '10px', right: '10px' }}
      />
    </div>
  );
};

export default Preloader;
