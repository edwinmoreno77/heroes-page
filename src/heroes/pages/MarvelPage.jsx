import { HeroList } from "../components";




export const MarvelPage = () => {
    return (
        <>
            <h1 className="mt-5">Marvel Page</h1>
            <hr />

            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
