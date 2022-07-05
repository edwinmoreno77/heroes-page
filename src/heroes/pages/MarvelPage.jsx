import { SliderMarvel } from "../../ui/components";
import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <SliderMarvel />
            <div className="m-3">
                <HeroList publisher={'Marvel Comics'} />
            </div>
        </>
    )
}
