import { useLoadingContext } from "@/contexct/LoadingContexct"

function useLoading () {
    const { filled, setFilled } = useLoadingContext();

    const handleLoading = () => {
        if (filled < 100 ) {
            setTimeout(() => setFilled(prev => {
                if (prev < 50) {
                    return prev += 1.5;
                }
                return prev += 2;
            }), 65);
        };
    }

    return {
        handleLoading
    }
}

export default useLoading