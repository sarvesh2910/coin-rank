export const getAllCoins = (currency='USD',limit=30,offset=0) =>{
    return(
        fetch(`https://api.coinranking.com/v1/public/coins?base=${currency}&limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(data => data.data)
            .catch(e=>{
                console.log(e);
            })
    )
}
