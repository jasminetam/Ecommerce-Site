import CartItem from "../CartItem/CartItem";
//Styles
import { Wrapper, StyledButton } from "./Cart.styles";
//Types
import { CartItemType } from "../pages/Products";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    cartClearance: () => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart, cartClearance }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            <StyledButton>Pay</StyledButton>
            <div className="clearCart">
                {cartItems.length >= 1 && (
                    <button
                        className="clearCartButton"
                        onClick={cartClearance}>
                        Clear Cart</button>
                    )}
                </div>
        </Wrapper>
    )
}

export default Cart