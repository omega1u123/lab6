const dishData = require('../../data/dish.data');

const getAll = async () => dishData;
  
const create = async (dish) => {
  dishData.push(dish);
  console.log(dishData)
  return dish;
}

const getById = async (id) => dishData.find((dish) => dish.id === +id);

const deleteById = async (id) => {
  const index = dishData.findIndex((dish) => dish.id === parseInt(id));
  if (index !== -1) {
    dishData.splice(index, 1);
    return true;
  }
  return null; 
}
  
const updateById = async (id, updatedDish) => {
  const index = dishData.findIndex(dish => dish.id === parseInt(id));
  if (index !== -1) {
    dishData[index] = updatedDish;
    return true;
  }

  return false; 
};

const getByCategoryId = async (categoryId) => dishData.find((dish) => dish.categoryId === parseInt(categoryId));

const deleteByCategoryId = async (categoryId) => {
    const indexToDelete = dishData.findIndex(dish => dish.categoryId === parseInt(categoryId));
  
    if (indexToDelete !== -1) {
      dishData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};

module.exports = { getAll, getById, deleteById, create, updateById, getByCategoryId, deleteByCategoryId };