// Function to get faculty list from localStorage
function getFacultyList() {
    let facultyList = localStorage.getItem('facultyMembers');
    if (facultyList) {
        return JSON.parse(facultyList);
    } else {
        return [];
    }
}

// Function to save faculty list to localStorage
function saveFacultyList(facultyList) {
    localStorage.setItem('facultyMembers', JSON.stringify(facultyList));
}

// Function to render the faculty list on the page
function renderFacultyList() {
    const facultyList = getFacultyList();
    const facultyListDiv = document.getElementById('facultyList');
    
    // Clear previous content
    facultyListDiv.innerHTML = '';

    if (facultyList.length > 0) {
        facultyList.forEach((faculty, index) => {
            facultyListDiv.innerHTML += `
                <div class="faculty-item">
                    <h3>${faculty.name}</h3>
                    <p><strong>Education:</strong> ${faculty.education}</p>
                    <p><strong>Phone:</strong> ${faculty.phone}</p>
                    <p><strong>Email:</strong> ${faculty.email}</p>
                    <button onclick="deleteFaculty(${index})">Delete</button>
                    <hr>
                </div>
            `;
        });
    } else {
        facultyListDiv.innerHTML = '<p>No faculty members found.</p>';
    }
}

// Function to add a new faculty member
document.getElementById('facultyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Get the existing faculty members list
    let facultyList = getFacultyList();

    // Create a new faculty member object
    const newFaculty = {
        name: name,
        education: education,
        phone: phone,
        email: email
    };

    // Add the new faculty member to the list
    facultyList.push(newFaculty);

    // Save the updated list to localStorage
    saveFacultyList(facultyList);

    // Clear the form fields
    document.getElementById('facultyForm').reset();

    // Re-render the faculty list
    renderFacultyList();
});

// Function to delete a faculty member
function deleteFaculty(index) {
    let facultyList = getFacultyList();
    facultyList.splice(index, 1); // Remove the faculty member from the list

    // Save the updated list to localStorage
    saveFacultyList(facultyList);

    // Re-render the faculty list
    renderFacultyList();
}

// Initial rendering of the faculty list on page load
window.onload = function() {
    renderFacultyList();
};
