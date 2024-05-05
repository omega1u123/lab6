const dishData = require('../../data/dish.data')


const getAll = async () => dishData;

const getById = async (id) => dishData.find((dish) => dish.id === id)

const deleteByCategoryId = async (categoryId) => {

  const indexToDelete = dishData.findIndex(dish => dish.categoryId === categoryId);
  
    if (indexToDelete !== -1) {
      dishData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};


const getByCategoryId = async (categoryId) => dishData.find((dish) => dish.categoryId === categoryId);

const deleteById = async (id) => {
  if (index !== -1) {
    category.splice(index, 1);
    return true;
  }

  return null;
};

const updateById = async (id, updatedDish) => {
  const index = dishData.findIndex(dish => dish.id === id);

  if (index !== -1) {
    dishData[index] = updatedDish;
    return true;
  }

  return false; 
};

const create = async (dish) => {
  dishData.push(dish);
  return dish
};
  
export { getAll, deleteByCategoryId, create, getByCategoryId, updateById, getById, deleteById };