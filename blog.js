let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("nama-project").value;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);

  // Check if the start date is after the end date
  if (startDate >= endDate) {
    alert("Start date must be before end date.");
    return;
  }

  let duration = monthDiff(startDate, endDate);
  let description = document.getElementById("desc-project").value;
  let checkbox1 = document.getElementById("option-1").checked;
  let checkbox2 = document.getElementById("option-2").checked;
  let checkbox3 = document.getElementById("option-3").checked;
  let checkbox4 = document.getElementById("option-4").checked;
  let imageInput = document.getElementById("input-blog-image").files[0]; // Get the first selected image

  // Check if an image is selected
  let image = "";
  if (imageInput) {
    image = URL.createObjectURL(imageInput);
  }

  let blog = {
    project,
    startDate,
    endDate,
    duration,
    description,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
                    <div class="thumb">
                        <img src="${dataBlog[index].image}" alt="Thumbnail">
                    </div>
                    <h4>
                        <a href="blog-detail.html">${dataBlog[index].project}</a>
                    </h4>
                    <p class="duration">durasi : ${dataBlog[index].duration} bulan</p>
                    <p>${dataBlog[index].description}</p>
                    <div class="icon-technology">
                        ${(dataBlog[index].checkbox1 ? `<i class="fa-brands fa-node-js show"></i>` : `<i class="fa-brands fa-node-js"></i>`)}
                        ${(dataBlog[index].checkbox2 ? `<i class="fa-brands fa-react show"></i>` : `<i class="fa-brands fa-react"></i>`)}
                        ${(dataBlog[index].checkbox3 ? `<img src="./image/Nextjs-logo.svg.png" class="next show" alt="Next Js">` : `<img src="./image/Nextjs-logo.svg.png" class="next" alt="Next Js">`)}
                        ${(dataBlog[index].checkbox4 ? `<img src="./image/Typescript_logo_2020.svg.png" class="show" alt="TypeScript">` : `<img src="./image/Typescript_logo_2020.svg.png" alt="TypeScript">`)}
                    </div>
                    <div class="btn-group">
                        <button class="btn-blog">edit</button>
                        <button class="btn-blog">delete</button>
                    </div>
                </div>`;
  }
}


function monthDiff(startDate, endDate) {
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;
}
