import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const OrderConfirmation = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const proceedPayment = () => {
    navigate("/");
  };

  return (
    <div className="container center">
      <Typography variant="h3">Order Confirmation</Typography>
      <span>
        <Typography variant="h5">Thank you for your order!</Typography>
      </span>
      <span style={{ paddingTop: "30px" }}>
        <Typography>Here is your summary order:</Typography>
      </span>

      <div>
        {cart.map((item) => (
          <div key={item.id} style={{ paddingBottom: "20px" }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <div className="row">
                  <Typography>{item.description}</Typography>
                  <Typography>Quantity : {item.quantity}</Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>Total Amount: ${totalAmount.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={proceedPayment}>
            Proceed Payment
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderConfirmation;
