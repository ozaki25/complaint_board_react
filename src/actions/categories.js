import { apiUrl } from "../configs/url";

const Categories = {
    fetchAll() {
        return fetch(`${apiUrl}/categories`);
    }
}

export default Categories;
