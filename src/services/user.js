import api from "../configs/api"

const userProfile = () => {
    const user = api.get(`/user/whoami`,{headers:{Authorization:`bearer ${getCookie("accessToken")}`}}).then(res => res || false );
    const user = api.get(`/user/whoami`);
    return user
}

export {userProfile} ;