import {
  Avatar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    small: {
      fontSize: "1rem",
    },
  })
);

interface ICommentItem {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

interface IPostItem {
  title?: string;
  body: string;
  initials: string;
  name: string;
  comments?: Array<ICommentItem>;
  onClick?: () => void;
  isComment?: boolean;
}

const PostItem = ({
  title,
  body,
  initials,
  name,
  comments,
  onClick,
  isComment = false,
}: IPostItem) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row" alignItems="center">
          <Avatar
            style={{
              marginRight: 10,
            }}
            className={classes.small}
          >
            {initials}
          </Avatar>
          {" " + name}
        </Grid>
        <Grid container direction="column" wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{body}</Typography>
          </Grid>
        </Grid>
        {!isComment && (
          <Grid container direction="row" alignItems="center">
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ModeCommentIcon />}
              onClick={onClick}
            >
              {`${comments?.length} comments`}
            </Button>
          </Grid>
        )}
      </Paper>
    </div>
  );
};

export default PostItem;
