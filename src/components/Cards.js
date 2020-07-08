import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '5% 2%',
    alignItems: 'center',
    alignText : 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards(props) {
  const classes = useStyles();
  if(props.data.publicHealthUnit){
    return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {props.data.publicHealthUnit.Outcome.Recovered}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Recovered
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {props.data.publicHealthUnit.Outcome.NotResolved}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Not Recovered
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {props.data.publicHealthUnit.Outcome.Fatal}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Fatal
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
  }
  return "Currently Loading..."
}