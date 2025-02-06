import axios from "axios"


const options = {
    params: {
        maxResults: '50',
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
      }
  };

export  const fetchFromApi = async (url: string)=>{
    const {data} = await axios.get(`${process.env.RAPIDAPI_HOST}/${url}`, options)
    return data
  } 