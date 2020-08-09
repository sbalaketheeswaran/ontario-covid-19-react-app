import axios from 'axios';

const url = 'https://covid-19-in-ontario-rest-api.herokuapp.com/PublicHealthUnit';

export const fetchAllPublicHealthUnitData = async () => {
    try {
        const {
            data
        } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchByPublicHealthUnitID = async (id) => {
    try {
        const {
            data
        } = await axios.get(url + '/' + id);
        return data;
    } catch (error) {
        console.log(error);
    }
};