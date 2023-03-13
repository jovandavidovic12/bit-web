const url = "https://rickandmortyapi.com/api/character";
let cardHolder = $(".card-holder");

const getRickAndMorty = (url, isFirstLoad) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        let card = `<a href="info.html" target="self" id=${element.id} class="cards text-decoration-none col-xl-3 col-lg-4 flex-row col-sm-12 flex-sm-column justify-content-sm-center mx-4 mt-5 p-lg-0 p-0 align-items-center" >
            <div class="holder">
            <img class="card-img-top " src="${element.image}"
            <p>${element.name}</p>
            <button class="button-dark">Like</button>
            </div>
            </a> `;

        console.log(element.name);
        cardHolder.append(card);
      });
      console.log(data);
      if (isFirstLoad) {
        // load pages
      }
    });
};

$(document).ready(() => {
  getRickAndMorty(url, true);
});

$(document).on("click", "li", () => {
  const pageNumber = $(this).text();
  const pageUrl = `${url}?page=${pageNumber}`;
  getRickAndMorty(pageUrl, false);
});

// $('.page1').on('click', function(){
//     cardHolder.html("");
//     getRickAndMorty("https://rickandmortyapi.com/api/character?page=2")
// })
// $('.page2').on('click', function(){
//     cardHolder.html("");
//     getRickAndMorty("https://rickandmortyapi.com/api/character?page=3")
// })
// $('.page3').on('click', function(){
//     cardHolder.html("");
//     getRickAndMorty("https://rickandmortyapi.com/api/character?page=4")
// })

// $(document).on("click", "a", function () {
//     let id = $(this).attr("id");
//     localStorage.setItem("id", id);
// location.replace()
//   });
