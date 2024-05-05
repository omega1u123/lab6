class Dish {
    constructor({
     id,
     title,
     photo,
     isPublish,
     ingridients,
     price,
     categoryId,
   } = {}) {
     this.id = id;
     this.title = title;
     this.photo = photo;
     this.isPublish = isPublish;
     this.ingridients = ingridients;
     this.price = price;
     this.categoryId = categoryId;
   }
 
   static toResponse(dish) {
     const { id, title, photo, isPublish, ingridients, price, categoryId } = dish;
     return { id, title, photo, isPublish, ingridients, price, categoryId   };
   }
 }
 
 module.export = Dish;