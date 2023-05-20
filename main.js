let images = document.querySelectorAll(".img")
console.log(images);
// let images1 = document.querySelectorAll(".img");


let imgId = 1;

images.forEach((img) => {
    img.addEventListener("click", () => {
        imgId = img.dataset.id;
        images.forEach((img1) => {
            img1.classList.remove("active")
        })
        img.classList.add("active")
        moveImg()
    })
})

let minbtn = document.querySelector("#minus");
let qtytxt = document.querySelector("#qty");
let plusbtn = document.querySelector("#plus");

minbtn.addEventListener("click", () => {
    let qty = parseInt(qtytxt.value)
    if (qty > 0) {
        qty--;
        qtytxt.value= qty
    }
});
plusbtn.addEventListener("click", () => {
    let qty = parseInt(qtytxt.value)
    if (qty >=0 &&qty<6) {
        qty++;
        qtytxt.value = qty
    }
});


function moveImg() {
    const imgWidth = document.querySelector(".main-img img:first-child").clientWidth;
    let width = (imgId - 1) * imgWidth;
    document.querySelector(".main-img").style.transform = `translatex(${-width}px)`;
}

let like = document.querySelector(".hii")
console.log(like);


// like.forEach((li) => {
//     li.addEventListener("click", () => {
//         li.classList.add("oii")
//     })
//     like.target.classList.remove("oii")
//     all()
// });


like.addEventListener("click", () => {
    like.classList.toggle("oii")
})

