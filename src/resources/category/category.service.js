const categoryRepo =  require('./category.memory.repo.js');
const dishRepo = require('../dish/dish.memory.repo.js');
const Category = require('./category.model.js');

const getAll = () => categoryRepo.getAll();

const getById = (id) => categoryRepo.getById(id);

const create = (payload) => {
    const category = new Category(payload);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};


const updateById = (id, updatedCategory) => {
    const existingCategory = categoryRepo.getById(id);
  
    if (!existingCategory) {
      return null; 
    }


    categoryRepo.updateById(id, updatedCategory);
  
    return updatedCategory;
};



const deleteById = (id) => {
    categoryRepo.deleteById(id);
    dishRepo.deleteByCategoryId(id);
};

const getDishesByCategoryId = (id) => dishRepo.getByCategoryId(id);

module.exports = { getAll, getById, create, updateById, deleteById, getDishesByCategoryId };
