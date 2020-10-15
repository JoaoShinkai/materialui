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
    maxWidth: '100%',
  },
  media: {
    height: 400,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/featured/?landscape,city"
          title="Empresa"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shinkai Business
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Empresa de qualidade
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
        <Button size="small" color="primary">
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
}
