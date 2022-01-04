import React, { useRef } from 'react';
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

function Navbar() {
    const ref = useRef<HTMLElement>(null)

    const onClick = (e: any) => {
        const parent = e.target.parentNode
        if (!parent.classList.contains('page-nav__day')) return
        document.querySelector('.page-nav__day_chosen')?.classList.remove('page-nav__day_chosen')
        parent.classList.add('page-nav__day_chosen')
    }

    return (
        <nav onClick={onClick} ref={ref} className="page-nav">
            {navigationData.map(data =>
                <div key={data.date} className={`page-nav__day ${handleNavDateClassName(data.modifier)}`}>
                    <span className="page-nav__day-week">{data.weekday}</span>
                    <span className="page-nav__day-number">{data.date}</span>
                </div>
            )}
            <div className="page-nav__day page-nav__day_next" />
        </nav>
    );
}

export default Navbar;
