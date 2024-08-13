import { useOpenContext } from "@/contexct/OpenContext";

function useOpen () {
    const { setOpen, setClose } = useOpenContext();

    const isOpen = () => {
        setOpen(true);
    }

    const isClose = () => {
        setOpen(false);
    }

    const isShutDown = () => {
        setClose(true)
    }

    return {
        isOpen,
        isClose,
        isShutDown
    }
}

export default useOpen