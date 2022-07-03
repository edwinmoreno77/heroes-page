import { Slider } from "../../ui/components";
import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <h1 className="mt-5">Marvel Page</h1>
            <hr />
            <Slider />
            <hr />

            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
