import { apiUrl } from "../configs/url";

const Comments = {
    findByCategoryId(categoryId) {
        return fetch(`${apiUrl}/categories/${categoryId}/comments`);
    }
}

export default Comments;
