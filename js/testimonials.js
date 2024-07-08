var testimonials = [
    {
        image: "assets/images/Rectangle.png",
        title: "Lorem Ipsum doilor",
        text: `Vivamus pharetra, metus id tempor consequat,
        dolor tortor volutpat leo, et vulputate orci ante
        sed tellus. Donec tellus felis, pulvinar eget`,
        stars: 5,
    },
    {
        image: "assets/images/Rectangle.png",
        title: "Lorem Ipsum doilor",
        text: `Vivamus pharetra, metus id tempor consequat,
        dolor tortor volutpat leo, et vulputate orci ante
        sed tellus. Donec tellus felis, pulvinar eget`,
        stars: 5,
    },
    {
        image: "assets/images/Rectangle.png",
        title: "Lorem Ipsum doilor",
        text: `Vivamus pharetra, metus id tempor consequat,
        dolor tortor volutpat leo, et vulputate orci ante
        sed tellus. Donec tellus felis, pulvinar eget`,
        stars: 5,
    },
];
const getTestimonials = (elTestimonials) => {
    testimonials.forEach(function(testimonial){
        let elTestimonial = document.createElement("div");
        elTestimonial.className = "testimonial";
        let elStars = document.createElement("span");
        elStars.className = "stars";
        for(let i=0; i<testimonial.stars; i++){
            let elImage = document.createElement("img");
            elImage.src = "assets/images/star.svg";
            elImage.alt = "star"
            elStars.appendChild(elImage);
        }
        elTestimonial.appendChild(elStars);
        elTestimonial.insertAdjacentHTML("beforeend",
            `<div class="testimonial-content">
                <img src="${testimonial.image}" alt="Profile Image" class="testimonial-picture">
                <div class="testimonial-text-container">
                    <h3 class="testimonial-title">${testimonial.title}</h3>
                    <p class="section-text testimonial-text">${testimonial.text}</p>
                </div>
            </div>`);
        elTestimonials.appendChild(elTestimonial);
        });
}
$(document).ready(function(){
    if($(window).width()<=480){
        testimonials = [testimonials[0]];
    }
    var elTestimonials = document.getElementById("container-testimonials");
    getTestimonials(elTestimonials)
});