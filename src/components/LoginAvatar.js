import Avatar from "@material-ui/core/Avatar";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  teal: {
    display: "flex",
    margin: theme.spacing(2),
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
  },
}));

export default function LoginAvatar() {
  const classes = useStyles();

  return (
    <Avatar className={classes.teal}>
      <LockOpenOutlinedIcon />
    </Avatar>
  );
}
