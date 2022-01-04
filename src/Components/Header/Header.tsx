import React from 'react';
import {sessionsApi} from "../../Store/sessionsApi";

function Header() {
    // const { data, isLoading } = sessionsApi.useGetSessionsQuery('')

    setTimeout(() => {
        // console.log(data)
    }, 1000)

    return (
        <header className="page-header">
            <h1 className="page-header__title">
                Идём<span>в</span>кино
            </h1>
        </header>
    );
}

export default Header;
