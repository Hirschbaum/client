import { Grid } from "@material-ui/core";
import ProductCard from "../components/Card";

export function categoryFilter(data, categoryType) {
  data
    .filter((product) => {
      if (product.category === categoryType) {
        console.log("filter in progress");
        console.log("FILTER", product);
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
      console.log("map in progress");
      console.log("MAP", product);
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
