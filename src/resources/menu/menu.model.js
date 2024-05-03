import { v4 as uuidv4 } from 'uuid';

class Menu {
   constructor({
    id,
    title,
    photo,
    isPublish,
  } = {}) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.isPublish = isPublish;
  }

  static toResponse(menu) {
    const { id, title, photo, isPublish } = menu;
    return { id, title, photo, isPublish  };
  }
}

export default Menu;