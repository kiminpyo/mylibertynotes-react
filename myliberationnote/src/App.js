import "./App.css";
import "./animation.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AppLayout from "./components/AppLayout";
import Liberty from "./pages/Liberty";
import Intro from "./pages/Intro";
import ScrollRestoration from "./components/ScrollRestoration";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LibertyEdit from "./components/LibertyEdit";
import LibertyDetail from "./components/LibertyDetail";
import MyPage from "./pages/MyPage";
function App() {
    return (
        <>
            <ScrollRestoration />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route index element={<Main />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/liberty" element={<Liberty />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/libertyedit" element={<LibertyEdit />} />
                    <Route path="/liberty/:id" element={<LibertyDetail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
