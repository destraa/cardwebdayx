// let dataBlog = [];

// function addBlog(event) {
//   event.preventDefault();

// let title = document.getElementById("input-blog-title").value;
// let content = document.getElementById("input-content-blog").value;
// let image = document.getElementById("input-blog-image").files;

//   // icon
// const iconNodeJs = `<i class="fa-brands fa-node-js fa-xl"></i>`;
// const iconReactJs = `<i class="fa-brands fa-react fa-xl"></i>`;
// const iconJavaScript = `<i class="fa-brands fa-js fa-xl"></i>`;
// const iconVueJs = `<i class="fa-brands fa-vuejs fa-xl"></i>`;

//   //check kondisi

// let checkNodeJS = document.getElementById("check-nodejs").checked
//     ? iconNodeJs
//     : "";
// let checkReactJS = document.getElementById("check-reactjs").checked
//     ? iconReactJs
//     : "";
// let checkJavaScript = document.getElementById("check-javascript").checked
//     ? iconJavaScript
//     : "";
// let checkVueJs = document.getElementById("check-vuejs").checked
//     ? iconVueJs
//     : "";

//   // durasi

// let startDate = document.getElementById("input-start-date").value;
// let endDate = document.getElementById("input-end-date").value;

// let startDateValue = new Date(startDate);
// let endDateValue = new Date(endDate);

// let rentangWaktu = endDateValue.getTime() - startDateValue.getTime();
// let rentangHari = rentangWaktu / (1000 * 3600 * 24);
// let rentangMinggu = Math.floor(rentangHari / 7);
// let rentangBulan = Math.floor(rentangHari / 30);
// let rentangProject = "";

// if (rentangHari <= 6) {
//     rentangProject = rentangHari + " One Day ";
// } else if (rentangMinggu <= 3) {
//     rentangProject = rentangMinggu + " One Week ";
// } else if (rentangBulan >= 1) {
//     rentangProject = rentangBulan + " One Month ";
// }

//   image = URL.createObjectURL(image[0]);
//   // console.log(image);

// let blog = {
//     title,
//     content,
//     image,
//     checkNodeJS,
//     checkJavaScript,
//     checkReactJS,
//     checkVueJs,
//     rentangProject,
//   };
//   // alert
// if (title == "" || content == "" || image == "") {
//     return Swal.fire({
//       icon: "warning",
//       title: "Beboop!...",
//       text: "Harap lengkapi form!",
//       confirmButtonColor: "#930e2d",
//       iconColor: "#930e2d",
//     });
// }

//   dataBlog.push(blog);
//   console.log(dataBlog);

//   renderBlog();

// }



// let timePost = time;

// let distance = timeNow - timepPost;
// console.log(distance)

// let milisecond = 1000;
// let secondInHours = 3600;
// let hoursInDays = 24;

// let distanceDay = Math.floor(
//     distance / (milisecond * secondInHours * hoursInDays)
// );

// if (distanceDay > 0) {
//     return `${distanceDay} day ago`;   
// } else if (distanceHours > 0) {
//     return `{distanceHours} hour ago`;
// } else if (distanceMinutes > 0) {
//     return `${distanceMinutes} minute ago`;
// } else {
//     return `${distanceSecond} second ago`;
// }

    


// // ===================================================================================================================================================================================================================================================================================================================

// function renderBlog() {
//   document.getElementById("form-project-card-add").innerHTML = "";

// for (let index = 0; index < dataBlog.length; index++) {
//     console.log(dataBlog[index]);

//     document.getElementById("form-project-card-add").innerHTML += `
//     <div class="form-project-card">
//                 <div class="form-project-image">
//                     <img id="image-add" class="image-add" src="${dataBlog[index].image}"/>
//                 </div>
//                 <div class="title-add-project">
//                     <h3><a href="blog-detail.html">${dataBlog[index].title}</a></h3>
//                 </div>
//                 <div class="duration-project">
//                     <p>Duration : ${dataBlog[index].rentangProject}</p>
//                 </div>
//                 <div class="description-project">
//                     <p>${dataBlog[index].content}</p>
//                 </div>
//                 <div class="technologies-project">
//                     <div class="technologies-project-card">
//                         ${dataBlog[index].checkNodeJS}
//                         ${dataBlog[index].checkJavaScript}
//                         ${dataBlog[index].checkReactJS}
//                         ${dataBlog[index].checkVueJs}
//                     </div>
//                 </div>
//                 <div class="button-add-project">
//                     <button type="button" class="edit-button" id="edit-button">Edit</button>
//                     <button type="button" class="delete-button" id="delete-button">Delete</button>
//                 </div>
//             </div>`;
//   }
// }

