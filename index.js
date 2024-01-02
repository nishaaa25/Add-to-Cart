let addToCartBtn = document.querySelectorAll(".add");
let items = document.querySelectorAll(".item");
let cart = document.querySelector(".cart-items");
let container = document.querySelector(".container");
let span = document.querySelector(".total-price");
let totalAmount = 0;

for (let i = 0; i < addToCartBtn.length; i++) {
  // Event Listener to all Button Clicks
  addToCartBtn[i].addEventListener("click", function () {
    let imgSrc = items[i].firstElementChild.getAttribute("src");

    let productName = items[i].lastElementChild.firstElementChild.innerHTML;

    let productPrice = items[i].lastElementChild.childNodes[3].innerText;
    // New Element on click
    let newProduct = document.createElement("div");
    newProduct.classList.add("product");
    
    // InnerHtml of the new element
    newProduct.innerHTML = `
        <img src= ${'"' + imgSrc + '"'} />
          <div class="text">
            <h4>${productName}</h4>
            <p class="price">${productPrice}</p>
          </div>
          <span class="dlt"><i class="fas fa-trash delete"></i></span>
          `;

    // New Product to cart
    cart.appendChild(newProduct);

    // TotalAmount
    totalAmount += parseInt(productPrice.slice(3));
    span.innerHTML = "Rs." + totalAmount;

    // Deleting Product and calculation of total amount
    let dltProduct = newProduct.querySelector(".dlt");
    dltProduct.addEventListener("click", function () {
      let price = parseInt(
        this.parentElement.querySelector(".price").innerText.slice(3)
      );
      totalAmount -= price;
      span.innerHTML = "Rs." + totalAmount;
      this.parentElement.remove();
    });
  });
}
// For Cart Screen
let productCartBtn = document.querySelector(".cart");
productCartBtn.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
  container.style.display = "none";
});
// Cart Screen Closing Btn
let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  container.style.display = "block";
});
