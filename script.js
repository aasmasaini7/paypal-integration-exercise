// setting up paypal button
paypal.Buttons({
  createOrder: function(data, actions) {
    // Set up the transaction and its amount
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '10.00' 
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  }
}).render('#paypal-button-container'); 
