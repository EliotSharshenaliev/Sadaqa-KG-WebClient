import React, {ReactNode, useContext} from "react";
import {User} from "../shared/types/user";
import {getUser} from "../service/auth";
import {Spinner} from "react-bootstrap";

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
        try {
            setLoading(true)
            const token: string | null = localStorage.getItem('jwtToken');

            if (token != null) {
                const jwtToken = JSON.parse(token)
                getUser(jwtToken)
                    .then(user => {
                        setUser(user)
                        setIsAuthenticated(true)
                    })
                    .catch(error => {
                        console.log(error)
                        setIsAuthenticated(false)
                    })
            }
        }finally {
            setLoading(false)
        }
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
        return <Spinner/>
    }
}


export const useAuth = (): AuthContextInterface => {
    return useContext(Context)
}