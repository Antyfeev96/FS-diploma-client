import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {hallsApi} from "Store/hallsApi";
import Header from "Components/Header/Header";
import BuyingInfo from "Components/BuyingInfo/BuyingInfo";
import BuyingScheme from "Components/BuyingScheme/BuyingScheme";
import {useAppSelector} from "Hooks/redux";

function HallPage() {
    const navigate = useNavigate()
    const {hall, filmId, session, places} = useAppSelector(state => state.hallState)

    if (!places) {
        navigate('/home')
    }

    // useEffect(() => {
    //     console.log(123)
    //     if (!places) {
    //         navigate('/home')
    //     }
    // }, [])

    return (
        <>
            <Header/>
            <main>
                <section className="buying">
                    <BuyingInfo/>
                    <BuyingScheme/>
                    <button className="accepting-button">Забронировать</button>
                </section>
            </main>
        </>
    );
}

export default HallPage;
