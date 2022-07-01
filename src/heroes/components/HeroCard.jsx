import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `https://github.com/edwinmoreno77/heroes-page/docs/assets/img/${id}.jpg`;
    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card shadow'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={heroImageUrl} className='card-img shadow' alt={superhero} />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {/* {(alter_ego !== characters) && (<p >{characters}</p>)} */}
                            <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Info...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
