import { Divider, Grid, Typography } from "@material-ui/core";

const Product = () => {
  return (
    <Grid container justify="center" spacing={3}>
      {/*---------------------Header with the logo and register/login/logout ------------------------*/}
      <Grid item xs={12} container justify="space-between">
        <Grid item>
          <Typography variant="h3">Lampor</Typography>
        </Grid>
        <Grid item>Register</Grid>
        <Grid item>
          <Divider variant="fullWidth" />
        </Grid>
      </Grid>
      {/*----------------------------------categories----------------------------------------------- */}
      <Grid item container></Grid>
      {/*-----------------------------------product------------------------------------------------ */}
      <Grid item container></Grid>
    </Grid>
  );
};

export default Product;
