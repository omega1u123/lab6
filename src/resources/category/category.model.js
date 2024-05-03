
class Category {
    constructor({
     string: id,
     string: title,
     string: photo,
     boolean: isVisible,
     string: menuId,
   } = {}) {
     this.id = id;
     this.title = title;
     this.photo = photo;
     this.isVisible = isVisible;
     this.menuId = menuId;
   }
 
   static toResponse(category) {
     const { id, title, photo, isVisible, menuId } = category;
     return { id, title, photo, isVisible, menuId  };
   }
 }
 
 export default Menu;