import { createContext, useState, useContext} from 'react';

const LoadingContext = createContext();

function LoadingProvider ({ children }) {
    const [filled, setFilled] = useState(0);

    const values = {
        filled,
        setFilled
    }
    return (

        <LoadingContext.Provider value={values}>
            {children}
        </LoadingContext.Provider>
    );
};

const useLoadingContext = () => {
    const context = useContext(LoadingContext)
    return context
};

export {
    LoadingProvider,
    LoadingContext,
    useLoadingContext
};