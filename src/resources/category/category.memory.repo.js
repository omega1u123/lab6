const categoryData = require('../../data/category.data')

const getAll = async () => categoryData;
  
const create = async (category) => {
  categoryData.push(category);
  return category;
}

const getById = async (id) => categoryData.find((category) => category.id === parseInt(id));

const getByMenuId = async (menuId) => categoryData.find((category) => category.menuId === parseInt(menuId));

const deleteByMenuId = async (menuId) => {
    const indexToDelete = categoryData.findIndex(category => category.menuId === parseInt(menuId));
  
    if (indexToDelete !== -1) {
      categoryData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};

const deleteById = async (id) => {
  const index = categoryData.findIndex((category) => category.id === parseInt(id));
  if (index !== -1) {
    categoryData.splice(index, 1);
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