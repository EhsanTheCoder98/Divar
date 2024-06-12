import api from "../configs/api"
import { getCookie } from "../utils/cookies";

const userProfile = () => {
    const user = api.get(`/user/whoami`,{headers:{Authorization:`bearer ${getCookie("accessToken")}`}}).then(res => res || false );
    return user
}

export {userProfile} ;