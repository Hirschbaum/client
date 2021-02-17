import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  Grid,
  Link,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import ProductCard from "../components/Card";
//import { categoryFilter } from "../functions/functions";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container>
          <Grid item container spacing={2} justify="center" alignItems="center">
            {children}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//a11y === accessibility
const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    //backgroundColor: theme.palette.background.paper,
  },
  categories: {
    backgroundColor: "#fff",
    boxShadow: "0 0 0 0",
    borderBottom: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    marginBottom: "2em",
  },
  headline: {
    margin: "0.3em 0 0 0.5em",
    fontFamily: "Caveat, cursive",
  },
  label: {
    textTransform: "none",
    color: "#616161",
    "&:active": {
      color: "#212121",
      fontWeight: 600,
    },
    "&:hover": {
      color: "#212121",
      backgroundColor: "e0e0e0",
    },
    "&:focus": {
      color: "#212121",
      fontWeight: 600,
    },
  },
  link: {
    margin: "2em 1em",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState(["empty"]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let mounted = true;
    axios
      .get("/api/products")
      .then((res) => {
        console.log("PRODUCTS", res.data);
        setProducts(res.data.products);
        if (mounted) {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Error while getting products", err);
      });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Container className={classes.root}>
          <Grid container justify="center" spacing={3}>
            {/*---------------------Header with the logo and register/login/logout ------------------------*/}
            <Grid
              item
              xs={12}
              container
              justify="space-between"
              key="headline-container"
            >
              <Grid item key="headline-with-title">
                <Typography variant="h3" className={classes.headline}>
                  Lampor
                </Typography>
              </Grid>
              <Grid item key="headline-with-buttons">
                <Link href="/register" className={classes.link}>
                  Register
                </Link>
                <Link href="/login" className={classes.link}>
                  Login
                </Link>
                <Link className={classes.link}>Logout</Link>
              </Grid>
            </Grid>
            {/*----------------------------------categories----------------------------------------------- */}
            <Grid item container key="categories-scroll">
              <AppBar position="static" className={classes.categories}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { backgroundColor: "#212121" } }}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab
                    label="Alla"
                    key="01"
                    {...a11yProps(0)}
                    className={classes.label}
                  />
                  <Tab
                    label="Bordslampor"
                    key="02"
                    {...a11yProps(1)}
                    className={classes.label}
                  />
                  <Tab
                    label="Golvlampor"
                    key="03"
                    {...a11yProps(2)}
                    className={classes.label}
                  />
                  <Tab
                    label="Taklampor"
                    key="04"
                    {...a11yProps(3)}
                    className={classes.label}
                  />
                  <Tab
                    label="Vägglampor"
                    key="005"
                    {...a11yProps(4)}
                    className={classes.label}
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>

          {/* -----------------------------------products------------------------------------------------ */}

          <TabPanel value={value} index={0} key="001">
            {products.map((product) => {
              return (
                <Grid item key={product.title}>
                  <ProductCard
                    key={product._id}
                    id={product.id}
                    brand={product.brand}
                    title={product.title}
                    url={product.url}
                    producttitle={product.title}
                    price={product.price}
                  />
                </Grid>
              );
            })}
          </TabPanel>

          {/* -----------------------------------bordslampa------------------------------------------------ */}

          <TabPanel value={value} index={1} key="002">
            {products
              .filter((product) => {
                if (product.category === "bordslampa") {
                  return (
                    <Grid item key={product.title}>
                      <ProductCard
                        key={product._id}
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        url={product.url}
                        producttitle={product.title}
                        price={product.price}
                      />
                    </Grid>
                  );
                } else {
                  return null;
                }
              })
              .map((product) => {
                return (
                  <Grid item key={product.title}>
                    <ProductCard
                      key={product._id}
                      id={product.id}
                      brand={product.brand}
                      title={product.title}
                      url={product.url}
                      producttitle={product.title}
                      price={product.price}
                    />
                  </Grid>
                );
              })}
          </TabPanel>

          {/* -----------------------------------golvlampa------------------------------------------------ */}

          <TabPanel value={value} index={2} key="003">
            {products
              .filter((product) => {
                if (product.category === "golvlampa") {
                  return (
                    <Grid item key={product.title}>
                      <ProductCard
                        key={product._id}
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        url={product.url}
                        producttitle={product.title}
                        price={product.price}
                      />
                    </Grid>
                  );
                } else {
                  return null;
                }
              })
              .map((product) => {
                return (
                  <Grid item key={product.title}>
                    <ProductCard
                      key={product._id}
                      id={product.id}
                      brand={product.brand}
                      title={product.title}
                      url={product.url}
                      producttitle={product.title}
                      price={product.price}
                    />
                  </Grid>
                );
              })}
          </TabPanel>

          {/* -----------------------------------taklampa------------------------------------------------ */}

          <TabPanel value={value} index={3} key="004">
            {products
              .filter((product) => {
                if (product.category === "taklampa") {
                  return (
                    <Grid item key={product.title}>
                      <ProductCard
                        key={product._id}
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        url={product.url}
                        producttitle={product.title}
                        price={product.price}
                      />
                    </Grid>
                  );
                } else {
                  return null;
                }
              })
              .map((product) => {
                return (
                  <Grid item key={product.title}>
                    <ProductCard
                      key={product._id}
                      id={product.id}
                      brand={product.brand}
                      title={product.title}
                      url={product.url}
                      producttitle={product.title}
                      price={product.price}
                    />
                  </Grid>
                );
              })}
          </TabPanel>

          {/* -----------------------------------vägglampa------------------------------------------------ */}

          <TabPanel value={value} index={4} key="005">
            {products
              .filter((product) => {
                if (product.category === "vägglampa") {
                  return (
                    <Grid item key={product.title}>
                      <ProductCard
                        key={product._id}
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        url={product.url}
                        producttitle={product.title}
                        price={product.price}
                      />
                    </Grid>
                  );
                } else {
                  return null;
                }
              })
              .map((product) => {
                return (
                  <Grid item key={product.title}>
                    <ProductCard
                      key={product._id}
                      id={product.id}
                      brand={product.brand}
                      title={product.title}
                      url={product.url}
                      producttitle={product.title}
                      price={product.price}
                    />
                  </Grid>
                );
              })}
          </TabPanel>
        </Container>
      )}
    </div>
  );
}
