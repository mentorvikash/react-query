import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Day1 from "../pages/day1";
import Day3 from "../pages/day3";
import Day4 from "../pages/day4";
import Superhero from '../pages/day2/Superhero';
import RqSuperHero from '../pages/day2/RqSuperhero';
function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/day1" element={<Day1 />} />
                <Route path="/day2/superhero" element={<Superhero />} />
                <Route path="/day2/rq-SuperHero" element={<RqSuperHero />} />
                <Route path="/day3" element={<Day3 />} />
                <Route path="/day4" element={<Day4 />} />
            </Routes>
        </div>
    )
}

export default Routing