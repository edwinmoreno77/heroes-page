import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-2 col-hero'>
            {heroes.map(hero => {
                return (
                    <HeroCard
                        key={hero.id}
                        {...hero} />
                )
            })}
        </div>
    )
}
