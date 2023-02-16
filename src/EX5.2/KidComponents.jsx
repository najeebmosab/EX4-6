import { useState } from "react";
import { BallComponents } from "./BallComponents";
import "./KidComponents.css"
function KidComponents(props) {
    const [data, setData] = useState(props.data);
    function showData() {
        return (
            <>
                {
                    data.map((el,idx) => {
                        return (
                            <>
                                < div className="cardKid">
                                    <h2>{el.name}</h2>
                                    <BallComponents colorKid={el.color} key={idx} />
                                </div>
                            </>
                        )

                    })
                }
            </>
        )
    }

    return(
        <>
            <div className="containerKid">
                {showData()}
            </div>
        </>
    )
}
export { KidComponents };