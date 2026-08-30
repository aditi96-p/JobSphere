// =========================================
// JOBSPHERE - JAVASCRIPT
// =========================================


// =========================================
// HOME PAGE SEARCH
// =========================================

function homeJobSearch() {

    let job = document.getElementById("homeSearch").value;
    let location = document.getElementById("homeLocation").value;

    // Check if user entered something

    if (job === "" && location === "") {

        alert("Please enter a job title or select a location.");

        return;
    }

    // Save search information

    localStorage.setItem("searchJob", job);
    localStorage.setItem("searchLocation", location);

    // Open Jobs page

    window.location.href = "jobs.html";
}



// =========================================
// APPLY FOR JOB
// =========================================

function applyJob(jobName) {

    if (jobName) {

        alert(
            "Application submitted successfully for " +
            jobName +
            "!"
        );

    } else {

        alert(
            "Application submitted successfully!"
        );

    }

}



// =========================================
// LOGIN
// =========================================

function loginUser() {

    let email =
        document.getElementById("loginEmail").value;

    let password =
        document.getElementById("loginPassword").value;


    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;
    }


    // Save login status

    localStorage.setItem("loggedIn", "true");

    localStorage.setItem("userEmail", email);


    alert("Login successful!");

    window.location.href = "jobs.html";
}



// =========================================
// REGISTER
// =========================================

