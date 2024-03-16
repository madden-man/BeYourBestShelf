import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { HomeView } from '../views/HomeView';
import { DetailView } from '../views/DetailView';

export const AppRouter = () =>
  <Router>
    <Routes>
        <Route path="/shelves" element={<HomeView />} />
        <Route path="/book" element={<DetailView />}>
            <Route path=":volumeId" element={<DetailView />} />
        </Route>
    </Routes>
  </Router>;

export default AppRouter;