import { apiUrl } from "../configs/url";

const Categories = {
    findAll() {
        return fetch(`${apiUrl}/categories`);
    }
}

export default Categories;
