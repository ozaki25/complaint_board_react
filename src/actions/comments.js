import { apiUrl } from "../configs/url";

const Comments = {
    fetchAll() {
        return fetch(`${apiUrl}/comments`);
    }
}

export default Comments;
