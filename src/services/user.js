import api from "../configs/api"

const userProfile = () => {
    const user = api.get(`/user/whoami`);
    return user
}

export {userProfile} ;