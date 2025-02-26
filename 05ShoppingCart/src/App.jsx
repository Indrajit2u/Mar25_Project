import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cart, setCart] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cart1, setCart1] = useState(0)
  const [cart2, setCart2] = useState(0)
  const [cart3, setCart3] = useState(0)
  const [cart4, setCart4] = useState(0)

  // product price
  const productPrices = {
    cart1: 500,
    cart2: 1000,
    cart3: 1500,
    cart4: 2000,
  };

  useEffect(() => {
    setCart(cart1 + cart2 + cart3 + cart4)
  }, [cart1, cart2, cart3, cart4])

  useEffect(() => {
    setCartTotal(
      cart1 * productPrices.cart1 +
      cart2 * productPrices.cart2 +
      cart3 * productPrices.cart3 +
      cart4 * productPrices.cart4
    )
  }, [cart1, cart2, cart3, cart4])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-200'>
        <h1 className='text-black text-center my-3'>SHOPPING CART</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <img src="../public/cart.svg" alt="Cart Icon" width="50" height="60" />
          <input
            type='text'
            value={`${cart} Quantity - ₹${cartTotal}`}
            className='outline-none w-full py-1 px-3 bg-gray text-center'
            readOnly
          />
          <button className='outline-none bg-blue-500 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0'>Buy Now</button>
        </div>
        <button
          onClick={() => (
            setCart1(0),
            setCart2(0),
            setCart3(0),
            setCart4(0)
          )}
          className='outline-none bg-red-500 hover:bg-red-700 text-white px-3 py-0.5 shrink-0'>Clear Cart</button>
        <br />


        {[{ name: "Product 1", state: cart1, setState: setCart1, price: productPrices.cart1},
        { name: "Product 2", state: cart2, setState: setCart2, price: productPrices.cart2 },
        { name: "Product 3", state: cart3, setState: setCart3, price: productPrices.cart3},
        { name: "Product 4", state: cart4, setState: setCart4 , price: productPrices.cart4}
        ].map((item, index) => (
          <div key={index} className="flex text-sm gap-x-2 items-center py-2">
            <span>{item.name} (₹{item.price})</span>
            <button
              onClick={() => item.setState(Math.max(item.state - 1, 0))}
              className="flex text-white items-center justify-center bg-red-500 hover:bg-red-700 rounded-s-lg p-3 h-8"
            >
              -
            </button>
            <p>{item.state}</p>
            <button
              onClick={() => item.setState(item.state + 1)}
              className="flex text-white items-center justify-center bg-blue-500 hover:bg-blue-700 rounded-e-lg p-3 h-8"
            >
              +
            </button>
          </div>
        ))}

      </div>

    </>
  )
}

export default App
