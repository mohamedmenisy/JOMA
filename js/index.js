let artImg=[{src:'cat-01.jpg',name:'Game One'},{src:'cat-02.jpg',name:'Game Two'},{src:'cat-03.jpg',name:'Game Three'},{src:'cat-04.jpg',name:'Game Four'},{src:'cat-05.jpg',name:'Game Five'},{src:'cat-06.jpg',name:'Game Six'},{src:'cat-07.jpg',name:'Game Seven'},{src:'cat-08.jpg',name:'Game Eight'}]
let box ='';
for (let i = 0; i < artImg.length; i++) {
box+=`
<div class="col-lg-3 col-md-6  ">
<div class="box-art overflow-hidden shadow rounded-3">
  <div class="ar-img">
    <img src="imges/${artImg[i].src}" class="w-100 " alt="">
  </div>
  <div class="content p-3">
    <h3 class="fw-bold">${artImg[i].name}</h3>
    <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
  </div>
  
  <div class="info p-3">
    <a href="" class="fw-bold maincolor">Read More</a>
    <i class="fa-solid fa-arrow-right-long maincolor fs-6"></i>
  </div>
</div>
</div>
`
}
document.getElementById('artical').innerHTML=box



// ---------------------------------


let gallImg=[{src:'gallery-01.png'},{src:'gallery-02.png'},{src:'gallery-03.jpg'},{src:'gallery-04.png'},{src:'gallery-05.jpg'},{src:'gallery-06.png'}]
let box2='';
for (let i = 0; i < gallImg.length; i++) {
    box2+=`
              <div class="col-lg-4 col-md-6 ">
                <div class="main-gal">
                <div class="gallery-img shadow">
                <img src="imges/${gallImg[i].src}" class="w-100" alt="">
                 </div>
                </div>
              </div>

`
}
document.getElementById('gall').innerHTML=box2



let teamarr=[{src:'team-01.jpg'},{src:'team-02.jpg'},{src:'team-03.jpg'},{src:'team-04.jpg'},{src:'team-05.png'},{src:'team-06.png'},{src:'team-07.jpg'},{src:'team-08.jpg'}]
let box3='';
for (let i = 0; i < teamarr.length; i++) {
    box3+=`
    <div class="col-lg-3 col-md-6">
    <div class="team-item">
      <div class="data-team ">
        <img src="imges/${teamarr[i].src}"  alt="">
        <div class="social-icons">
          <a href=""><i class="fa-brands fa-facebook fs-5"></i></a>
          <a href=""><i class="fa-brands fa-twitter fs-5"></i></a>
          <a href=""><i class="fa-brands fa-linkedin fs-5"></i></a>
          <a href=""><i class="fa-brands fa-youtube fs-5"></i></a>
        </div>
      </div>
     <div class="team-info">
      <h4>Name</h4>
      <p>Simple Short Description</p>
     </div>
    </div>
  </div>

`
}
document.getElementById('team-row').innerHTML=box3