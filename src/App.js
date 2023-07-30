import './App.css';
import {Header} from './components/Header';
import {Main} from "./components/Main"

import {Router, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";

function App() {


    return (
        <>
            < Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage/>}>
                    </Route>
                    <Route path="/" element={<Details/>}/>
                    <Route element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
