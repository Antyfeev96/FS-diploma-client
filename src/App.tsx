import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from 'Components/Header/Header';

import HomePage from "Pages/HomePage/HomePage";
import Loader from 'Components/Loader/Loader'

const HallPage = lazy(() => import('Pages/HallPage/HallPage'));
const PaymentPage = lazy(() => import('Pages/PaymentPage/PaymentPage'));
const TicketPage = lazy(() => import('Pages/TicketPage/TicketPage'));

function App() {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/hall" element={<HallPage/>}/>
                        <Route path="/payment" element={<PaymentPage/>}/>
                        <Route path="/ticket" element={<TicketPage/>}/>
                        <Route path="*" element={<Navigate to="/home"/>}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
