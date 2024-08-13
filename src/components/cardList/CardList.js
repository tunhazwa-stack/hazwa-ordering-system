import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const CardList = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Product Name
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Price
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Quantity
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total price : RM
          </Typography>
        </CardContent>
      </Card>
    );
};

export default CardList;
