export const getApiMeteo = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`);
        return response.json();
    } catch {
        throw new Error('error');
    }
};
