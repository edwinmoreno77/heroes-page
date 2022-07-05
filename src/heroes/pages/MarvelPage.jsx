import { SliderMarvel } from "../../ui/components";
import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <SliderMarvel />
            <div className="container">
                <HeroList publisher={'Marvel Comics'} />
            </div>
        </>
    )
}
