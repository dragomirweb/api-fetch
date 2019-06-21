import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

//this will make sure the document is loaded
const getProducts = url => {
  //fetch will get data
  fetch(url)
    // after fetching the data from the url we parse into jjson
    .then(res => res.json())
    // then we loop for each item in the array
    .then(res =>
      res.forEach(el => {
        const $placeToInsertProducts = $("#products");
        //productCard is the dynamic template to be inserted
        let productCard = `<div class="card">
    <img
      class="card-img-top"
      src="${el.image}"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <span>${el.price}</span>
      ${el.purchasable ? `<button>Buy Now</button>` : ""}
    </div>
  </div>`;
        $placeToInsertProducts.append(productCard);
      })
    );
};

$(document).ready(function() {
  // we get the function with the api url
  getProducts("src/api/products.json");
});
