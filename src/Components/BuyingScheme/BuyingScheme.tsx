import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "Hooks/redux";
import { addSelectedPlace, deleteSelectedPlace, resetState } from 'Store/HallSlice'
import { handleHallPlaceClassName } from 'functions'

function BuyingScheme() {
    const dispatch = useAppDispatch()
    const { hall, places } = useAppSelector(state => state.hallState)
    const { rows, prices } = hall

    const onSelect = (e: any, { row, place }: { row: number, place: number }) => {
        if (e.target.classList.contains('buying-scheme__chair_taken')) return;
        if (places.find(obj => obj.row === row && obj.place === place)) {
            dispatch(deleteSelectedPlace({ row, place }))
        } else {
            dispatch(addSelectedPlace({ row, place }))
        }
        console.log(places)
        e.target.classList.toggle('buying-scheme__chair_selected')
    }

    useEffect(() => {
        return () => {
            dispatch(resetState())
        }
    }, [])

    return (
        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {rows?.map((row: Array<string>, rowIndex: number) => (
                    <div key={rowIndex} className="buying-scheme__row">
                        {row.map((place, index: number) =>
                            <span
                                onClick={(e) => onSelect(e, { row: rowIndex, place: index })}
                                key={index}
                                className={`buying-scheme__chair buying-scheme__chair_${handleHallPlaceClassName(place)}`}
                            />
                        )}
                    </div>
                    )
                )}
            </div>
            <div className="buying-scheme__legend">
                <div className="col">
                    { prices && Object.entries(prices).map(([key, value]) =>
                        <p key={key} className="buying-scheme__legend-price">
                            <span className={`buying-scheme__chair buying-scheme__chair_${key}`}/> Свободно {key === 'vip' && 'VIP '}
                            (<span className="buying-scheme__legend-value">{`${value}`}</span>руб)
                        </p>
                    )}
                </div>
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_taken"/> Занято</p>
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_selected"/> Выбрано</p>
                </div>
            </div>
        </div>
    );
}

export default BuyingScheme;
