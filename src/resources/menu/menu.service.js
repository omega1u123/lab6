import * as menuRepo from './menu.memory.repo.js';
import Menu from './menu.model.js';

const getAll = () => menuRepo.getAll();

const getById = (id) => menuRepo.getById(id);

const deleteById = (id) => menuRepo.deleteById(id);

const create = (payload) => {
    const menu = new Menu(payload);
    const menuCreated = menuRepo.create(menu);
    return menuCreated;
}

const updateById = async (id, updatedMenu) => {
    const existingMenu = await menuRepo.getById(id);
  
    if (!existingMenu) {
      return null; 
    }
  
    Object.assign(existingMenu, updatedMenu);
  
    await menuRepo.updateById(id, existingMenu);
  
    return existingMenu;
};


export { getAll, getById, deleteById, create, updateById };
