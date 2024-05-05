const categoryData = require('../../data/category.data')

const getAll = async () => categoryData;
  
const create = async (category) => {
  categoryData.push(category);
  return category;
}

const getById = async (id) => categoryData.find((category) => category.id === id);

const getByMenuId = async (menuId) => categoryData.find((category) => category.menuId === menuId);

const deleteByMenuId = async (menuId) => {
    const indexToDelete = categoryData.findIndex(category => category.menuId === menuId);
  
    if (indexToDelete !== -1) {
      categoryData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};

const deleteById = async (id) => {
  if (index !== -1) {
    category.splice(index, 1);
    return true;
  }

  return null;
}
  
const updateById = async (id, updatedCategory) => {
  const index = categoryData.findIndex(category => category.id === id);

  if (index !== -1) {
    categoryData[index] = updatedCategory;
    return true;
  }

  return false; 
};

module.exports = { getAll, getById, deleteById, create, updateById, getByMenuId, deleteByMenuId };