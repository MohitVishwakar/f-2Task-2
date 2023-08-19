
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  let id = 1;
  let html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + (id++) + "</td>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.GPA + " </td>";
    html += "<td>" + element.Age + "</td>";
    html += "<td>" + element.Degree + "</td>";

     html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2">Edite</button></td>';

    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}

window.onload = showData;

function AddData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var GPA = document.getElementById("GPA").value;
  var Age = document.getElementById("Age").value;
  var Degree = document.getElementById("Degree").value;

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  
  peopleList.push({
    name: name,
    email: email,
    GPA: GPA,
    Age: Age,
    Degree: Degree,
  });

  localStorage.setItem("peopleList", JSON.stringify(peopleList));

  showData();
  
  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("GPA").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Degree").value = "";
}

function deleteData(index){
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.splice(index,1);
  localStorage.setItem("peopleList",JSON.stringify
  (peopleList)
  );
  showData();
}
function updateData(index){
  document.getElementById("Submit").style.display="none";
  document.getElementById("Update").style.display="block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("email").value = peopleList[index].email;
  document.getElementById("GPA").value = peopleList[index].GPA;
  document.getElementById("Age").value = peopleList[index].Age;
  document.getElementById("Degree").value = peopleList[index].Degree;
  
  document.querySelector("#Update").onclick =function(){
    peopleList[index].name =document.getElementById("name").value;
    peopleList[index].email =document.getElementById("email").value;
    peopleList[index].GPA =document.getElementById("GPA").value;
    peopleList[index].Age =document.getElementById("Age").value;
    peopleList[index].Degree =document.getElementById("Degree").value;

    localStorage.setItem("peopleList",JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("GPA").value="";
    document.getElementById("Age").value="";
    document.getElementById("Degree").value="";

    document.getElementById("Submit").style.display="block";
    document.getElementById("Update").style.display="none";
  }
}
