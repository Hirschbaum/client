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

//import { grey } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={props._id}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <FavoriteBorderIcon />
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
        {/*
        <Typography variant="body2" color="textSecondary" component="p">
          Night Owl bordslampa från Fritz Hansen är designad av Nicholai Wiig
          Hansen utifrån en önskan att skapa en nattlampa med nordisk känsla som
          sprider ett mysigt och varmt sken.
        </Typography>
        */}
        <Typography variant="body1" className={classes.productName}>
          {props.title}
        </Typography>
        <Typography variant="body1" className={classes.productPrice}>
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
