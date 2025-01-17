import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  console.log(props);
  const classes = useStyles();
  const headdata=['Anmol','Girish'];
  const data=['hello','hii'];
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headdata[props.id]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data[props.id]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
