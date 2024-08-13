import React from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function PaymentDialog(props) {

  return (
    <React.Fragment>
      <Dialog
        open ={props.open}
        onClose = {props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {"Congratulations! Your have successfully made your payment."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Thank you for your payment. Your product will be shipped in 3 - 5 days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" onClick={props.onClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
