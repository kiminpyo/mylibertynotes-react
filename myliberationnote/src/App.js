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
import LibertySelfDetail from "./components/LibertySelfDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CookiesProvider } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOAD_ME } from "./reducers/user";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_ME,
        });
    }, []);
    const { userInfo } = useSelector((state) => state.user);

    return (
        <div className='App'>
            <CookiesProvider>
                <BrowserRouter>
                    <ScrollRestoration />
                    <AppLayout />
                    <Routes>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Main />} />
                        <Route path='/intro' element={<Intro />} />
                        <Route path='/liberty' element={<Liberty />} />

                        <Route
                            path='/libertyselfedit'
                            element={<LibertySelfEdit />}
                        />

                        <Route path='/libertyself' element={<LibertySelf />} />
                        <Route
                            path='/libertyself/:id'
                            element={<LibertySelfDetail />}
                        />
                        <Route path='/mbtitest' element={<Mbtitest />} />
                        <Route path='/scripts' element={<Scripts />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CookiesProvider>
        </div>
    );
}

export default App;
