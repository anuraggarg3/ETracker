import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import Chart from 'chart.js/auto';
// Chart.register(ArcElement)


const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  const cardStyle = {
    width: 400, // Specify the width
    height: 450, // Specify the height
    margin: 'auto', // Center the card horizontally
  };
  const emptyChartData = {
    labels: ["No Balance!"],
    datasets: [{ data: ['1'], backgroundColor: ["grey"],radius:"65%" ,hoverOffset:20, borderColor: 'black'}],
  };
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense} style={cardStyle}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        {console.log(title,"my",total,chartData)}
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData.labels.length ? chartData : emptyChartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
