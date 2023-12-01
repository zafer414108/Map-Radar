export const options = {
    method: "GET",
    url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
    params: {
      bl_lat: "34.668307",
      bl_lng: "24.083032",
      tr_lat: "41.634098",
      tr_lng: "44.237148",
      limit: "300",
    },
    headers: {
      "X-RapidAPI-Key": "180576f26bmsh190c9b87b615e21p1cf65bjsnc562e37dae1e",
      "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
    },
  };
  
  export const detailOptions = {
    headers: {
      "X-RapidAPI-Key": "180576f26bmsh190c9b87b615e21p1cf65bjsnc562e37dae1e",
      "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
    },
  };