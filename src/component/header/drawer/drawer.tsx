import React, { useContext } from 'react';
import { handleCategoryContext } from '../../main/homeScreen';
import { Visible } from '../../../types';
import { categoryList } from '../../CategoryList';
import './drawer.scss';

const Drawer: React.FC<Visible> = ({ visible, setVisible }) => {
  const { category, handleCategory } = useContext(handleCategoryContext);

  console.log(category);

  return (
    <div className='drawer'>
      <div className={
          visible ? 'displayed__drawer' : 'undisplayed__drawer'
        }
      >
        <ul className='drawer__ul'>
          {categoryList.map((list, index) => (
            <li
              key={index}
              onClick={() => {
                handleCategory(list as string);
                setVisible(!visible);
              }}
              className={
                category === list
                  ? 'displayed'
                  : 'undisplayed'
              }
            >
              <span>{list}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
