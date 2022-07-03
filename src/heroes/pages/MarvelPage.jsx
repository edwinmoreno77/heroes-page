import { Slider } from "../../ui/components";
import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <Slider />
            <h1 className="mt-2">Marvel Page</h1>
            <hr />
            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