function registerUser() {

    let name =
        document.getElementById("registerName").value;

    let email =
        document.getElementById("registerEmail").value;

    let password =
        document.getElementById("registerPassword").value;


    if (
        name === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Save user information

    localStorage.setItem("userName", name);

    localStorage.setItem("userEmail", email);


    alert(
        "Registration successful! Welcome to JobSphere."
    );


    window.location.href = "jobs.html";
}



// =========================================
// RESUME UPLOAD
// =========================================

function uploadResume() {

    let resume =
        document.getElementById("resumeFile");


    if (resume.files.length === 0) {

        alert("Please select your resume first.");

        return;
    }


    alert(
        "Resume uploaded successfully!"
    );


    localStorage.setItem(
        "resumeUploaded",
        "true"
    );
}



// =========================================
// RECRUITER - POST JOB
// =========================================

function postJob() {

    let title =
        document.getElementById("jobTitle").value;

    let company =
        document.getElementById("companyName").value;

    let location =
        document.getElementById("jobLocation").value;


    if (
        title === "" ||
        company === "" ||
        location === ""
    ) {

        alert("Please fill all job details.");

        return;
    }


    alert(
        "Job posted successfully!"
    );


    // Save job information

    localStorage.setItem(
        "postedJob",
        title
    );
}



// =========================================
// JOB SEARCH FILTER
// =========================================

function filterJobs() {

    let search =
        document
        .getElementById("jobSearch")
        .value
        .toLowerCase();


    let location =
        document
        .getElementById("locationFilter")
        .value;


    let type =
        document
        .getElementById("typeFilter")
        .value;


    let jobs =
        document.querySelectorAll(".job-card");


    jobs.forEach(function(job) {

        let title =
            job
            .getAttribute("data-title")
            .toLowerCase();


        let jobLocation =
            job
            .getAttribute("data-location");


        let jobType =
            job
            .getAttribute("data-type");


        let searchMatch =
            title.includes(search);


        let locationMatch =
            location === "all" ||
            jobLocation === location;


        let typeMatch =
            type === "all" ||
            jobType === type;


        if (
            searchMatch &&
            locationMatch &&
            typeMatch
        ) {

            job.style.display = "block";

        } else {

            job.style.display = "none";

        }

    });

}



// =========================================
// CLEAR FILTERS
// =========================================

function clearFilters() {

    document.getElementById("jobSearch").value = "";

    document.getElementById("locationFilter").value = "all";

    document.getElementById("typeFilter").value = "all";


    let jobs =
        document.querySelectorAll(".job-card");


    jobs.forEach(function(job) {

        job.style.display = "block";

    });

}



// =========================================
// SAVE NOTIFICATION
// =========================================

function showNotification(message) {

    alert(message);

}
// =========================================
// FRESHER JOB FILTER
// =========================================

function filterFreshers() {

    let search =
        document.getElementById("fresherSearch")
        .value
        .toLowerCase();

    let location =
        document.getElementById("fresherLocation")
        .value;

    let type =
        document.getElementById("fresherType")
        .value;

    let mode =
        document.getElementById("fresherMode")
        .value;


    let jobs =
        document.querySelectorAll(".fresher-job-card");


    jobs.forEach(function(job) {

        let title =
            job.getAttribute("data-title")
            .toLowerCase();

        let jobLocation =
            job.getAttribute("data-location");

        let jobType =
            job.getAttribute("data-type");

        let jobMode =
            job.getAttribute("data-mode");


        let searchMatch =
            title.includes(search);

        let locationMatch =
            location === "all" ||
            jobLocation === location;

        let typeMatch =
            type === "all" ||
            jobType === type;

        let modeMatch =
            mode === "all" ||
            jobMode === mode;


        if (
            searchMatch &&
            locationMatch &&
            typeMatch &&
            modeMatch
        ) {

            job.style.display = "block";

        } else {

            job.style.display = "none";

        }

    });

}



// =========================================
// CLEAR FRESHER FILTERS
// =========================================

function clearFresherFilters() {

    document.getElementById("fresherSearch").value = "";

    document.getElementById("fresherLocation").value = "all";

    document.getElementById("fresherType").value = "all";

    document.getElementById("fresherMode").value = "all";


    let jobs =
        document.querySelectorAll(".fresher-job-card");


    jobs.forEach(function(job) {

        job.style.display = "block";

    });

}
// =========================================
// INTERNSHIP FILTER
// =========================================

function filterInternships() {

    let search =
        document.getElementById("internshipSearch")
        .value
        .toLowerCase();


    let location =
        document.getElementById("internshipLocation")
        .value;


    let payment =
        document.getElementById("internshipPayment")
        .value;


    let duration =
        document.getElementById("internshipDuration")
        .value;


    let mode =
        document.getElementById("internshipMode")
        .value;


    let internships =
        document.querySelectorAll(".internship-card");


    internships.forEach(function(internship) {

        let title =
            internship
            .getAttribute("data-title")
            .toLowerCase();


        let internshipLocation =
            internship
            .getAttribute("data-location");


        let internshipPayment =
            internship
            .getAttribute("data-payment");


        let internshipDuration =
            internship
            .getAttribute("data-duration");


        let internshipMode =
            internship
            .getAttribute("data-mode");


        let searchMatch =
            title.includes(search);


        let locationMatch =
            location === "all" ||
            internshipLocation === location;


        let paymentMatch =
            payment === "all" ||
            internshipPayment === payment;


        let durationMatch =
            duration === "all" ||
            internshipDuration === duration;


        let modeMatch =
            mode === "all" ||
            internshipMode === mode;


        if (
            searchMatch &&
            locationMatch &&
            paymentMatch &&
            durationMatch &&
            modeMatch
        ) {

            internship.style.display = "block";

        } else {

            internship.style.display = "none";

        }

    });

}



// =========================================
// CLEAR INTERNSHIP FILTERS
// =========================================

function clearInternshipFilters() {

    document.getElementById("internshipSearch").value = "";

    document.getElementById("internshipLocation").value = "all";

    document.getElementById("internshipPayment").value = "all";

    document.getElementById("internshipDuration").value = "all";

    document.getElementById("internshipMode").value = "all";


    let internships =
        document.querySelectorAll(".internship-card");


    internships.forEach(function(internship) {

        internship.style.display = "block";

    });

}
// =========================================
// ADD SKILLS
// =========================================

function addSkill() {

    let input =
        document.getElementById("skillInput");

    let skill =
        input.value.trim();


    if (skill === "") {

        alert("Please enter a skill.");

        return;

    }


    let skillsList =
        document.getElementById("skillsList");


    let skillTag =
        document.createElement("div");


    skillTag.className = "skill-tag";


    skillTag.innerHTML =
        skill +
        ' <span onclick="removeSkill(this)">×</span>';


    skillsList.appendChild(skillTag);


    input.value = "";

}



// =========================================
// REMOVE SKILL
// =========================================

function removeSkill(element) {

    element.parentElement.remove();

}



// =========================================
// SAVE PROFILE
// =========================================

function saveProfile() {

    let name =
        document.getElementById("fullName").value;


    let email =
        document.getElementById("email").value;


    if (name === "" || email === "") {

        alert(
            "Please enter your name and email."
        );

        return;

    }


    alert(
        "✓ Profile saved successfully!"
    );

}
// =========================================
// SHOW SELECTED RESUME
// =========================================

function showResume() {

    let fileInput =
        document.getElementById("resumeFile");

    let file = fileInput.files[0];


    if (!file) {

        return;

    }


    // Check file size

    if (file.size > 5 * 1024 * 1024) {

        alert(
            "File size should be less than 5 MB."
        );

        fileInput.value = "";

        return;

    }


    // Show selected file

    document.getElementById("selectedFile")
        .style.display = "flex";


    document.getElementById("fileName")
        .textContent = file.name;


    let size =
        (file.size / 1024).toFixed(1);


    document.getElementById("fileSize")
        .textContent = size + " KB";

}



// =========================================
// REMOVE RESUME
// =========================================

function removeResume() {

    document.getElementById("resumeFile")
        .value = "";


    document.getElementById("selectedFile")
        .style.display = "none";


    document.getElementById("resumeStatus")
        .textContent =
        "No resume uploaded yet.";

}



// =========================================
// UPLOAD RESUME
// =========================================

function uploadResume() {

    let fileInput =
        document.getElementById("resumeFile");


    if (fileInput.files.length === 0) {

        alert(
            "Please choose your resume first."
        );

        return;

    }


    let file =
        fileInput.files[0];


    document.getElementById("resumeStatus")
        .textContent =
        "✓ Resume uploaded successfully!";


    alert(
        "✓ Resume uploaded successfully!"
    );

}
// =========================================
// OPEN APPLICATION PAGE
// =========================================

function applyJob(jobName) {

    window.location.href =
        "apply.html?job=" +
        encodeURIComponent(jobName);

}



// =========================================
// SHOW SELECTED JOB
// =========================================

function loadSelectedJob() {

    let params =
        new URLSearchParams(window.location.search);


    let job =
        params.get("job");


    let selectedJob =
        document.getElementById("selectedJob");


    if (selectedJob && job) {

        selectedJob.textContent = job;

    }

}



// =========================================
// SUBMIT APPLICATION
// =========================================

function submitApplication(event) {

    event.preventDefault();


    let resume =
        document.getElementById(
            "applicationResume"
        );


    // Check resume size

    if (
        resume.files.length > 0 &&
        resume.files[0].size > 5 * 1024 * 1024
    ) {

        alert(
            "Resume size should be less than 5 MB."
        );

        return;

    }


    // Show success popup

    document.getElementById(
        "applicationSuccess"
    ).style.display = "flex";


    // Save application notification

    localStorage.setItem(
        "applicationSubmitted",
        "true"
    );

}



// =========================================
// LOAD JOB WHEN PAGE OPENS
// =========================================

if (
    document.getElementById("selectedJob")
) {

    loadSelectedJob();

}
// =========================================
// OPEN JOB FORM
// =========================================

function openJobForm() {

    document.getElementById("jobFormCard")
        .style.display = "block";

    document.getElementById("jobFormCard")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// =========================================
// CLOSE JOB FORM
// =========================================

function closeJobForm() {

    document.getElementById("jobFormCard")
        .style.display = "none";

}



// =========================================
// POST NEW JOB
// =========================================

function postNewJob(event) {

    event.preventDefault();


    let title =
        document.getElementById("jobTitle").value;


    let company =
        document.getElementById("companyName").value;


    let location =
        document.getElementById("jobLocation").value;


    let type =
        document.getElementById("jobType").value;


    let mode =
        document.getElementById("jobMode").value;


    let jobsList =
        document.getElementById("postedJobsList");


    // Create new job

    let newJob =
        document.createElement("div");


    newJob.className =
        "posted-job-item";


    newJob.innerHTML = `

        <div class="posted-job-info">

            <div class="posted-company-logo">
                ${company.substring(0,2).toUpperCase()}
            </div>

            <div>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${company} · ${location}
                </p>

                <div class="posted-job-tags">

                    <span>
                        ${type}
                    </span>

                    <span>
                        ${mode}
                    </span>

                    <span class="verified">
                        ✓ Verified
                    </span>

                </div>

            </div>

        </div>


        <div class="posted-job-actions">

            <span class="application-number">
                0 Applicants
            </span>

            <button
                onclick="viewApplications('${title}')">

                View Applications

            </button>

            <button
                class="delete-job"
                onclick="deleteJob(this)">

                Delete

            </button>

        </div>

    `;


    jobsList.prepend(newJob);


    // Update statistics

    let totalJobs =
        document.getElementById("totalJobs");


    totalJobs.textContent =
        parseInt(totalJobs.textContent) + 1;


    // Reset form

    document.getElementById("postJobForm")
        .reset();


    closeJobForm();


    alert(
        "✓ Job posted successfully!"
    );

}



// =========================================
// VIEW APPLICATIONS
// =========================================

function viewApplications(jobName) {

    let applications =
        document.getElementById(
            "applicationsCard"
        );


    let jobNameElement =
        document.getElementById(
            "applicationJobName"
        );


    jobNameElement.textContent =
        "Candidates who applied for " +
        jobName;


    applications.style.display =
        "block";


    applications.scrollIntoView({
        behavior: "smooth"
    });

}



// =========================================
// CLOSE APPLICATIONS
// =========================================

function closeApplications() {

    document.getElementById(
        "applicationsCard"
    ).style.display = "none";

}



// =========================================
// SHORTLIST CANDIDATE
// =========================================

function shortlistCandidate(button) {

    if (
        button.classList.contains(
            "shortlisted"
        )
    ) {

        button.textContent =
            "Shortlist";

        button.classList.remove(
            "shortlisted"
        );

    } else {

        button.textContent =
            "✓ Shortlisted";

        button.classList.add(
            "shortlisted"
        );


        let shortlisted =
            document.getElementById(
                "shortlisted"
            );


        shortlisted.textContent =
            parseInt(shortlisted.textContent) + 1;


        alert(
            "✓ Candidate shortlisted!"
        );

    }

}



// =========================================
// VIEW RESUME
// =========================================

function viewResume() {

    alert(
        "Resume preview will be available here."
    );

}



// =========================================
// DELETE JOB
// =========================================

function deleteJob(button) {

    let confirmDelete =
        confirm(
            "Are you sure you want to delete this job?"
        );


    if (confirmDelete) {

        let job =
            button.closest(
                ".posted-job-item"
            );


        job.remove();


        let totalJobs =
            document.getElementById(
                "totalJobs"
            );


        totalJobs.textContent =
            Math.max(
                0,
                parseInt(totalJobs.textContent) - 1
            );

    }

}
// =========================================
// INTERNSHIP FILTER
// =========================================

function filterInternships() {

    let search =
        document.getElementById("internshipSearch")
        .value
        .toLowerCase();


    let location =
        document.getElementById("internshipLocation")
        .value;


    let payment =
        document.getElementById("internshipPayment")
        .value;


    let duration =
        document.getElementById("internshipDuration")
        .value;


    let mode =
        document.getElementById("internshipMode")
        .value;


    let internships =
        document.querySelectorAll(".internship-card");


    internships.forEach(function(internship) {

        let title =
            internship
            .getAttribute("data-title")
            .toLowerCase();


        let internshipLocation =
            internship
            .getAttribute("data-location");


        let internshipPayment =
            internship
            .getAttribute("data-payment");


        let internshipDuration =
            internship
            .getAttribute("data-duration");


        let internshipMode =
            internship
            .getAttribute("data-mode");


        let searchMatch =
            title.includes(search);


        let locationMatch =
            location === "all" ||
            internshipLocation === location;


        let paymentMatch =
            payment === "all" ||
            internshipPayment === payment;


        let durationMatch =
            duration === "all" ||
            internshipDuration === duration;


        let modeMatch =
            mode === "all" ||
            internshipMode === mode;


        if (
            searchMatch &&
            locationMatch &&
            paymentMatch &&
            durationMatch &&
            modeMatch
        ) {

            internship.style.display = "block";

        } else {

            internship.style.display = "none";

        }

    });

}



// =========================================
// CLEAR INTERNSHIP FILTERS
// =========================================

function clearInternshipFilters() {

    document.getElementById("internshipSearch").value = "";

    document.getElementById("internshipLocation").value = "all";

    document.getElementById("internshipPayment").value = "all";

    document.getElementById("internshipDuration").value = "all";

    document.getElementById("internshipMode").value = "all";


    let internships =
        document.querySelectorAll(".internship-card");


    internships.forEach(function(internship) {

        internship.style.display = "block";

    });

}
// =========================================
// MARK ALL NOTIFICATIONS AS READ
// =========================================

function markAllRead() {

    let notifications =
        document.querySelectorAll(
            ".notification-card"
        );


    notifications.forEach(function(notification) {

        notification.classList.remove(
            "unread"
        );

    });


    let dots =
        document.querySelectorAll(
            ".notification-dot"
        );


    dots.forEach(function(dot) {

        dot.style.display = "none";

    });


    alert(
        "All notifications marked as read."
    );

}