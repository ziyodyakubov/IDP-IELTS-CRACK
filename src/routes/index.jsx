import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Layout from "../components/layout";
import Login from "../pages/sign-in";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route element={<Layout />}>
                    <Route index element={<Login />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default Index;
