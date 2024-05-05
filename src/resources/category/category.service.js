const categoryRepo =  require('./category.memory.repository.js');
const dishRepo = require('../dish/dish.memory.repo.js');
const Category = require('./category.model.js');

const getAll = () => categoryRepo.getAll();

const getById = (id) => categoryRepo.getById(id);

const create = (category) => {
    const category = new Category(category);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};

const update = (id, updatedCategory) => {
    const existingCategory = categoryRepo.getById(id);
  
    if (!existingCategory) {
      return null; 
    }
  
    Object.assign(existingCategory, updatedCategory);
  
    categoryRepo.updateById(id, existingCategory);
  
    return existingCategory;
};

const deleteById = (id) => {
    categoryRepo.deleteById(id);
    dishRepo.deleteByCategoryId(id);
};

const getDishesByCategoryId = (id) => dishRepo.getDishesByCategoryId(id);

export { getAll, getById, create, update, deleteById, getDishesByCategoryId };
