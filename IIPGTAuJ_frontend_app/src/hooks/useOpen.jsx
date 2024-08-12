import { useOpenContext } from "@/contexct/OpenContext";

function useOpen () {
    const { setOpen } = useOpenContext();

    const isOpen = () => {
        setOpen(true);
    }

    const isClose = () => {
        setOpen(false);
    }

    return {
        isOpen,
        isClose
    }
}

export default useOpen