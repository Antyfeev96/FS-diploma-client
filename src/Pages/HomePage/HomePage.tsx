import React, {useEffect} from 'react';

import Navbar from 'Components/Navbar/Navbar'
import Main from 'Components/Main/Main'
import {resetState} from "Store/HallSlice";
import {useAppDispatch} from "Hooks/redux";

function HomePage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(resetState())
    }, [dispatch])

    return (
        <>
            <Navbar/>
            <Main/>
        </>
    );
}

export default HomePage;
