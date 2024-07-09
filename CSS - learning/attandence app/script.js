const submit = document.getElementById("submit");
const subjectinput = document.getElementById("subject-input");
const subjectlist = document.getElementById("subject-list");

// Load subjects from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadSubjects();
});

function addSubject(e) {
    const subject = subjectinput.value;
    if (!subject) {
        alert("add subject");
    } else {
        // Create a new subject object
        const newSubject = {
            name: subject,
            attendance: 0,
            total: 0
        };

        // Add the new subject to the local storage
        localStorage.setItem(subject, JSON.stringify(newSubject));

        // Add the subject to the list
        const newListItem = createListItem(newSubject);
        subjectlist.appendChild(newListItem);
        subjectinput.value = "";
    }
}

subjectlist.addEventListener("click", function (event) {
    if (event.target.className === "btn-dlt") {
        // Remove subject from local storage
        const subjectName = event.target.parentElement.firstChild.textContent.trim();
        localStorage.removeItem(subjectName);

        // Remove subject from the list
        event.target.parentElement.remove();
    }
});

function updateAttendance(action, button) {
    const listItem = button.parentElement;
    const subjectName = listItem.firstChild.textContent.trim();
    const storedSubject = JSON.parse(localStorage.getItem(subjectName));

    if (action === 'present') {
        storedSubject.attendance++;
        storedSubject.total++;
    } else if (action === 'absent') {
        storedSubject.total++;
    }

    // Update local storage
    localStorage.setItem(subjectName, JSON.stringify(storedSubject));

    // Update the display
    listItem.querySelector('.attend').textContent = storedSubject.attendance;
    listItem.querySelector('.total').textContent = storedSubject.total;
}

function createListItem(subject) {
    const listItem = document.createElement("li");
    listItem.innerHTML = subject.name + '<h4 class="attend">' + subject.attendance + '</h4>/<h4 class="total">' + subject.total + '</h4><button onclick="updateAttendance(\'present\', this)" class="btn-tick">attend</button><button onclick="updateAttendance(\'absent\', this)" class="btn-cross">absent</button><button class="btn-dlt">Delete</button>';
    return listItem;
}

function loadSubjects() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const subject = JSON.parse(localStorage.getItem(key));
        const listItem = createListItem(subject);
        subjectlist.appendChild(listItem);
    }
}

submit.addEventListener("click", addSubject);
