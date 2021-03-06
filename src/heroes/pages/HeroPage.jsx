import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroByid } from "../helpers";




export const HeroPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroByid(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
        //otra forma de hacerlo
        // window.history.back();
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    const heroImageUrl = `/assets/img/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-5">
                <img
                    src={heroImageUrl}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft shadow"
                />
            </div>
            <div className="col-7">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter_ego: </b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    onClick={onNavigateBack}
                    className="btn btn-outline-primary shadow mb-5">
                    Return
                </button>

            </div>
        </div>

    )
}
