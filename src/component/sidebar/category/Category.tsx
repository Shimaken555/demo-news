import React, { useContext } from 'react';
import { handleCategoryContext } from '../../main/homeScreen';
import { categoryList } from '../../CategoryList';
import './Category.scss';

const Category: React.FC = () => {
  const { category, handleCategory } = useContext(handleCategoryContext);
  return (
    <div className="category">
      {categoryList.map((list, index) => (
        <li
          key={index}
          onClick={() => handleCategory(list as string)}
          className={category === list ? 'displayed' : 'undisplayed'}
        >
          <span>{list}</span>
        </li>
      ))}
    </div>
  );
};

export default Category;
