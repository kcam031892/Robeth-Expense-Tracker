import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardBody } from 'components/Card';
const Wrapper = styled.div`
  width: 100%;
  ${Card} {
    height: 100%;
  }
`;

const dataset = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const Chart = () => {
  return (
    <Wrapper>
      <Card>
        <CardBody>
          <h1>Legend</h1>
          <Doughnut data={dataset} />
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default Chart;
