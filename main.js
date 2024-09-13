//=================================================================================================//
//                   navbar , skills and links toggle functionality start
// Get navbar section elements by their IDs
var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');
// Get skills ssection elements by their IDs
var toggleButton = document.getElementById('toggle-skills');
var skillsContent = document.getElementById('skills-content');
// Get link section elements by their IDs
var toggleButtonlink = document.getElementById('toggle-links');
var linksContent = document.getElementById('links-content');
//skills and links toggale function
var toggleFunction = function (btn, content, text) {
    // Toggle the 'hidden' class on the content
    content.classList.toggle('hidden');
    // Update the button text based on visibility
    if (content.classList.contains('hidden')) {
        btn.textContent = "Show ".concat(text);
    }
    else {
        btn.textContent = "Hide ".concat(text);
    }
};
//attach with button and Ensure elements are not null before adding event listeners
if (toggleButton && skillsContent) {
    toggleButton.addEventListener('click', function () { return toggleFunction(toggleButton, skillsContent, 'Skills'); });
}
if (toggleButtonlink && linksContent) {
    toggleButtonlink.addEventListener('click', function () { return toggleFunction(toggleButtonlink, linksContent, 'Links'); });
}
// Navigation toggle script
var navToggleFunction = function () {
    if (navToggle && navLinks) {
        navLinks.classList.toggle('active');
    }
};
//attach with button and Ensure elements are not null before adding event listeners
navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', navToggleFunction);
//                   navbar , skills and links toggle functionality completed
//=============================================================================================================//
//============================================================================================================//
//                   resume generator functionality start
//Get input Element by ID
//personal information section
var photoInput = document.getElementById('photo');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
//Education section
var institutionInput = document.getElementById('institution');
var degreeInput = document.getElementById('degree');
var graduationDateInput = document.getElementById('graduation-date');
//Skills Section
var skillsInput = document.getElementById('skills');
//Work experience section
var companyInput = document.getElementById('company');
var positionInput = document.getElementById('position');
var startDateInput = document.getElementById('start-date');
var endDateInput = document.getElementById('end-date');
var responsibilitiesInput = document.getElementById('responsibilities');
//links section
var linkedInInput = document.getElementById('linkedInInput');
var githubInput = document.getElementById('githubInput');
//                          ---------------------
//Get display Element by ID
var displayPhoto = document.getElementById('displayPhoto');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayAddress = document.getElementById('displayAddress');
//Education section
var displayInstitution = document.getElementById('displayInstitution');
var displayDegree = document.getElementById('displayDegree');
var displayGraduation = document.getElementById('displayGraduation');
//Skills Section
var displaySkillsDiv = document.getElementById('displaySkillsDiv');
var displaySkills = document.getElementById('displaySkills');
//Work experience section
var displayCompany = document.getElementById('displayCompany');
var displayPosition = document.getElementById('displayPosition');
var displayStartDate = document.getElementById('displayStartDate');
var displayEndDate = document.getElementById('displayEndDate');
var displayResponsibilities = document.getElementById('displayResponsibilities');
//links section
var displayLinkedIn = document.getElementById('displayLinkedIn');
var displayGithub = document.getElementById('displayGithub');
//get divs and headings
var formDiv = document.getElementById('formDiv');
var resumeDiv = document.getElementById('resumeDiv');
var displayMainHeading = document.getElementById('displayMainHeading');
var displayHeading = document.getElementById('displayHeading');
// get buttons
var genrateResumeButton = document.getElementById('generateResume');
var downloadResumeButton = document.getElementById('downloadResume');
var copyResumeButton = document.getElementById('copyResume');
var navbar = document.getElementById('navbar');
//                    -----------------------------
//valid formate for input fields
var namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phonePattern = /^[0-9\-\+\(\) ]+$/;
var linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
var githubPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
//ccreate two variables
var isValid = true;
var isEditing = false;
//resume genrator function
var resumeGeneratorHandler = function () {
    var _a;
    isValid = true;
    // Name validation
    if (nameInput.value.trim() === '') {
        alert("Name is Required");
        isValid = false;
    }
    else if (!namePattern.test(nameInput.value.trim())) {
        alert('Invalid name format. Only letters, spaces, apostrophes, and hyphens are allowed.');
        isValid = false;
    }
    // Email validation
    if (emailInput.value.trim() === '') {
        alert("Email is Required");
        isValid = false;
    }
    else if (!emailPattern.test(emailInput.value.trim())) {
        alert('Invalid email format.');
        isValid = false;
    }
    // Phone number validation
    if (phoneInput.value.trim() === '') {
        alert("Phone number is Required");
        isValid = false;
    }
    else if (!phonePattern.test(phoneInput.value.trim())) {
        alert('Invalid phone number format.');
        isValid = false;
    }
    // Address validation
    if (addressInput.value.trim() === '') {
        alert("Address is Required");
        isValid = false;
    }
    // Education section validation
    if (institutionInput.value.trim() === '') {
        alert("Institution is Required");
        isValid = false;
    }
    if (degreeInput.value.trim() === '') {
        alert("Degree is Required");
        isValid = false;
    }
    if (graduationDateInput.value.trim() === '') {
        alert("Graduation Date is Required");
        isValid = false;
    }
    // Skills section validation
    if (skillsInput.value.trim() === '') {
        alert("Skills are Required");
        isValid = false;
    }
    // Work experience validation
    if (companyInput.value.trim() === '') {
        alert("Company is Required");
        isValid = false;
    }
    if (positionInput.value.trim() === '') {
        alert("Position is Required");
        isValid = false;
    }
    if (startDateInput.value.trim() === '') {
        alert("Start Date is Required");
        isValid = false;
    }
    if (endDateInput.value.trim() === '') {
        alert("End Date is Required");
        isValid = false;
    }
    else if (endDateInput.value < startDateInput.value) {
        alert('End date cannot be before start date.');
        isValid = false;
    }
    if (responsibilitiesInput.value.trim() === '') {
        alert("Responsibilities are Required");
        isValid = false;
    }
    // Links section validation
    if (linkedInInput.value.trim() === '' || !linkedinPattern.test(linkedInInput.value.trim())) {
        alert("LinkedIn URL is required or is in an invalid format.");
        isValid = false;
    }
    if (githubInput.value.trim() === '' || !githubPattern.test(githubInput.value.trim())) {
        alert("GitHub URL is required or is in an invalid format.");
        isValid = false;
    }
    //comet here
    if (isValid) {
        if (isEditing) {
            // Enable
            //personal info section
            nameInput.removeAttribute('readonly');
            emailInput.removeAttribute('readonly');
            phoneInput.removeAttribute('readonly');
            photoInput.removeAttribute('readonly');
            addressInput.removeAttribute('readonly');
            //education section
            institutionInput.removeAttribute('readonly');
            degreeInput.removeAttribute('readonly');
            githubInput.removeAttribute('readonly');
            //experience section
            companyInput.removeAttribute('readonly');
            positionInput.removeAttribute('readonly');
            startDateInput.removeAttribute('readonly');
            endDateInput.removeAttribute('readonly');
            responsibilitiesInput.removeAttribute('readonly');
            //skills section
            skillsInput.removeAttribute('readonly');
            //links ssection
            githubInput.removeAttribute('readonly');
            linkedInInput.removeAttribute('readonly');
            //hide and show functionality of dives
            if (formDiv)
                formDiv.style.display = 'block';
            if (resumeDiv)
                resumeDiv.style.display = 'none';
            //update buttons
            genrateResumeButton.textContent = 'Update Resume';
            downloadResumeButton.style.display = 'none';
            copyResumeButton.style.display = 'none';
        }
        else {
            //get values from inputs given by user  
            //personal information section
            var nameValue = nameInput.value;
            var emailValue = emailInput.value;
            var phonValue = phoneInput.value;
            var addressValue = addressInput.value;
            var photoInputFile = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
            var photoValue = photoInputFile ? URL.createObjectURL(photoInputFile) : '';
            //education section
            var institutionValue = institutionInput.value;
            var degreeValue = degreeInput.value;
            var graduationDateValue = graduationDateInput.value;
            //skills section
            var skillsValue = skillsInput.value;
            //experince section
            var companyValue = companyInput.value;
            var positionValue = positionInput.value;
            var startDateValue = startDateInput.value;
            var endDateValue = endDateInput.value;
            var responsibilitiesValue = responsibilitiesInput.value;
            //link section
            var linkedInValue = linkedInInput.value;
            var githubValue = githubInput.value;
            //       -----------
            // Set values to display elements
            if (displayPhoto)
                displayPhoto.src = photoValue;
            if (displayName)
                displayName.textContent = nameValue;
            if (displayEmail)
                displayEmail.textContent = emailValue;
            if (displayPhone)
                displayPhone.textContent = phonValue;
            if (displayAddress)
                displayAddress.textContent = addressValue;
            // Education section
            if (displayInstitution)
                displayInstitution.textContent = institutionValue;
            if (displayDegree)
                displayDegree.textContent = degreeValue;
            if (displayGraduation)
                displayGraduation.textContent = graduationDateValue;
            // Skills Section
            if (displaySkills)
                displaySkills.textContent = skillsValue;
            if (displaySkillsDiv)
                displaySkillsDiv.style.display = 'block';
            // Work experience section
            if (displayCompany)
                displayCompany.textContent = companyValue;
            if (displayPosition)
                displayPosition.textContent = positionValue;
            if (displayStartDate)
                displayStartDate.textContent = startDateValue;
            if (displayEndDate)
                displayEndDate.textContent = endDateValue;
            if (displayResponsibilities)
                displayResponsibilities.textContent = responsibilitiesValue;
            // Links section
            if (displayLinkedIn)
                displayLinkedIn.href = linkedInValue;
            if (displayGithub)
                displayGithub.href = githubValue;
            // Hide the form section
            if (displayMainHeading)
                displayMainHeading.innerText = 'Milestone 03';
            // Hide the form section
            if (displayHeading)
                displayHeading.innerText = 'Dynamic Resume';
            // Hide the form section
            if (formDiv)
                formDiv.style.display = 'none';
            //
            nameInput.setAttribute('readonly', 'reue');
            emailInput.setAttribute('readonly', 'true');
            phoneInput.setAttribute('readonly', 'true');
            photoInput.setAttribute('readonly', 'reue');
            addressInput.setAttribute('readonly', 'reue');
            institutionInput.setAttribute('readonly', 'reue');
            degreeInput.setAttribute('readonly', 'reue');
            githubInput.setAttribute('readonly', 'reue');
            companyInput.setAttribute('readonly', 'reue');
            positionInput.setAttribute('readonly', 'reue');
            startDateInput.setAttribute('readonly', 'reue');
            endDateInput.setAttribute('readonly', 'reue');
            responsibilitiesInput.setAttribute('readonly', 'reue');
            skillsInput.setAttribute('readonly', 'reue');
            githubInput.setAttribute('readonly', 'reue');
            linkedInInput.setAttribute('readonly', 'reue');
            genrateResumeButton.textContent = 'Edit Resume';
            downloadResumeButton.style.display = 'block';
            copyResumeButton.style.display = 'block';
            // Store data in localStorage
            var uniqueKey = nameValue.trim().replace(/\s+/g, '-').toLowerCase();
            localStorage.setItem(uniqueKey, JSON.stringify({
                name: nameValue,
                photo: photoValue,
                email: emailValue,
                linkedIn: linkedInValue,
                github: githubValue,
                address: addressValue,
                phone: phonValue,
                institution: institutionValue,
                degree: degreeValue,
                graduationDate: graduationDateValue,
                skills: skillsValue,
                company: companyValue,
                position: positionValue,
                startDate: startDateValue,
                endDate: endDateValue,
                responsibilities: responsibilitiesValue
            }));
            // Create the unique URL and display
            var uniqueUrl = "".concat(window.location.origin, "?resume=").concat(uniqueKey);
            copyResumeButton.textContent = "Copy URL ".concat(uniqueUrl);
            copyResumeButton.classList.remove('hidden');
            downloadResumeButton.classList.remove('hidden');
        }
        isEditing = !isEditing;
    }
};
genrateResumeButton === null || genrateResumeButton === void 0 ? void 0 : genrateResumeButton.addEventListener('click', resumeGeneratorHandler);
//                         resume generate functionality completed
//==========================================================================================================//
// Function to handle resume download
var downloadButtonHandle = function () {
    // Hide other buttons and elements that should not be printed
    if (genrateResumeButton && copyResumeButton && downloadResumeButton && displayMainHeading && displayHeading && linksContent && skillsContent && toggleButton && toggleButtonlink) {
        genrateResumeButton.style.display = 'none';
        downloadResumeButton.style.display = 'none';
        copyResumeButton.style.display = 'none';
        displayMainHeading.style.display = 'none';
        displayHeading.style.display = 'none';
        navbar.style.display = 'none';
        linksContent.classList.remove('hidden');
        skillsContent.classList.remove('hidden');
        toggleButton.style.display = 'none';
        toggleButtonlink.style.display = 'none';
        if (formDiv)
            formDiv.style.display = 'none';
        if (resumeDiv)
            resumeDiv.style.display = 'block';
    }
    // Trigger print
    window.print();
    // show other buttons and elements that should not be printed
    if (genrateResumeButton && copyResumeButton && downloadResumeButton && displayMainHeading && displayHeading && skillsContent && linksContent && toggleButton && toggleButtonlink) {
        genrateResumeButton.style.display = 'block';
        downloadResumeButton.style.display = 'block';
        copyResumeButton.style.display = 'block';
        displayMainHeading.style.display = 'block';
        displayHeading.style.display = 'block';
        navbar.style.display = 'block';
        navbar.style.display = 'flex';
        navbar.style.alignItems = 'center';
        linksContent.classList.add('hidden');
        skillsContent.classList.add('hidden');
        toggleButton.style.display = 'block';
        toggleButtonlink.style.display = 'block';
        if (formDiv)
            formDiv.style.display = 'block';
        if (resumeDiv)
            resumeDiv.style.display = 'none';
    }
};
// Attach event listener to the download btn button
downloadResumeButton.addEventListener('click', downloadButtonHandle);
//                      download function completed
//========================================================================================================//
// Function to copy the resume link
var copyLinkHandle = function () {
    var _a;
    var link = (_a = copyResumeButton.textContent) === null || _a === void 0 ? void 0 : _a.split(' ')[2]; // Extract URL from button text
    if (link) {
        navigator.clipboard.writeText(link).then(function () {
            alert("Link copied to clipboard! Your Link");
        }).catch(function (err) {
            console.error('Failed to copy link: ', err);
        });
    }
};
// Attach event listener to the copy resume button
copyResumeButton.addEventListener('click', copyLinkHandle);
// display resume url
var displayResumeFromUrl = function () {
    var params = new URLSearchParams(window.location.search);
    var resumeKey = params.get('resume');
    if (resumeKey) {
        var data = localStorage.getItem(resumeKey);
        if (data) {
            var _a = JSON.parse(data), name_1 = _a.name, photo = _a.photo, email = _a.email, linkedIn = _a.linkedIn, github = _a.github, address = _a.address, phone = _a.phone, institution = _a.institution, degree = _a.degree, graduationDate = _a.graduationDate, company = _a.company, position = _a.position, startDate = _a.startDate, endDate = _a.endDate, responsibilities = _a.responsibilities, skills = _a.skills;
            // Set values to display elements
            if (displayPhoto)
                displayPhoto.src = photo;
            if (displayName)
                displayName.textContent = name_1;
            if (displayEmail)
                displayEmail.textContent = email;
            if (displayPhone)
                displayPhone.textContent = phone;
            if (displayAddress)
                displayAddress.textContent = address;
            if (displayInstitution)
                displayInstitution.textContent = institution;
            if (displayDegree)
                displayDegree.textContent = degree;
            if (displayGraduation)
                displayGraduation.textContent = graduationDate;
            if (displayCompany)
                displayCompany.textContent = company;
            if (displayPosition)
                displayPosition.textContent = position;
            if (displayStartDate)
                displayStartDate.textContent = startDate;
            if (displayEndDate)
                displayEndDate.textContent = endDate;
            if (displayResponsibilities)
                displayResponsibilities.textContent = responsibilities;
            if (displaySkills)
                displaySkills.textContent = skills;
            if (displayLinkedIn)
                displayLinkedIn.href = linkedIn;
            if (displayGithub)
                displayGithub.href = github;
            // Hide the form and show the resume
            if (formDiv)
                formDiv.style.display = 'none';
            if (resumeDiv)
                resumeDiv.style.display = 'block';
            // Hide elements that should not be visible
            if (displayMainHeading)
                displayMainHeading.style.display = 'none';
            if (displayHeading)
                displayHeading.style.display = 'none';
            if (navbar)
                navbar.style.display = 'none';
            if (genrateResumeButton)
                genrateResumeButton.style.display = 'none';
            if (downloadResumeButton)
                downloadResumeButton.style.display = 'none';
            if (copyResumeButton)
                copyResumeButton.style.display = 'none';
        }
        else {
            // Handle case where data is not found
            formDiv.style.display = 'none';
            resumeDiv.style.display = 'none';
        }
    }
    else {
        // Handle case where there is no resume key
        formDiv.style.display = 'block';
        resumeDiv.style.display = 'none';
        // Ensure that all elements are visible if no resume is displayed
        if (displayMainHeading)
            displayMainHeading.style.display = 'block';
        if (displayHeading)
            displayHeading.style.display = 'block';
        if (navbar)
            navbar.style.display = 'block';
        if (genrateResumeButton)
            genrateResumeButton.style.display = 'block';
        if (downloadResumeButton)
            downloadResumeButton.style.display = 'block';
        if (copyResumeButton)
            copyResumeButton.style.display = 'block';
    }
};
// Initialize the page based on URL parameters
displayResumeFromUrl();
//                   resume generator functionality completed
//=============================================================================================================//
