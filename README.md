# Binance Price Pair List

![Dexi](https://i.ibb.co/ZBk2v0b/dexi.png)


With the "Binance Price" module, you will have the capability to easily access an extensive list of all available trading pairs, along with their respective prices in US dollars (USD). This provides you with a comprehensive view of real-time asset quotes, making it convenient for tracking multiple cryptocurrencies and their relative values against the US dollar. Such information is invaluable for shaping your investment strategies and financial decision-making. This module offers you a powerful tool to stay informed and up-to-date on cryptocurrency markets on Binance.


## Installation
Install using npm:
```sh
npm install binancelistprices --save
```

## Usage
Require library
```javascript
import { getBinanceDefault } from 'binancelistprices'
```
```javascript
(async () => {
    const result = await getBinanceDefault();
    console.log(result);
})();
```

[DEXI](https://www.dexi.tools)