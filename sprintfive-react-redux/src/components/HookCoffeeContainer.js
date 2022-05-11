import React, { useState } from 'react'
import { CoffeeCappuccinoAction } from '../redux/coffee/CoffeeAction'
import { CoffeeColdAction } from '../redux/coffee/CoffeeAction'
import { useSelector, useDispatch } from 'react-redux'

const HookCoffeeContainer = () => {
  const noOfCappus = useSelector(state=>state.noOfCappu)
  const noOfColds = useSelector(state=>state.noOfCold)
  const dispatch = useDispatch()
   const [cappuCount, setCappuCount] = useState()
   const [coldCount, setColdCount] = useState()

  return (
    <div>
        <h2>No Of cappuccino - {noOfCappus}</h2>
        <input type={'number'} placeholder='0' onChange={(e)=>setCappuCount(e.target.value)} />
        <button onClick={()=>dispatch(CoffeeCappuccinoAction(cappuCount))}>Buy Cappu</button>
        <h2>No Of cold coffee - {noOfColds}</h2>
        <input type={'number'} placeholder='0' onChange={(e)=>setColdCount(e.target.value)} />
        <button onClick={()=>dispatch(CoffeeColdAction(coldCount))}>Buy Cold Coffee</button>
    </div>
  )
}


//const mapStateToProps = (state) => {
//  return{
//    noOfCappu:state.noOfCappu,
//    noOfCold:state.noOfCold
//  }
//}

//const mapDispatchToProps = (dispatch) => {
//  return{
//    buyCappu : ()=> dispatch(CoffeeCappuccinoAction()),
//    buyCold : ()=> dispatch(CoffeeColdAction())
//  }
//}

export default HookCoffeeContainer