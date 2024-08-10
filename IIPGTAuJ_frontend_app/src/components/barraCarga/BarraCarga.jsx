import { useEffect } from "react";
import useLoading from "@/hooks/useLoading";
import { useLoadingContext } from "@/contexct/LoadingContexct";
import './barraCarga.css';

const BarraCarga = () => {

    const { filled } = useLoadingContext();
    const { handleLoading } = useLoading(0);

    useEffect(() => {
        handleLoading();
    },[filled]);

    return (
        <>
            <div className="loadingBar">
			  <div className="loading" style={{
				  width: `${filled}%`,
				  transition:"width 0.5s"
			  }}></div>
		  </div>
        </>
    );
};

export default BarraCarga;