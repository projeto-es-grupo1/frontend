import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Page404 } from '../pages';

export default () => {

    // const { user } = useContext(AuthContext);
    
    return(
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/*' element={<Page404 />} />
        </Routes>
    );
};