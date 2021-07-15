import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, ButtonGroup, Card, Col, Container, Navbar, Row, ToggleButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// API endpoints for https://www.coindesk.com/coindesk-api
const API_ENDPOINTS = {
  currentPrice: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  historicalPrice: 'https://api.coindesk.com/v1/bpi/historical/close.json',
};

// main application
function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            ReactJS Challenge
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="mt-3">

          <Col md={6}>
            <BitcoinPriceCard defaultCurrency='USD' />
          </Col>

          <Col md={6}>
            <HistoricalPriceCard />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

const BitcoinPriceCard = props => {

  // constants
  const CURRENCY_USD = 'USD';
  const CURRENCY_GPB = 'GBP';

  // state
  const [currencyCode, setCurrencyCode] = useState([CURRENCY_USD, CURRENCY_GPB].includes(props.defaultCurrency) ? props.defaultCurrency : CURRENCY_USD);
  const [priceBTC, setPriceBTC] = useState(Object.fromEntries([CURRENCY_USD, CURRENCY_GPB].map(x => [x, 0])));
  const [isLoading, setIsLoading] = useState(false);

  // currency formatters
  const formatters = {
    [CURRENCY_USD]: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: CURRENCY_USD,
    }),
    [CURRENCY_GPB]: new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: CURRENCY_GPB,
    }),
  };

  // load current price of Bitcoin from external API
  const loadCurrentPriceBTC = () => {
    setIsLoading(true);
    axios.get(API_ENDPOINTS.currentPrice)
      .then(response => {
        setPriceBTC({
          [CURRENCY_USD]: response.data.bpi.USD.rate_float,
          [CURRENCY_GPB]: response.data.bpi.GBP.rate_float,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // get current price of Bitcoin on initial load
  useEffect(loadCurrentPriceBTC, []);

  return (
    <Card bg="light" text='dark' className="mb-2">

      <Card.Header>
        Price of Bitcoin
        <ButtonGroup toggle size="sm" style={{ float: 'right' }}>
          {[CURRENCY_USD, CURRENCY_GPB].map(x => 
            <ToggleButton
              key={x}
              type="radio"
              variant="secondary"
              name="currency-selector"
              value={x}
              checked={currencyCode === x}
              onChange={e => setCurrencyCode(e.target.value)}
            >
              {x}
            </ToggleButton>  
          )}
        </ButtonGroup>
      </Card.Header>

      <Card.Body>
        <Card.Title>Current Price</Card.Title>

        <Card.Text>
          {formatters[currencyCode].format(priceBTC[currencyCode])}
        </Card.Text>

        <Button
          onClick={loadCurrentPriceBTC}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Refresh"}
        </Button>

      </Card.Body>
    </Card>
  );
}

const HistoricalPriceCard = props => {
  return (
    <Card bg="light" text='dark' className="mb-2">

      <Card.Header>
        Historical Price of Bitcoin
      </Card.Header>

      <Card.Body>
        To do...
      </Card.Body>
    </Card>
  );
}

export default App;
