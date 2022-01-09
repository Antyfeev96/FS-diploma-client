import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "Hooks/redux";
import {filmsApi} from "Store/filmsApi";
import BuyingInfo from "Components/BuyingInfo/BuyingInfo";
import BuyingScheme from "Components/BuyingScheme/BuyingScheme";
import Loader from "Components/Loader/Loader";

function HallPage() {
    const navigate = useNavigate()
    const {places, filmId} = useAppSelector(state => state.hallState)
    const {data = [], isLoading, isSuccess} = filmsApi.useGetFilmByIdQuery(filmId)

    useEffect(() => {
        if (!places || !filmId) {
            return navigate('/home')
        }
    }, [places, filmId, navigate])

    return (
        <main>
            <section className="buying">
                {isLoading && <Loader/>}
                {isSuccess && data.film._id &&
                <>
                    <BuyingInfo/>
                    <BuyingScheme/>
                    <Link to="/payment">
                        <button disabled={places.length === 0} className="accepting-button">Забронировать</button>
                    </Link>
                </>}
            </section>
        </main>
    );
}

export default HallPage;
