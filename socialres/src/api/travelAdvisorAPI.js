
import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {

    // request

    const { data: { data } } = await axios.get(URL, {

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
      },
      headers: {
        'X-RapidAPI-Key': 'a2c3e1272amshcd39056d3212f66p177a88jsn730ad1b7047f',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;

  } catch (error) {
    console.log(error);
  }
};