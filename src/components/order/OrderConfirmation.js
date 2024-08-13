import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PaymentDialog from "../paymentDialog/PaymentDialog";

const OrderConfirmation = () => {
  const { cart } = useContext(CartContext);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [open, setOpen] = useState(false);

  const proceedPayment = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="wrapper">
      <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
        <span>
          <Typography variant="h3">Order Confirmation</Typography>
        </span>
        <span>
          <Typography variant="h5">Thank you for your order!</Typography>
        </span>
        <span style={{ paddingTop: "30px" }}>
          <Typography>Here is your summary order:</Typography>
        </span>
      </div>

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
      <div>
        <PaymentDialog open={open} onClose={() => setOpen(false)}/>
      </div>
    </div>
  );
};

export default OrderConfirmation;
