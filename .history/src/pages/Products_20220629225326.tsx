import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "../Item/Item";
import Cart from "../Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
//Styles
import { ProductsWrapper, StyledCartButton } from "../App.styles";
import { CgShoppingCart } from "react-icons/cg";

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

//functions
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const Products = (): JSX.Element => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );


  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, items) => ack + items.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  //render
  return (
    <>
      <ProductsWrapper>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            cartClearance={handleCartClearance}
          />
        </Drawer>
        <div className="ProductContentDiv">
        <div className="ItemsContainer">
          {data?.map((item) => (
            <div className="ItemsGrid">
              <Item item={item} handleAddToCart={handleAddToCart} />
            </div>
          ))}
          </div>
        </div>
        <div className="CartWrapper">
        <StyledCartButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <CgShoppingCart />
          </Badge>
          </StyledCartButton>
          </div>
          </div>
      </ProductsWrapper>
    </>
  );
};

export default Products;
