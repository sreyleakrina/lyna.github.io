document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const userInfo = document.querySelector(".user-info");
    const userName = document.getElementById("userName");
    const userBatch = document.getElementById("userBatch");
    const userBio = document.getElementById("userBio");
    const userSkills = document.getElementById("userSkills");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        // Get form values
        const name = document.getElementById("name").value;
        const gender = document.getElementById("gender").value;
        const bio = document.getElementById("bio").value;
        const batch = document.querySelector("input[name='batch']:checked");
        const skills = document.querySelectorAll("input[name='skill']:checked");
        
        if (!batch) {
            alert("Please select a batch.");
            return;
        }

        // Extract selected skills
        let selectedSkills = [];
        skills.forEach(skill => {
            selectedSkills.push(skill.value);
        });

        // Update UI with user info
        userName.textContent = name;
        userBatch.textContent = batch.value;
        userBio.textContent = bio;
        userSkills.innerHTML = "<strong>Skills:</strong> " + (selectedSkills.length > 0 ? selectedSkills.join(", ") : "None");
        // Show user info section
        userInfo.style.display = "block";
    });
});