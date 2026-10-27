// Initial data + LocalStorage la iruntha edukkum
let assignments = JSON.parse(localStorage.getItem("myAssignments")) || [
  {subject: "Web Technology", assignment: "HTML Forms", deadline: "2026-09-30", status: "Completed"},
  {subject: "JavaScript", assignment: "DOM Manipulation", deadline: "2026-10-03", status: "In Progress"},
  {subject: "PHP", assignment: "Form Validation", deadline: "2026-10-05", status: "Pending"}
];

function save(){
  localStorage.setItem("myAssignments", JSON.stringify(assignments));
  showList(assignments);
  updateCounts();
}

function showList(data){
  let div = document.getElementById("assignmentList");
  div.innerHTML = "";
  if(data.length === 0){
    div.innerHTML = "<p style='color:#888;text-align:center'>No data found</p>";
    return;
  }
  data.forEach((item, i) => {
    let realIndex = assignments.indexOf(item);
    div.innerHTML += `
      <div class="assign-card">
        <div>
          <b>${item.subject}</b><br>
          <small>${item.assignment}</small><br>
          <small>📅 ${item.deadline} - <span class="badge ${item.status}">${item.status}</span></small>
        </div>
        <div>
          <button class="btn-upd" onclick="editStatus(${realIndex})">✏️</button>
          <button class="btn-del" onclick="remove(${realIndex})">🗑️</button>
        </div>
      </div>`;
  });
}

function addAssignment(){
  let s = document.getElementById("subject").value;
  let a = document.getElementById("assignment").value;
  let d = document.getElementById("deadline").value;
  let st = document.getElementById("status").value;

  if(s==="" || a==="" || d===""){
    alert("All fields fill pannu!");
    return;
  }

  // JSON format la data create pannrom - ithu thaan JSON exchange
  let newItem = {
    subject: s,
    assignment: a,
    deadline: d,
    status: st
  };

  console.log("JSON Sending:", JSON.stringify(newItem)); // For PPT demo

  assignments.unshift(newItem); // Mela varanum nu unshift

  document.getElementById("subject").value = "";
  document.getElementById("assignment").value = "";
  document.getElementById("deadline").value = "";

  save();
}

function remove(index){
  assignments.splice(index,1);
  save();
}

function editStatus(index){
  let newSt = prompt("Enter: Pending / In Progress / Completed", assignments[index].status);
  if(newSt){
    assignments[index].status = newSt;
    save();
  }
}

function searchAssignment(){
  let key = document.getElementById("search").value.toLowerCase();
  let filtered = assignments.filter(x =>
    x.subject.toLowerCase().includes(key) ||
    x.assignment.toLowerCase().includes(key)
  );
  showList(filtered);
}

function filterStatus(){
  let v = document.getElementById("filterStatus").value;
  if(v==="All") showList(assignments);
  else showList(assignments.filter(x => x.status === v));
}

function updateCounts(){
  document.getElementById("totalCount").innerText = assignments.length;
  document.getElementById("pendingCount").innerText = assignments.filter(x=>x.status==="Pending").length;
  document.getElementById("doneCount").innerText = assignments.filter(x=>x.status==="Completed").length;
}

// Page load aana udane list kaatum
showList(assignments);
updateCounts();