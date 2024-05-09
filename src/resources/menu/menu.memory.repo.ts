import Menu from './menu.model';
const menuData: Menu[] = require('../../data/menu.data');

const getAll = async (): Promise<Menu[]> => menuData;
  
const create = async (menu: Menu): Promise<Menu> => {
  menuData.push(menu);
  console.log(menuData);
  return menu;
}

const getById = async (id: number): Promise<Menu | undefined> => menuData.find((menu) => menu.id === id);

const deleteById = async (id: number): Promise<boolean | null> => {
  const index = menuData.findIndex((menu) => menu.id === id);
  if (index !== -1) {
    menuData.splice(index, 1);
    return true;
  }
  return null; 
}
  
const updateById = async (id: number, updatedMenu: Menu): Promise<boolean> => {
  const index = menuData.findIndex(menu => menu.id === id);
  if (index !== -1) {
    menuData[index] = updatedMenu;
    return true;
  }
  return false; 
};

export { getAll, getById, deleteById, create, updateById };
