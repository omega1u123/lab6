const menuRepo =  require('./menu.memory.repo.js');
const categoryRepo =  require('../category/category.memory.repo.js');
const Menu = require('../menu/menu.model.js')

const getAll = () => menuRepo.getAll();

const getById = (id) => menuRepo.getById(id);

const deleteById = (id) => {
    menuRepo.deleteById(id);
    categoryRepo.deleteByMenuId(id);
    return true
}    

const create = (payload) => {
    const menu = new Menu(payload);
    const menuCreated = menuRepo.create(menu);
    return menuCreated;
}

const updateById = (id, updatedMenu) => {
    const existingMenu = menuRepo.getById(id);
  
    if (!existingMenu) {
      return null; 
    }
  
    console.log('updated menu id', updatedMenu);
  
    menuRepo.updateById(id, updatedMenu);
  
    return existingMenu;
};


const getCategories = (menuId) =>{
    return categoryRepo.getByMenuId(menuId);
}

module.exports =  { getAll, getById, deleteById, create, updateById, getCategories };
