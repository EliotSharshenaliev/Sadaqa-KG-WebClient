import React, {ReactNode, useContext} from "react";

export interface ModalContextInterface {
    profileModalVisible: boolean,
    handleProfileModal: () => void
}

const Context = React.createContext({
    profileModalVisible: false,
    handleProfileModal: () => {}
})

interface ModalProvider{
    children: ReactNode
}

export const ModalProvider = ({children}: ModalProvider) => {
    const [profileModalVisible, setProfileModalVisible] = React.useState(false)

    const handleProfileModal = () => setProfileModalVisible(!profileModalVisible)

    const contextValues: ModalContextInterface = {
        profileModalVisible,
        handleProfileModal
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
}


export const useSettings = (): ModalContextInterface => {
    return useContext(Context)
}