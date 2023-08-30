import { menuArray } from "./data.js";

function renderMenuItems() {
  const renderContainer = document.querySelector(".render-food");
  let menuHtml = "";
  

  menuArray.forEach((menuItem) => {
    menuHtml += `
    <div class="menu-container">
            <div class="menu-item">
            <span>${menuItem.emoji}</span>
                <div>
                <h2>${menuItem.name}</h2>
                <p class="ingredients">Ingredients: ${menuItem.ingredients.join(", ")}</p>
                <p>Price: $${menuItem.price}</p>
                </div>
                
                <div class="quantity-controls">
                    <div class="quantitys-buttons">
                        <button class="increase">+</button>
                        <span class="quantity">0</span>
                        <button class="decrease">-</button>
                    </div>
                </div>
            </div>
    </div>
        `;   
  });

 
  renderContainer.innerHTML = menuHtml;

  // Add event listeners for quantity controls
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");

  // const quantityElements = document.querySelectorAll(".quantity");

  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => decreaseQuantity(index));
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => increaseQuantity(index));
  });


}

let quantities = new Array(menuArray.length).fill(0);
let orderListContainer = document.querySelector(".order-list ul");
let paymentCompleted = false;

function decreaseQuantity(index) {
  if (!paymentCompleted && quantities[index] > 0) {
    quantities[index]--;
    updateQuantityDisplay(index);
    updateOrderList();
  }
}

function increaseQuantity(index) {
    if (!paymentCompleted) {
        quantities[index]++;
        updateQuantityDisplay(index);
        updateOrderList();
      }
    }
function updateQuantityDisplay(index) {
  const quantityElement = document.querySelectorAll(".quantity")[index];
  quantityElement.textContent = quantities[index];
}

function updateOrderList() {
  orderListContainer.innerHTML = ""; // Clear the current order list
  let totalPrice = 0; // Initialize total price
  let hasItemsInOrder = false;

  quantities.forEach((quantity, index) => {
    if (quantity > 0) {
      hasItemsInOrder = true;
      const menuItem = menuArray[index];

      const listItem = document.createElement("li");
 
      const itemTotalPrice = quantity * menuItem.price; // Calculate total price for this item
      listItem.textContent = `${quantity} x ${menuItem.name} - Total: $${itemTotalPrice.toFixed(2)}`;
      orderListContainer.appendChild(listItem);

      totalPrice += quantity * menuItem.price; // Calculate total price
    }
  });

  if (hasItemsInOrder) {
    const orderHeader = document.createElement("h3");
    orderHeader.textContent = "Your order";
    orderListContainer.insertBefore(orderHeader, orderListContainer.firstChild);
    const totalItem = document.createElement("p");
    totalItem.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    orderListContainer.appendChild(totalItem);
    generateButton();
  } else {
    removeButtonandList();
  }
}

let hasCompleteOrder = false

function generateButton() {
  if (!document.querySelector(".custom-button")) {
    let button = document.createElement("button");
    button.innerHTML = "Complete Order";
    button.classList.add("custom-button");
    document.body.appendChild(button);

    button.addEventListener("click", () => {
        hasCompleteOrder = true; // Set the flag to true
        paymentCompleted = true;
        openPopUp();
      });

  }
}


function openPopUp() {
    if (hasCompleteOrder) {
      const popup = document.createElement("div");
      popup.classList.add("popup");
  
      const popupContent = `
        <div class="popup-content">
          <h5>Enter card details</h5>
          <input type="text" id="fname" name="fname" placeholder="Enter your name">
          <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number">
          <input type="text" id="cvv" name="cvv" placeholder="Enter CVV">
          <button class="close-button">Pay</button>
        </div>
      `;
  
      popup.innerHTML = popupContent;
      document.body.appendChild(popup);
  
      const closeButton = popup.querySelector(".close-button");
      closeButton.addEventListener("click", function(){
        closePopUp()
        showThankYouMessage();
      });
    }
  }

function closePopUp() {
    const popup = document.querySelector(".popup");
    if (popup) {
    popup.parentNode.removeChild(popup);
    // Additional logic if needed after closing the popup
    }
}

function removeButtonandList() {
    let buttonToRemove = document.querySelector(".custom-button");
    let listItemsToRemove = document.querySelectorAll("li");
  
    if (buttonToRemove) {
      buttonToRemove.parentNode.removeChild(buttonToRemove);
    }
  
    listItemsToRemove.forEach((listItem) => {
      listItem.parentNode.removeChild(listItem);
    });
  
    // setQuantityToZero(index);
  }



function showThankYouMessage() {
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your payment!";
    document.body.appendChild(thankYouMessage);

        removeButtonandList()
        // resetThankYouMessage();
   
}

renderMenuItems();







