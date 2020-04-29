import axios from 'axios';

const API_BASE_URL = "https://conduit.productionready.io/api";
export const ApiService = axios.create({
    baseURL: API_BASE_URL
});
//Authentication
//POST /api/users/login

// Update User
// PUT /api/user


// Get Profile
// GET /api/profiles/:username

//
export const fetchProfile = async (username: string) => {
    const response = await axios.get(`${ API_BASE_URL }/profiles/${ username }`);
    // return
};

// export const fetchArticles = async
