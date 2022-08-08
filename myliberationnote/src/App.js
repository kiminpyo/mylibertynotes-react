import "./App.css";
import "./animation.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Mbtitest from "./pages/Mbtitest";
import AppLayout from "./components/AppLayout";
import Liberty from "./pages/Liberty";
import Intro from "./pages/Intro";
import Scripts from "./pages/Scripts";
import ScrollRestoration from "./components/ScrollRestoration";
import Footer from "./components/Footer";
import LibertySelf from "./pages/LibertySelf";
import LibertySelfEdit from "./components/LibertySelfEdit";
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <ScrollRestoration />
                <AppLayout />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/intro' element={<Intro />} />
                    <Route path='/liberty' element={<Liberty />} />
                    <Route
                        path='/libertyselfedit'
                        element={<LibertySelfEdit />}
                    />
                    <Route path='/libertyself' element={<LibertySelf />} />
                    <Route path='/mbtitest' element={<Mbtitest />} />
                    <Route path='/scripts' element={<Scripts />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
