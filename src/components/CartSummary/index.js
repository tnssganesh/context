import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const upList = cartList.map(i => i.quantity * i.price)
      const cost = upList.reduce((acc, curr) => acc + curr, 0)

      return (
        <div>
          <h1>
            Order Total:<span>RS {cost}/-</span>
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
