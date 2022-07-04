import { SliderMarvel } from "../../ui/components";
import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <SliderMarvel />

            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
