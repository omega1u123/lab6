const menuData = require('../../data/menu.data')

const getAll = async () => menuData;
  
const create = async (menu) => {
  menuData.push(menu);
  return menu;
}

const getById = async (id) => menuData.find((menu) => menu.id === id);

const deleteById = async (id) => {
  if (index !== -1) {
    menu.splice(index, 1);
    return true;
  }

  return null;
}
  
const updateById = async (id, updatedMenu) => {
  const index = menuData.findIndex(menu => menu.id === id);

  if (index !== -1) {
    menuData[index] = updatedMenu;
    return true;
  }

  return false; 
};

export { getAll, getById, deleteById, create, updateById };