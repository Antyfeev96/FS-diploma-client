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

export const handleChangeClassName = () => {

}

//--------------------------------------------//
