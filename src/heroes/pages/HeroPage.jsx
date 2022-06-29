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


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail shadow"
                />
            </div>
            <div className="col-8">
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
                    className="btn btn-outline-primary shadow">
                    Regresar
                </button>

            </div>
        </div>

    )
}