import {
  Paper,
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { PostItem } from "../Components/PostItem/PostItem";
import { usePostsByIdSelector } from "../Redux/Hooks/Posts";

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

export const PostDetails = () => {
  window.scrollTo(0, 0);

  const classes = useStyles();

  const { id } = useParams<{ id: string }>();

  const post = usePostsByIdSelector(parseInt(id, 10));

  return (
    <>
      {/* Put a back button */}
      {post && (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container direction="row" alignItems="center">
              {`Posted by ${post.userDetails.name}`}
            </Grid>
            <br />
            <Grid container direction="column" wrap="nowrap" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">{post.title}</Typography>
              </Grid>
              <Grid item xs>
                <Typography>{post.body}</Typography>
              </Grid>
              <Grid item xs>
                <hr />
                {post.comments?.map((comment: any) => (
                  <PostItem
                    body={comment.body}
                    initials="C"
                    name={comment.name}
                    isComment
                  />
                ))}
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </>
  );
};

export default PostDetails;
