import dishData from '../../data/dish.data';

const getAll = async () => dishData;
  
const create = async (dish: any) => {
  dishData.push(dish);
  console.log(dishData)
  return dish;
}

const getById = async (id: number) => dishData.find((dish: any) => dish.id === id);

const deleteById = async (id: number) => {
  const index = dishData.findIndex((dish: any) => dish.id === id);
  if (index !== -1) {
    dishData.splice(index, 1);
    return true;
  }
  return null; 
}
  
const updateById = async (id: number, updatedDish: any) => {
  const index = dishData.findIndex((dish: any) => dish.id === id);
  if (index !== -1) {
    dishData[index] = updatedDish;
    return true;
  }

  return false; 
};

const getByCategoryId = async (categoryId: number) => dishData.find((dish: any) => dish.categoryId === categoryId);

const deleteByCategoryId = async (categoryId: number) => {
  const indexToDelete = dishData.findIndex((dish: any) => dish.categoryId === categoryId);
  
  if (indexToDelete !== -1) {
    dishData.splice(indexToDelete, 1);
    return true; 
  }
  
  return false; 
};

export default { getAll, getById, deleteById, create, updateById, getByCategoryId, deleteByCategoryId };
