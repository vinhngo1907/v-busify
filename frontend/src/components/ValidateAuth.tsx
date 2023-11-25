import { useEffect } from "react";
import { userAuthStore } from "../store/authStore";
import axios from "axios";

const ValidateAuth: React.FC = () => {
    const { isAuth, isloading, setIsAuth, setUser, setIsLoading } = userAuthStore();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:3000/auth/me", {
                    withCredentials: true
                });

                if (res.status === 200) {
                    setIsAuth(true);
                    setUser(res.data);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, [setUser, setIsAuth])
    return <></>
}

export default ValidateAuth;