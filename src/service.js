export const getApiMeteo = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`);
        return response.json();
    } catch {
        throw new Error('error');
    }
};

export const dataLocations = [

    {
        "id": 1,
        "name": "Plaza Belgrano",
        "latitude": "-24.1858192",
        "longitude": "-65.3016649",
        "temperature": "13.0",
        "windspeed": "3.6",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/PlazaBelgrano1.jpg/280px-PlazaBelgrano1.jpg"
    },

    {
        "id": 2,
        "name": "Ciudad Cultural",
        "latitude": "-24.1834128",
        "longitude": "-65.3334866",
        "temperature": "15.8",
        "windspeed": "4.6",
        "img": "https://indiehoy.com/wp-content/uploads/2020/02/ciudad-cultural.jpg"
    },

];