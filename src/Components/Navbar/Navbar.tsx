import React from 'react';
import { handleNavDateClassName } from "functions";

export type Modifier = 'today' | 'chosen' | 'weekend' | null

export interface IDay {
    weekday: string
    date: number
    modifier: Modifier
}

type Data = IDay[]

const navigationData: Data = [
    {
        weekday: 'Пн',
        date: 31,
        modifier: 'today'
    },
    {
        weekday: 'Вт',
        date: 1,
        modifier: null
    },
    {
        weekday: 'Ср',
        date: 2,
        modifier: 'chosen'
    },
    {
        weekday: 'Чт',
        date: 3,
        modifier: null
    },
    {
        weekday: 'Пт',
        date: 4,
        modifier: null
    },
    {
        weekday: 'Сб',
        date: 5,
        modifier: 'weekend'
    }
]

const onClick = () => {

}

function Navbar() {
    return (
        <nav className="page-nav">
            {navigationData.map(data =>
                <div className={`page-nav__day ${handleNavDateClassName(data.modifier)}`}>
                    <span className="page-nav__day-week">{data.weekday}</span>
                    <span className="page-nav__day-number">{data.date}</span>
                </div>
            )}
            <div className="page-nav__day page-nav__day_next" />
            {/*<a className="page-nav__day page-nav__day_today" href="#">*/}
            {/*    <span className="page-nav__day-week">Пн</span><span className="page-nav__day-number">31</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day" href="#">*/}
            {/*    <span className="page-nav__day-week">Вт</span><span className="page-nav__day-number">1</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day page-nav__day_chosen" href="#">*/}
            {/*    <span className="page-nav__day-week">Ср</span><span className="page-nav__day-number">2</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day" href="#">*/}
            {/*    <span className="page-nav__day-week">Чт</span><span className="page-nav__day-number">3</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day" href="#">*/}
            {/*    <span className="page-nav__day-week">Пт</span><span className="page-nav__day-number">4</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day page-nav__day_weekend" href="#">*/}
            {/*    <span className="page-nav__day-week">Сб</span><span className="page-nav__day-number">5</span>*/}
            {/*</a>*/}
            {/*<a className="page-nav__day page-nav__day_next" href="#">*/}
            {/*</a>*/}
        </nav>
    );
}

export default Navbar;
