import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.length
      function getTotal(total, current) {
        return total + current.price * current.quantity
      }
      const totalAmount = cartList.reduce(getTotal, 0)

      return (
        <div className="summary-card">
          <div>
            <h1 className="order-heading">
              Order Total:{' '}
              <span className="total-amount">Rs {totalAmount}/-</span>
            </h1>
            <p className="number-of-cart-para">{cartCount} Items in cart</p>
          </div>
          <button className="check-out-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
