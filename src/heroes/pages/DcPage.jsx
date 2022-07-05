import { SliderDc } from "../../ui/components";
import { HeroList } from "../components";


export const DcPage = () => {
    return (
        <>
            <SliderDc />
            <div className="m-3">
                <HeroList publisher={'DC Comics'} />
            </div>
        </>
    )
}
