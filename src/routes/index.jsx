import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Layout from "../components/layout";
import Login from "../pages/sign-in";
import Account from "../pages/account";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Layout />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
        </Route>
    )
);

const Index = () => {
    return <RouterProvider router={router} />;
};

export default Index;
