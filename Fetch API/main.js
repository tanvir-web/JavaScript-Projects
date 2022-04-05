"use strict";

const contentBox = document.querySelector(".content");

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    const photoList = data;
    console.log(photoList);
    for (const items of photoList) {
      const item = `
        <div class="col">
          <div class="">
            <figure>
              <img src="" alt="" class="img-fluid">
            </figure>
            <div class="text-center">
              <h2 class="fs-6">${items.author}</h2>
              <a href="${items.url}" class="btn btn-info">Download</a>
            </div>
          </div>
        </div>
      `;
      contentBox.insertAdjacentHTML("afterbegin", item);
      // console.log(items.author);
    }
  });

// Method 2

const content = document.querySelector(".main-content");
const currentDate = document.querySelector(".current-date");

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
async function fetchApi() {
  const response = await fetch(url);
  const data = await response.json();

  const prices = data.bpi;
  const date = data.time.updated;

  currentDate.insertAdjacentHTML("afterbegin", date);

  for (const [currency, moreData] of Object.entries(prices)) {
    var fixAmount = parseFloat(moreData.rate_float).toFixed(2);
    const displayPrice = `
        <div class="col">
          <div class="border shadow-sm rounded text-center p-3">
            <h2 class="fs-5 fw-bold">${currency} Price</h2>
            <p class="mb-0">
              <span class="fs-1 fw-bolder">${fixAmount}</span>
              <span class="fs-5">${moreData.symbol}</span>
            </p>
          </div>
        </div>
      `;
    content.insertAdjacentHTML("afterbegin", displayPrice);
  }
}

fetchApi();
