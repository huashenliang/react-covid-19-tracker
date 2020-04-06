import React, { useState } from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    if(!confirmed && !deaths && !recovered){
      return 'Loading...'
    }

    const cards = [
      {
        title: "Infected",
        className: cx(styles.card, styles.infected),
        end: confirmed.value,
        date: new Date(lastUpdate).toDateString(),
        description: 'Number of active cases of Covid-19'
      },
      {
        title: "Recovered",
        className: cx(styles.card, styles.recovered),
        end: recovered.value,
        date: new Date(lastUpdate).toDateString(),
        description: 'Number of recoveries from Covid-19'
      },
      {
        title: "Deaths",
        className: cx(styles.card, styles.deaths),
        end: deaths.value,
        date: new Date(lastUpdate).toDateString(),
        description: 'Number of deaths cased by Covid-19'
      },
    ]

    return(
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            {cards.map((item, i) => (
                <Grid item component={Card} xs={12} md={3} className={item.className} key={i}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>{item.title}</Typography>

                    <Typography variant="h5" >
                      <CountUp start={0} end={item.end} duration={2} separator=","/>
                    </Typography>

                    <Typography color="textSecondary" gutterBottom>{item.date}</Typography>
                    <Typography variant="body2" > {item.description}</Typography>
                  </CardContent>
                </Grid>
            )) 
            }
          </Grid>
      </div>
    );
 
}
 
export default Cards;