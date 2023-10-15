import {Instance} from "./index";
import {USER_IN_STORAGE} from "../shared/config";
import {User} from "../shared/types/user";
import authHeader from "./auth-header";


class AuthService {
    async login(username: string, password: string) {
        try {
            const response = await Instance.post("/auth/login/", {
                username,
                password
            })
            if (response.data.access) {
                localStorage.setItem(USER_IN_STORAGE, JSON.stringify(response.data));
            }
            return response.data
        } catch (e) {
            throw e
        }
    }

    logout() {
        localStorage.removeItem(USER_IN_STORAGE);
    }

    async getCurrentUser(): Promise<User> {
        try {
            const response = await Instance.get("/auth/user", {
                headers: authHeader()
            })
            return response.data
        } catch (e) {
            throw e
        }
    }

    async deleteCurrentUser() {
        try {
            await Instance.delete("/auth/user", {
                headers: authHeader()
            })
            await this.logout()
        } catch (e) {
            throw e
        }
    }


    async getOptionUpdate() {
        try {
            await Instance.options("/auth/user", {
                headers: authHeader()
            })
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService();