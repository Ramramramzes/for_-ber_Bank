interface IChange{
  result:string,
  conversion_rates:{
    USD: number,
    RUB: number
  }
}

export const getMoneyUSD = async () => {
    try {
      const data = await fetch('https://v6.exchangerate-api.com/v6/52b538a1126abfb9ac52e37e/latest/USD');
      const res: IChange = await data.json();
      return res.conversion_rates;
    } catch (err) {
      console.log(err);
    }
  }

  export const getMoneyRUB = async () => {
    try {
      const data = await fetch('https://v6.exchangerate-api.com/v6/52b538a1126abfb9ac52e37e/latest/RUB');
      const res: IChange = await data.json();
      return res.conversion_rates;
    } catch (err) {
      console.log(err);
    }
  }