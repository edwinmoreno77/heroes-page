import { SliderDc } from "../../ui/components";
import { HeroList } from "../components";


export const DcPage = () => {
    return (
        <>
            <SliderDc />
            <div className="container">
                <HeroList publisher={'DC Comics'} />
            </div>
        </>
    )
}
