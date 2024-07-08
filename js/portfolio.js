var portfolio = [
    {
        path: "assets/images/image_portfolio_1.png",
        alt: "image_portfolio_1.png",
    },
    {
        path: "assets/images/image_portfolio_2.png",
        alt: "image_portfolio_2.png",
    },
    {
        path: "assets/images/image_portfolio_3.png",
        alt: "image_portfolio_3.png",
    },
    {
        path: "assets/images/image_portfolio_4.png",
        alt: "image_portfolio_4.png",
    },
    {
        path: "assets/images/image_portfolio_5.png",
        alt: "image_portfolio_5.png",
    },
    {
        path: "assets/images/image_portfolio_6.png",
        alt: "image_portfolio_6.png",
    },
    
];
const getPortfolio = (elPortfolio) => {
    portfolio.forEach(function(item){
        elPortfolio.insertAdjacentHTML("beforeend",
        `<div class="image-container">
            <img src="${item.path}" alt="${item.alt}">
        </div>`);
    });
}
$(document).ready(function(){
    var elPortfolio = document.getElementById("container-portfolio");
    getPortfolio(elPortfolio)
});