export const getAllCoins = (currency='USD',limit=30,offset=0,sort='coinranking') =>{
    return(
        fetch(`https://api.coinranking.com/v1/public/coins?base=${currency}&limit=${limit}&offset=${offset}&sort=${sort}`)
            .then(res => res.json())
            .then(data => data.data)
            .catch(e=>{
                console.log(e);
            })
    )
};
