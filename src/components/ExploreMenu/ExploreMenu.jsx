import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';  // import your menu_list

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Discover our delicious cakes, cookies, milkshakes, rolls, and smoothies — something for everyone!
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={item.id} className='explore-menu-list-item'>
            <img className={category===item.name?"active":""} src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
