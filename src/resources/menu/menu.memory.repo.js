const menuData = require('../../data/menu.data');

const getAll = async () => menuData;
  
const create = async (menu) => {
  menuData.push(menu);
  console.log(menuData)
  return menu;
}

const getById = async (id) => menuData.find((menu) => menu.id === parseInt(id));

const deleteById = async (id) => {
  const index = menuData.findIndex((menu) => menu.id === parseInt(id));
  if (index !== -1) {
    menuData.splice(index, 1);
    return true;
  }
  return null; 
}
  
const updateById = async (id, updatedMenu) => {
  const index = menuData.findIndex(menu => menu.id === parseInt(id));
  if (index !== -1) {
    menuData[index] = updatedMenu;
    return true;
  }

  return false; 
};

module.exports = { getAll, getById, deleteById, create, updateById };