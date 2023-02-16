import { useState } from "react";
import { kids } from "./DataKids";
import { KidComponents } from "./KidComponents";
function MotherComponents() {
    const [KidsData, setKidsData] = useState(kids);
    return (
        <>
            <KidComponents  data={KidsData} />
        </>
    )

}
export { MotherComponents }