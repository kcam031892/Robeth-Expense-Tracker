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

const Chart = ({dataset}) => {
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
