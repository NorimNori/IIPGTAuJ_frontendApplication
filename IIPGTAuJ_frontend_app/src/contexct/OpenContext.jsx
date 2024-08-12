import { createContext, useState, useContext} from 'react';

const OpenContext = createContext();

function OpenProvider ({ children }) {
    const [open, setOpen] = useState(false);

    const values = {
        open,
        setOpen
    }
    return (

        <OpenContext.Provider value={values}>
            {children}
        </OpenContext.Provider>
    );
};

const useOpenContext = () => {
    const context = useContext(OpenContext)
    return context
};

export {
    OpenProvider,
    OpenContext,
    useOpenContext
};