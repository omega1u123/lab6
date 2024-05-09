import categoryData from '../../data/category.data';
import Category from './category.model';

const getAll = async () => categoryData;
  
const create = async (category: any) => {
  categoryData.push(category);
  return category;
}

const getById = async (id: number) => categoryData.find((category: Category) => category.id === id);

const getByMenuId = async (menuId: number) => categoryData.find((category: Category) => category.menuId === menuId);

const deleteByMenuId = async (menuId: number) => {
    const indexToDelete = categoryData.findIndex((category: Category) => category.menuId === menuId);
  
    if (indexToDelete !== -1) {
      categoryData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};

const deleteById = async (id: number) => {
  const index = categoryData.findIndex((category: Category) => category.id === id);
  if (index !== -1) {
    categoryData.splice(index, 1);
    return true;
  }
  return null; 
}
  
const updateById = async (id: number, updatedCategory: Category) => {
  const index = categoryData.findIndex((category: Category) => category.id === id);

  if (index !== -1) {
    categoryData[index] = updatedCategory;
    return true;
  }

  return false; 
};

export { getAll, getById, deleteById, create, updateById, getByMenuId, deleteByMenuId };
