<script lang="ts">
  import { getMoneyUSD, getMoneyRUB } from "./hooks";

  let fVal = '';
  let sVal = '';

  const inputFHandler = async (event: Event) => {
    fVal = (event.target as HTMLInputElement).value;
    const money = await getMoneyUSD();
    if (money) {
      sVal = (money.RUB * Number(fVal)).toString();
    }
  };

  const inputSHandler = async (event: Event) => {
    sVal = (event.target as HTMLInputElement).value;
    const money = await getMoneyRUB();
    if (money) {
      fVal = (money.USD * Number(sVal)).toString();
    }
  };
</script>

<div>
  <div>
    <p>USD</p>
    <input type="number" on:input={inputFHandler} value={fVal}>
  </div>
  <div>
    <p>RUB</p>
    <input type="number" on:input={inputSHandler} value={sVal}>
  </div>
</div>
