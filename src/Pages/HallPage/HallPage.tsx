import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "Hooks/redux";
import BuyingInfo from "Components/BuyingInfo/BuyingInfo";
import BuyingScheme from "Components/BuyingScheme/BuyingScheme";

function HallPage() {
    const navigate = useNavigate()
    const { places } = useAppSelector(state => state.hallState)

    useEffect(() => {
        if (!places) {
            return navigate('/home')
        }
    }, [places])

    return (
        <main>
            <section className="buying">
                <BuyingInfo/>
                <BuyingScheme/>
                <Link to="/payment">
                    <button disabled={places.length === 0} className="accepting-button">Забронировать</button>
                </Link>
            </section>
        </main>
    );
}

export default HallPage;
