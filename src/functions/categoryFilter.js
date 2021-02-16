import { Grid } from "@material-ui/core";
import ProductCard from "../components/Card";

export function categoryFilter(products, label) {
  if (label === "Bordslampor") {
    products
      .filter((product) => {
        if (product.category === "Bordslampor") {
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
      });
  }
  if (label === "Golvlampor") {
    products.filter((product) => {
      if (product.category === "Golvlampor") {
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
    });
    //.map((product) => {})
  }
}
