export const getApiMeteo = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`
    );
    return response.json();
  } catch {
    throw new Error("error");
  }
};

export const dataLocations = [
  {
    id: 1,
    name: "Plaza Belgrano",
    latitude: "-24.1858192",
    longitude: "-65.3016649",
    temperature: "13.0",
    windspeed: "3.6",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/PlazaBelgrano1.jpg/280px-PlazaBelgrano1.jpg",
  },

  {
    id: 2,
    name: "Ciudad Cultural",
    latitude: "-24.1834128",
    longitude: "-65.3334866",
    temperature: "15.8",
    windspeed: "4.6",
    img: "https://indiehoy.com/wp-content/uploads/2020/02/ciudad-cultural.jpg",
  },
];

export const imagenes = [
  "https://www.olavarria.gov.ar/wp-content/uploads/2017/12/Plaza-Julio-Pagano-B%C2%BA-Bancario-1-1024x683.jpg",
  "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2020/04/5ea398b5253d9_900.jpg",
  "https://arqa.com/wp-content/uploads/2019/05/6_equal-saree_pla%C3%83%C2%A7a-bar%C3%83%C2%B3-530x350.jpg",
  "https://i.pinimg.com/originals/87/9c/1a/879c1ae14399002d78b0bb9d84f217dd.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/11/43/bc/09/areas-verdes.jpg",
  "https://www.mda.gob.ar/wp-content/uploads/2018/11/plazaint.gif",
  "https://imgs-akamai.mnstatic.com/bd/6e/bd6e3e19b822d6ac1402b43634700b4e.jpg?quality=75&format=pjpg&fit=bounds&width=980&height=880",
  "https://ciudaddemendoza.gob.ar/wp-content/uploads/2017/04/plaza-san-martin2-1024x643.jpg",
  "https://jesusmaria.tur.ar/wp-content/uploads/2021/04/pla--1200x675.jpg"
];
