import axios from "axios";

const testProducts = [{
    name: 'Halo 3',
    developer: 'Bungie',
    release_date: '2007', 
    genre: 'Action First Person Shooter',
    description: 'Simply put, the best video game ever created in the face of man kind.'},
    
    {name: 'Uncharted',
    developer: 'Naughty Dog',
    release_date: '2007', 
    genre: 'Action Third Person Shooter',
    description: 'A fun and very craeative game, full of adventure and Awww Crap moments.'},

    {name: 'Hollow Knight',
    developer: 'Team Cherry',
    release_date: '2011', 
    genre: 'Hard Core Platfomer',
    description: 'The best metroidvenia ever created in the face of the earth'}
]

const Api = axios.create({
    //configuration
    baseURL : 'https://f61be323-7589-49fd-a670-6ffb68365a57.mock.pstmn.io/',
    timeout : 8000,
    headers: {
		Accept: 'application/json',
		'x-rapidapi-key': '<your-key-here>'
	},
})

//Get All
const getAllProducts = async () => {
    const reponse = await Api.get('/get?test=123', {
    }).then(response => response.data);
    console.log(reponse.data);
};

export  {getAllProducts, Api}