import { Modifier } from "./Components/Navbar/Navbar";

//--------------------NAVBAR------------------------//

export const handleNavDateClassName = (day: Modifier) => {
    switch (day) {
        default:
            return '';
        case 'today':
            return 'page-nav__day_today';
        case 'weekend':
            return 'page-nav__day_weekend';
        case 'chosen':
            return 'page-nav__day_chosen';
    }
}

//--------------------BUYING-SCHEME--------------------------//

export const handleHallPlaceClassName = (type: string) => {
    switch (type) {
        default:
            return type
        case 'disabled':
            return 'taken'
    }
}


