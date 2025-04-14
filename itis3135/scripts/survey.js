function addCourseField() {
    var div = document.createElement('div');

    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'courses';
    input.placeholder = 'Enter course name';

    var delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.textContent = 'Delete';
    delButton.onclick = function () {
      this.parentNode.remove();
    };

    div.appendChild(input);
    div.appendChild(delButton);

    document.getElementById('coursesContainer').appendChild(div);
}
  
function handleSubmit(event) {
    event.preventDefault(); 

    var form = document.getElementById('byoForm');

    if (!form.checkValidity()) {
      alert("Please fill in all required fields.");
      return false;
    }

    var name = document.getElementById('name').value;
    var mascot = document.getElementById('mascot').value;
    var imageInput = document.getElementById('image');
    var imageCaption = document.getElementById('imageCaption').value;
    var personalBg = document.getElementById('personalBg').value;
    var professionalBg = document.getElementById('professionalBg').value;
    var academicBg = document.getElementById('academicBg').value;
    var webDevBg = document.getElementById('webDevBg').value;
    var platform = document.getElementById('platform').value;
    var funny = document.getElementById('funny').value;
    var anythingElse = document.getElementById('anythingElse').value;

    var courses = [];
    var courseInputs = document.querySelectorAll('input[name="courses"]');
    courseInputs.forEach(function (input) {
      if (input.value.trim() !== "") {
        courses.push(input.value.trim());
      }
    });

    if (imageInput.files.length === 0) {
      alert("Please upload an image.");
      return false;
    }
    var file = imageInput.files[0];
    var allowedTypes = ['image/png', 'image/jpeg'];
    if (allowedTypes.indexOf(file.type) === -1) {
      alert("Please upload an image in PNG or JPG format.");
      return false;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      var resultHTML = "";

      resultHTML += "<h1>Introduction</h1>";
      resultHTML += "<h2>" + name + " || " + mascot + "</h2>";

      resultHTML += "<figure>";
      resultHTML += "<img src='" + e.target.result + "' alt='Uploaded Image' style='width:316px; height:412px;'>";
      resultHTML += "<figcaption>" + imageCaption + "</figcaption>";
      resultHTML += "</figure>";

      resultHTML += "<ul>";
      resultHTML += "<li><b>Personal background:</b> " + personalBg + "</li>";
      resultHTML += "<li><b>Professional background:</b> " + professionalBg + "</li>";
      resultHTML += "<li><b>Academic background:</b> " + academicBg + "</li>";
      resultHTML += "<li><b>Background in Web Development:</b> " + webDevBg + "</li>";
      resultHTML += "<li><b>Primary Computer Platform:</b> " + platform + "</li>";
      
      if (courses.length > 0) {
        resultHTML += "<li><b>Courses Currently Taking:</b>";
        resultHTML += "<ul>";
        courses.forEach(function (course) {
          resultHTML += "<li>" + course + "</li>";
        });
        resultHTML += "</ul></li>";
      }
      
      resultHTML += "<li><b>Funny thing?</b> " + funny + "</li>";
      resultHTML += "<li><b>Anything else?</b> " + anythingElse + "</li>";
      resultHTML += "<li><b>Consent:</b> I understand that this page is not password protected and I will not put anything here that I don’t want publicly available.</li>";
      resultHTML += "</ul>";

      resultHTML += "<p><a href='#' onclick='resetForm()'>Reset Form</a></p>";

      document.getElementById('resultContainer').innerHTML = resultHTML;
      document.getElementById('formContainer').style.display = "none";
      document.getElementById('resultContainer').style.display = "block";
    };

    reader.readAsDataURL(file);
    return false;
}
  
function resetForm() {
    document.getElementById('byoForm').reset();
    document.getElementById('coursesContainer').innerHTML = "";
    document.getElementById('resultContainer').style.display = "none";
    document.getElementById('formContainer').style.display = "block";
}

let slides = [];

window.showSlide = function(index) {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
};

document.addEventListener("DOMContentLoaded", () => {
  slides = Array.from(document.querySelectorAll(".slide"));

  slides.forEach(slide => slide.style.display = "none");

  if (slides.length > 0) {
    slides[0].style.display = "block";
  }
});




