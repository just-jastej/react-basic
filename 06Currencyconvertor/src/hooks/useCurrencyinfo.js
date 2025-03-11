import { useEffect, useState} from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [currencyInfo, setCurrencyInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}/eur.json`) 
        // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
        // https://api.exchangerate-api.com/v4/latest/USD
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
        console.log(data);
    }, [currency])
    console.log(data);

    return data 
}

export default useCurrencyInfo;