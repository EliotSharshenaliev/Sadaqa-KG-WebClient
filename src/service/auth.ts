import {Instance} from "./index";
import {User} from "../shared/types/user";
import {Token} from "../shared/types/token";

export const getUser = async (token: Token): Promise<User | null> => {
    try {
        const response = await Instance.get(
            "/auth/user/",
            {
                headers: {
                    Authorization: `Bearer ${token.access}`
                }
            }
        )
        return response.data
    }catch (e){
        throw e
    }
}