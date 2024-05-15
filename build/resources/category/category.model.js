"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    id;
    title;
    photo;
    isVisible;
    menuId;
    constructor({ id, title, photo, isVisible, menuId, } = {}) {
        this.id = id || 0;
        this.title = title || '';
        this.photo = photo || '';
        this.isVisible = isVisible || false;
        this.menuId = menuId || 0;
    }
    static toResponse(category) {
        const { id, title, photo, isVisible, menuId } = category;
        return { id, title, photo, isVisible, menuId };
    }
}
exports.default = Category;
//# sourceMappingURL=category.model.js.map