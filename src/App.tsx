import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import HomePage from "Pages/HomePage/HomePage";

const HallPage = lazy(() => import('Pages/HallPage/HallPage'));


function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/hall" element={<HallPage/>}/>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
