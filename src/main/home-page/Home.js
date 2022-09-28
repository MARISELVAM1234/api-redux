import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux-page/slice';


const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state)
  console.log(state ,"state");
  const stro = state.cart.value
  console.log(stro , "val");
 
  useEffect (() =>{
     convert()
  },[])
 


const convert =  async() =>{
  
  const res = await axios.get(stro)
  console.log(res)
 const listCart = res.data.data;

dispatch(addCart(listCart))
console.log(listCart , "res");

}


// To click more details
const clickMore = (el) =>{
  console.log(el);

}





const moreEle = state.cart.cartItem
console.log(moreEle);
// const pic = setFav.additionalImages[0]
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Home Product</h1>
    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-evenly" }}>
      {moreEle.map((ele , index) =>(
        <div key={index}  style={{border:"2px solid black" , marginTop:"40px" , textAlign:"center"}}>
          <h1>{ele.brandName}</h1>
          <img style={{height:"200px" , width:"200px"}} src={ele.image} alt=""></img>
          <h3>Price : 78</h3>
          <button  onClick={() => clickMore(ele)} style={{marginBottom:"20px"}}>View More </button>
          </div>
      ))}
    </div>
    
  </div>
  )}

export default Home