// function dummyCard() {
//   document.getElementById("form-project-card-add").innerHTML = "";

//   // card 1
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >Lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-node-js fa-xl"></i>
//                 <i class="fa-brands fa-js fa-xl"></i>
//                 <i class="fa-brands fa-react fa-xl"></i>
//                 <i class="fa-brands fa-vuejs fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }

//   // card 2
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >Lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-node-js fa-xl"></i>
//                 <i class="fa-brands fa-js fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }

//   // card 3
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-node-js fa-xl"></i>
//                 <i class="fa-brands fa-react fa-xl"></i>
//                 <i class="fa-brands fa-vuejs fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }

//   // card 4
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >Lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-js fa-xl"></i>
//                 <i class="fa-brands fa-vuejs fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }

//   // card 5
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >Lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-react fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }

//   // card 6
//   for (let i = 0; i < 1; i++) {
//     document.getElementById("form-project-card-add").innerHTML += `
//         <div class="form-project-card">
//         <div class="form-project-image">
//             <img id="image-add" class="image-add" src="./image-repository/martadinataclass.jpg"/>
//         </div>
//         <div class="title-add-project">
//         <h3>
//           <a href="blog-detail.html" 
//             >Lorem Ipsum
//           </a>
//         </h3>
//       </div>
//         <div class="duration-project">
//             <p>Duration : 3 Month</p>
//         </div>
//         <div class="description-project">
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Praesentium dolores ullam minima reiciendis adipisci quisquam</p>
//         </div>
//         <div class="technologies-project">
//             <div class="technologies-project-card">
//                 <i class="fa-brands fa-js fa-xl"></i>
//                 <i class="fa-brands fa-react fa-xl"></i>
//                 <i class="fa-brands fa-vuejs fa-xl"></i>
//             </div>
//         </div>
//         <div class="button-add-project">
//             <button type="button" class="edit-button" id="edit-button">Edit</button>
//             <button type="button" class="delete-button" id="delete-button">Delete</button>
//         </div>
//          </div>
//         `;
//   }
// }

// dummyCard();
Let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("nama-project").value;
  let startDate = new Date (document.getElementById("start-date").value);
  let endDate = new Date(document.getElementByID("end-date").value);
  let duration = monthDiff(startDate, endDate);
  let description = document.getElementByID("desc-project").value;
  let checbox1 = document.getElementById("option-1").checked;
  let checbox2 = document.getElementById("option-2").checked;
  let checbox3 = document.getElementById("option-3").checked;
  let checbox4 = document.getElementById("option-4").checked;
  let image = document.getElementById("input-blog-image").files;

  image =URL.createObjectURL(iamge[0]);

  let blog = {
    project,
    startDate,
    endDate,
    duration,
    description,
    checbox1,
    checbox2,
    checbox3,
    checbox4,
    image,
  }

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();


}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("container-content").innerHTML += `
            <div class="form-project-image">
                        <div class="image-add">
                              <img src="${dataBlog[index].image}" alt="Thumbnail">
                        </div>
                <h4>
                    <a href="blog-detail.html">${dataBlog[index].project}</a>
                </h4>
                <p class="duration-project">durasi : ${dataBlog[index].duration} bulan</p>
                <p>${dataBlog[index].description}</p>
                <div class="icon-technology">
                    ${(dataBlog[index].checkbox1 ? `<i class="fa-brands fa-node-js show"></i>` : `<i class="fa-brands fa-node-js"></i>`)}
                    ${(dataBlog[index].checkbox2 ? `<i class="fa-brands fa-react show"></i>` : `<i class="fa-brands fa-react"></i>`)}
                    ${(dataBlog[index].checkbox3 ? `i class="fa-brands fa-js fa-xl"></i>` : `<i class="fa-brands fa-js fa-xl"></i>`)}
                    ${(dataBlog[index].checkbox4 ? `i class="fa-brands fa-vuejs fa-xl"></i>` : `<i class="fa-brands fa-vuejs fa-xl"></i>`)}
                </div>
                <div class="button-add-project">
                    <button class="edit-button">edit</button>
                    <button class="delete-button">delete</button>
                </div>
            </div>`;
  }
}

function monthDiff(startDate, endDate) {
  let months;
  months = (endDate.getFulllYear() - stratDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;

}