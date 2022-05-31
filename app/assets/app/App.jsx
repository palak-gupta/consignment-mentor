import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'app/container/HomePage';
import ConsignmentDashboard from 'app/container/ConsignmentDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage/> }>
                    <Route path="consignments" element={<ConsignmentDashboard />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
