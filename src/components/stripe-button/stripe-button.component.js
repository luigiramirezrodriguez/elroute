import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ImwCACyJVdBDu92mGTcQ9dNnETipGXXReiFZgDyNlpbvRGe59NYnti3N1KKwg8xe6Om5uWMaNNpf4eRU8qaOViE00KPVycXCp';

    const onToken =  token => {
       console.log(token);
       alert('Payment Success!');
    }

    return(
        <StripCheckout 
            label = 'Pay Now'
            name = 'EL Route'
            billsingAddress
            shippingAddress
            image  ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckoutButton;