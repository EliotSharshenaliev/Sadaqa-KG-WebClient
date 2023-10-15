import React, {ReactNode, useContext} from "react";
import {User} from "../shared/types/user";
import AuthService from "../service/auth";
import LoadingPage from "../components/spinner/loading-page";

export interface AuthContextInterface {
    user: User | null,
    isAuthenticated: boolean
}

const Context = React.createContext<AuthContextInterface>({
    user: null,
    isAuthenticated: false
})

interface AuthProvider {
    children: ReactNode
}

export const AuthProvider = ({children}: AuthProvider) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [User, setUser] = React.useState<User | null>(null);
    const [isLoading, setLoading] = React.useState(true)

    // Get user
    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true)
                const user = await AuthService.getCurrentUser();
                setUser(user);
                setIsAuthenticated(true)
            } catch (error) {
                setIsAuthenticated(false)
            }finally {
                setLoading(false)
            }
        };

        fetchUserData()
    }, []);

    const contextValues: AuthContextInterface = {
        user: User,
        isAuthenticated
    }

    if (!isLoading) {
        return (
            <Context.Provider value={contextValues}>
                {children}
            </Context.Provider>
        )
    } else {
        return <LoadingPage/>
    }
}


export const useAuth = (): AuthContextInterface => {
    return useContext(Context)
}