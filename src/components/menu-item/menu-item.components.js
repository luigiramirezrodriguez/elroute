import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}} 
        />  

        <div className="content">
            <h1 class="title">{title.toUpperCase()}</h1>
            <span class="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;