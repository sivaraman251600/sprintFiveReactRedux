import { BUY_CAPPUCCINO_COFFEE } from "./CoffeeTypes";
import { BUY_COLD_COFFEE } from "./CoffeeTypes";

export const CoffeeCappuccinoAction = (countCappu) => {
  return {
      type:BUY_CAPPUCCINO_COFFEE,
      payload:{count:countCappu}
  }
}

export const CoffeeColdAction = (countCold) => {
    return{
        type:BUY_COLD_COFFEE,
        payload:{count:countCold}
    }
}
