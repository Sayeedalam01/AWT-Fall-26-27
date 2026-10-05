function getProcessOrderData() {

  return new Promise((resolve, reject) => {

    console.log("Promise Started.");

    setTimeout(() => {

      const success = true;

      if (success) {

        resolve({
          orderid: 42017,
          customer: "Sajid",
          item: "Chicken Burger",
          quantity: 2,
          total: 500
        });

      } else {

        reject("Failed to process the order");
      }

    }, 3000);

  });
}

getProcessOrderData()

  .then((ProcessOrder) => {

    console.log("Order data received.");
    console.log("Order ID:", ProcessOrder.orderid);
    console.log("Customer Name:", ProcessOrder.customer);
    console.log("item", ProcessOrder.item);
    console.log("Quantity:", ProcessOrder.quantity);
    console.log("Total amount", ProcessOrder.total);
  })

  .catch((error) => {

    console.log(error);

  })

  .finally(()=>{
    console.log("Order Processing completed.");
  });
