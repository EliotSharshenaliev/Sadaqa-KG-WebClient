import {USER_IN_STORAGE} from "../shared/config";

export default function authHeader() {
    const user_byte = localStorage.getItem(USER_IN_STORAGE)

    if (user_byte === null) {
        return {}
    }
    const user = JSON.parse(user_byte)

    if (user != null && user.access) {
        return {'Authorization': `Bearer ${user.access}`};       // for Node.js Express back-end
    } else {
        return {};
    }
}