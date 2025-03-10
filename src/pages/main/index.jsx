import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import { useEffect } from "react";

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("access_token")) {
            navigate("/account");
        }
    }, [navigate]);

    return (
        <div className="bg-[#fff]">
            <Layout />
        </div>
    );
};

export default Main;
