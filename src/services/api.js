import axios from 'axios'


const Routes = axios.create({
    baseURL:'https://stormbackend.herokuapp.com/'
});


export default Routes;
