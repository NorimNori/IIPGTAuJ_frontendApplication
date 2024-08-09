import { useState, useEffect } from "react"
import './barraCarga.css'

const BarraCarga = () => {
    const [filled, setFilled] = useState(0)
    useEffect(() => {
        if (filled < 100 ) {
            setTimeout(() => setFilled(prev => prev += 2),65)
        }
    },[filled])
    return (
        <>
            <div className="loadingBar">
			  <div className="loading" style={{
				  width: `${filled}%`,
				  transition:"width 0.5s"
			  }}></div>
		  </div>
        </>
    )
}

export default BarraCarga