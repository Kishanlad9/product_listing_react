import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 200, boxShadow: 2 }}>
      <div className="flex flex-col justify-around h-full ">
        <CardMedia
          component="img"
          alt={product.title}
          height="100"
          image={product.images?.[0] || product.thumbnail}
          className="hover:scale-95 duration-200 "
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.price}
            <span> $</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <AddShoppingCartIcon />
          </Button>
          <Button variant="outlined">View</Button>
        </CardActions>
      </div>
    </Card>
  );
}
