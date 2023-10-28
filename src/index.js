//DEXI 
//DEV ECS
import fetch from 'node-fetch';


//get token data
export const getBinanceDefault = () => { 
    const api_website_pro = 'https://www.dexi.tools/binance/prices';

    return fetch(api_website_pro)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
}

getBinanceDefault();