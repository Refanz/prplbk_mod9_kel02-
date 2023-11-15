import Login from "./pages/Login.jsx"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import{useToken} from "./api/Token.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddUser from "./components/AddUser.jsx";

function App() {

    const {token, setToken} = useToken("");

    function GuardedRoute({Component}) {
        const isUserLogin = token !== null

        return (
            isUserLogin ? <Component /> : <Login setToken={setToken} />
        )
    }

    function LoginRoute({Component}) {
        const isUserLogin = token !== null;

        return (
            isUserLogin ? <Navigate to="/"/> : <Component />
        )
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GuardedRoute Component={Dashboard}/> } />
                    <Route path="/login" element={<LoginRoute Component={Login}/>} />
                    <Route path="/add-user" element={<AddUser/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
