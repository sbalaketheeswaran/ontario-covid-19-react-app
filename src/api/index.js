import axios from 'axios';

const url = 'https://covid-19-in-ontario-rest-api.herokuapp.com';

export const fetchAllPublicHealthUnitData = async () => {
    try {
        console.log(url + '/PublicHealthUnit')
        const {
            data
        } = await axios.get(url + '/PublicHealthUnit');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchOntarioMetaCovidCases = async () => {
    try {
        console.log(url + '/OntarioMetaCovidCase')
        const {
            data
        } = await axios.get(url + '/OntarioMetaCovidCase');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchByPublicHealthUnitID = async (id) => {
    try {
        const {
            data
        } = await axios.get(url + '/PublicHealthUnit/' + id);
        return data;
    } catch (error) {
        console.log(error);
    }
};