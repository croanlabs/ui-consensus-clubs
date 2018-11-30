import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component {
  constructor() {
    super();
    this.onToken = this.onToken.bind(this);
  }

  onToken = async token => {
    console.log('onToken', token);
    // const fromEuroToCent = amount => amount * 100;
    // const CURRENCY = 'EUR';

    await axios({
      method: 'post',
      baseURL: process.env.REACT_APP_API_URL,
      url: process.env.REACT_APP_PAYMENT_SERVER_URL,
      withCredentials: true,
      data: {
        stripeToken: token.id
        // currency: CURRENCY,
        // amount: fromEuroToCent(amount)
      }
    })
      .then(res => console.log(res))
      .catch(res => console.log(res));
  };

  render() {
    return (
      <div>
        <StripeCheckout
          // name={'The Road to learn React'}
          // description={description}
          // amount={fromEuroToCent(amount)}
          token={this.onToken}
          // currency={CURRENCY}
          stripeKey="pk_test_YJg9uH5mQBd0wzG34bBUZq6Z"
        />
      </div>
    );
  }
}

export default Checkout;
