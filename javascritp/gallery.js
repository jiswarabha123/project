

document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.modal(document.getEelementById('gallery-modal'));
        myModal.show();
    }
})