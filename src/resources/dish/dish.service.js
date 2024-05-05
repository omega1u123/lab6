const dishRepo = require('./dish.memory.repo.js');

const getAll = () => dishRepo.getAll();

module.export =  { getAll };
