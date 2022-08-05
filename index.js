var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false
})

// detecting events in the down button

document.querySelector(".two").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // england
    var img_path = "Odi/odi_eng.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".three").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // india
    var img_path = "Odi/ind_odi.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".four").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // Pakistan
    var img_path = "Odi/pak_odi.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".five").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    //australia
    var img_path = "Odi/odi_aus.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".six").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // south africa
    var img_path = "Odi/odi_sa.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".seven").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // Bangladesh
    var img_path = "Odi/ban_odi.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".eight").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // Srilanka
    var img_path = "Odi/odi_sl.png";
    document.querySelector(".image").setAttribute("src", img_path);
});
document.querySelector(".one").addEventListener("click", function (){
    var country = this.getAttribute("aria-label");
    // New Zealand
    var img_path = "Odi/odi_nz.png";
    document.querySelector(".image").setAttribute("src", img_path);
});