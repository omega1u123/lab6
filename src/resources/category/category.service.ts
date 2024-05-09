const categoryRepo =  require('./category.memory.repo');
const dishRepo =  require('../dish/dish.memory.repo');
import Category from './category.model';

const getAll = () => categoryRepo.getAll();

const getById = (id: number) => categoryRepo.getById(id);

const create = (payload: any) => {
    const category = new Category(payload);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};

const updateById = (id: number, updatedCategory: any) => {
    const existingCategory = categoryRepo.getById(id);
  
    if (!existingCategory) {
      return null; 
    }
  
    categoryRepo.updateById(id, updatedCategory);
  
    return updatedCategory;
};

const deleteById = (id: number) => {
    categoryRepo.deleteById(id);
    dishRepo.deleteByCategoryId(id);
};

const getDishesByCategoryId = (id: number) => dishRepo.getByCategoryId(id);

export { getAll, getById, create, updateById, deleteById, getDishesByCategoryId };
