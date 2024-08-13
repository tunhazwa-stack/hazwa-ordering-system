import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    navigate("/order-confirmation");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div id="wrapper">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p style={{ color: "red" }}>
          Your cart cant be empty before proceed to place order.
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ paddingBottom: "20px" }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <div className="row">
                    <Typography>
                      ${item.price.toFixed(2)} x
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                      />
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button variant="contained" onClick={handleContinueShopping}>
            Continue Shopping
          </Button>
        </Grid>
        <Grid item xs={4}>
          {cart.length === 0 ? (
            <Button variant="contained" disabled>
              Place Order
            </Button>
          ) : (
            <Button variant="contained" onClick={placeOrder}>
              Place Order
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
