import { useLocation, useNavigate } from "react-router-dom";

import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";



export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && heroes.length === 0;


    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    }



    return (
        <>
            <div className="row searchImg d-block">

                <div className="col-6 m-5">
                    <h4>Searching</h4>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control shadow mt-5"
                            placeholder="Search a hero"
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-5 shadow">
                            Search
                        </button>
                    </form>

                    {/* <div className="m-1">
                        <img src="/assets/img/JusticeLeague-Backgrounds2.jpg" alt="" />
                    </div> */}


                </div>

                <div className="col-4 m-5">

                    <h4 className="mt-5">Results</h4>


                    {/* {
                        (q === '')
                            ? <div className="alert alert-warning">Search a hero</div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    } */}
                    <div className=" mt-5 mb-5 alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>


                    <div className="mb-5 alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{q}</b>
                    </div>
                    <hr />

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>

            </div>

        </>
    )
}
