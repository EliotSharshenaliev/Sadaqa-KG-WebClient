import React, {ReactNode} from 'react';

interface EscapeProps {
    state: boolean,
    onEvent: () => void,
    children: ReactNode
}
export const EscapeEvent = ({children, state, onEvent}: EscapeProps): JSX.Element | null  => {

    const escFunction = React.useCallback((event: any) => {
        if (event.key === "Escape" && state) onEvent()
    }, [state]);

    React.useEffect(() => {
        if(state){
            window.addEventListener("keydown", escFunction, false)
            return () => window.removeEventListener("keydown", escFunction, false)
        }
    }, [state])

    return <>{children}</>
};

