import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    value:  " http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products/seller?sellerId=6108fb29f58bf55437a79e44" ,
    // "https://jsonplaceholder.typicode.com/posts/",
    
    cartItem: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export const { addCart } = slice.actions;
export default slice.reducer ;

// detail
// "http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products?_id=612f1412fab74c9e512d2823&sellerId=6108fb29f58bf55437a79e44"