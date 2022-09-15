import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <Box
      m={2}
      pt={3}
      sx={{
        borderBottom: 1,
        borderRight: 1,
        borderColor: "primary.main",
        borderRadius: "16px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <h3>{item.description}</h3>
        </Grid>
        <Grid item xs={8}>
          <AmplifyS3Image imgKey={item.contentType} />
        </Grid>

        <Grid item xs={2}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
        </Grid>
        <Grid item xs={1}>
          {item.amount}
        </Grid>
        <Grid item xs={2}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}>
          <p>Price: ${item.price}</p>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Box>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Box>
  );
};

export default Cart;
