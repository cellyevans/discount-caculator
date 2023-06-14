function calculateDiscount(event) {
    event.preventDefault();

    // Get the input value
    let purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);

    // Apply the discount based on the purchase amount
    let discount = 0;
    if (purchaseAmount >= 50 && purchaseAmount <= 100) {
      discount = 0.1;
    } else if (purchaseAmount > 100 && purchaseAmount <= 150) {
      discount = 0.15;
    } else if (purchaseAmount > 150) {
      discount = 0.2;
    }

    // Calculate the discounted price and the discount amount
    let discountAmount = purchaseAmount * discount;
    let discountedPrice = purchaseAmount - discountAmount;

    // Display the results
    let output = document.getElementById("output");
    output.innerHTML = "Total Purchase Amount: $" + purchaseAmount.toFixed(2) + "<br>" +
                       "Discount Applied: " + (discount * 100) + "%<br>" +
                       "Discount Amount: $" + discountAmount.toFixed(2) + "<br>" +
                       "Final Price: $" + discountedPrice.toFixed(2);
  }