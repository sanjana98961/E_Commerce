import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { Link, useNavigate} from "react-router-dom"
import StripeCheckout from "react-stripe-checkout";
import { removeProduct } from "../Redux/CartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = ({item}) => {
  const [stripeToken, setStripeToken] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cart = useSelector((state) => state.cart);
  console.log({cart})

  const dispatch = useDispatch()
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  console.log({totalItems});

  const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log({stripeToken})

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.totalPrice, history]);

  const handleQuantity = (type)=>{
    if(type === "Decrease"){
      // quantity > 1 && setQuantity(quantity - 1)
      setQuantity(quantity> 1 ? quantity-1 : 1)
    }else(
      setQuantity(quantity + 1)
    )
    console.log({quantity})
   }

   const handleCartRemove = (id) => {
    dispatch(removeProduct(id));
     // Dispatch remove action with the item's id
};

 
  return (
    <div className="bg-white">
      <Navbar />
      <Announcement />
      <div className="p-2 md:p-4">
        <h1 className="font-bold text-center text-3xl">YOUR BAG</h1>
        <div className="flex items-center justify-between p-2">
          <div className="hidden md:flex">
            <span className="font-bold text-xl mx-2">Shopping Cart Items</span>
          </div>
          <Link to="/productlist">
            <button className="p-2 font-semibold text-blue-600 cursor-pointer bg-transparent border-none">
              CONTINUE SHOPPING
            </button>
          </Link>
          {/* <div className="hidden md:flex">
            <span className="underline cursor-pointer mx-2">Shopping Bag({totalItems})</span>
            <span className="underline cursor-pointer mx-2">Your Wishlist (0)</span>
          </div> */}
          {/* <button className="p-2 font-semibold cursor-pointer bg-black text-white border-none">
            CHECKOUT NOW
          </button> */}
        </div>
        <div className="flex justify-between md:flex-row flex-col w-full"> {/* Ensures full width */}
          <div className="flex-3 md:max-w-[70%] w-full"> {/* Adjusts the product section width */}
            {cart?.map((product) => { 
              console.log({product})
              console.log({_id: product._id})
              return(
              <div className="flex justify-between p-2 border-b" key={product._id}>
                <div className="flex-2 flex">
                  <img src={product.img} alt={product.title} className="w-52" />
                  <div className="flex flex-col justify-around p-4">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: product.color }} />
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                    <button key={product.id} onClick={() => dispatch(removeProduct(product.id))} className="py-2 border rounded-lg bg-red-500">Remove</button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-5">
                    <Remove style={{cursor:"pointer"}} onClick={()=>handleQuantity("Decrease")} />
                    <span className="text-2xl mx-2">{product.quantity}</span>
                    <Add style={{cursor:"pointer"}} onClick={()=>handleQuantity("Increase")} />
                  </div>
                  <div className="text-3xl font-light">${product.price * product.quantity}</div>
                </div>
              </div>
            )})}
            <hr className="bg-gray-300 h-px border-none" />
          </div>
          <div className="flex-1 border border-gray-300 rounded-lg p-5 h-[50vh] max-w-[50]"> {/* Keep order summary narrower */}
            <h1 className="font-light text-2xl">ORDER SUMMARY</h1>
            <div className="my-7 flex justify-between">
              <span>Subtotal</span>
              <span>${totalValue}</span>
            </div>
            <div className="my-7 flex justify-between">
              <span>Estimated Shipping</span>
              <span>$5.90</span>
            </div>
            <div className="my-7 flex justify-between">
              <span>Shipping Discount</span>
              <span>-$5.90</span>
            </div>
            <div className="my-7 flex justify-between font-medium text-xl">
              <span>Total</span>
              <span>${totalValue}</span>
            </div>
            <StripeCheckout
              name="ECommerce"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${totalValue}`}
              amount={totalValue * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="w-full p-2 bg-black text-white font-semibold">
                CHECKOUT NOW
              </button>
            </StripeCheckout>
          </div>
        </div>  
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
