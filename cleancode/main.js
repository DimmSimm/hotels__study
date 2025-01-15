function getPurchaseAmount(purchase) {
    let price = 0;
    purchase.forEach(i => {
      price += i;
    });
    return price;
  }
  
  let prices = [10000, 20000, 30000];
  console.log(getPurchaseAmount(prices));