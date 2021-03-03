import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  //CardActions,
  //Grid,
  IconButton,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { ShoppingCartOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 280,
  },
  media: {
    //height: "80",
    //paddingTop: "6.25%", // 16:9
    maxWidth: 345,
    maxHeight: 345,
  },
  productName: {
    fontWeight: 600,
    margin: "0.25em 0",
    //fontSize: "1.1em",
  },
  productPrice: {
    fontWeight: 600,
    fontSize: "1.1em",
    color: "#b71c1c",
  },
  cart: {
    color: "rgba(0, 0, 0, 0.54)",
    alignSelf: "flex-end",
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props._id}>
      <CardHeader
        action={
          <IconButton aria-label="favorite">
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        }
        title={props.brand}
        subheader="I lager"
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.url}
          producttitle={props.title}
          component="img"
        />
      </CardActionArea>
      <CardContent>
        <div className={classes.contentBox}>
          {/*
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        */}
          <div>
            <Typography variant="body1" className={classes.productName}>
              {props.title}
            </Typography>
            <Typography variant="body1" className={classes.productPrice}>
              {props.price},- kr
            </Typography>
          </div>

          <ShoppingCartOutlined fontSize="large" className={classes.cart} />
        </div>
      </CardContent>
    </Card>
  );
}
