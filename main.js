document.addEventListener('DOMContentLoaded', function () {
    // Navigation toggle
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
    var navLinksItems = document.querySelectorAll('nav ul li a');
    navLinksItems.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var href = link.getAttribute('href');
            if (href) {
                var targetId = href.substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
    // Skills toggle
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsContent = document.getElementById('skills-content');
    if (toggleSkillsButton && skillsContent) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsContent.classList.contains('hidden')) {
                skillsContent.classList.remove('hidden');
                toggleSkillsButton.textContent = 'Hide Skills';
            }
            else {
                skillsContent.classList.add('hidden');
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
    // Resume generation
    var submitButton = document.getElementById('submit-all');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    var downloadResumeButton = document.getElementById('download-resume');
    if (submitButton && resumeOutput && resumeContent && downloadResumeButton) {
        submitButton.addEventListener('click', function () {
            var _a;
            // Capture the form data
            var nameInput = document.getElementById('name');
            var emailInput = document.getElementById('email');
            var phoneInput = document.getElementById('phone');
            var addressInput = document.getElementById('address');
            var photoInput = document.getElementById('photo');
            var institutionInput = document.getElementById('institution');
            var degreeInput = document.getElementById('degree');
            var graduationDateInput = document.getElementById('graduation-date');
            var skillsInput = document.getElementById('skills');
            var companyInput = document.getElementById('company');
            var positionInput = document.getElementById('position');
            var startDateInput = document.getElementById('start-date');
            var endDateInput = document.getElementById('end-date');
            var responsibilitiesInput = document.getElementById('responsibilities');
            var aboutInput = document.getElementById('about-me');
            // Basic validation
            if (!nameInput || !emailInput || !phoneInput || !addressInput ||
                !institutionInput || !degreeInput || !graduationDateInput ||
                !skillsInput || !companyInput || !positionInput ||
                !startDateInput || !endDateInput || !responsibilitiesInput) {
                alert('Please ensure all required fields are present.');
                return;
            }
            var name = nameInput.value.trim();
            var email = emailInput.value.trim();
            var phone = phoneInput.value.trim();
            var address = addressInput.value.trim();
            var photo = photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(photoInput.files[0]) : '';
            var institution = institutionInput.value.trim();
            var degree = degreeInput.value.trim();
            var graduationDate = graduationDateInput.value.trim();
            var skills = skillsInput.value.trim();
            var company = companyInput.value.trim();
            var position = positionInput.value.trim();
            var startDate = startDateInput.value.trim();
            var endDate = endDateInput.value.trim();
            var responsibilities = responsibilitiesInput.value.trim();
            var about = aboutInput ? aboutInput.value.trim() : '';
            // Validate if all fields are filled
            if (!name || !email || !phone || !address || !institution ||
                !degree || !graduationDate || !skills || !company ||
                !position || !startDate || !endDate || !responsibilities) {
                alert('Please fill in all required fields.');
                return;
            }
            // Validate email
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            // Validate phone number (simple check for digits and length)
            var phonePattern = /^\d{10,15}$/; // Adjust based on expected phone number format
            if (!phonePattern.test(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            // Validate dates (simple check)
            if (new Date(startDate) > new Date(endDate)) {
                alert('End date cannot be before the start date.');
                return;
            }
            // Generate the resume HTML with styling
            var resumeHTML = "\n                <div class=\"static-resume\">\n                    <div class=\"resume-header\">\n                      \n                        ".concat(photo ? "<img src=\"".concat(photo, "\" alt=\"Photo\" />") : '', "\n                         <h1>").concat(name, "</h1>\n                        <p>Email: ").concat(email, "</p>\n                        <p>Phone: ").concat(phone, "</p>\n                        <p>Address: ").concat(address, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h4>Education</h4>\n                        <p><strong> Institution: ").concat(institution, "</strong></p>\n                        <p>Degree: ").concat(degree, "</p>\n                        <p>Graduation Date: ").concat(graduationDate, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h4>Skills</h4>\n                        <p>").concat(skills, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h4>Work Experience</h4>\n                        <p><strong>").concat(company, "</strong> - ").concat(position, "</p>\n                        <p>Start Date: ").concat(startDate, "</p>\n                        <p>End Date: ").concat(endDate || 'Present', "</p>\n                        <p>Responsibilities: ").concat(responsibilities, "</p>\n                    </div>\n                    <div class=\"resume-section\">\n                        <h4>About</h4>\n                        <p>").concat(about, "</p>\n                    </div>\n                </div>\n            ");
            if (resumeContent) {
                resumeContent.innerHTML = resumeHTML;
                if (resumeOutput) {
                    resumeOutput.style.display = 'block';
                }
                // Clear all form fields
                if (nameInput)
                    nameInput.value = '';
                if (emailInput)
                    emailInput.value = '';
                if (phoneInput)
                    phoneInput.value = '';
                if (addressInput)
                    addressInput.value = '';
                if (photoInput)
                    photoInput.value = ''; // Reset file input
                if (institutionInput)
                    institutionInput.value = '';
                if (degreeInput)
                    degreeInput.value = '';
                if (graduationDateInput)
                    graduationDateInput.value = '';
                if (skillsInput)
                    skillsInput.value = '';
                if (companyInput)
                    companyInput.value = '';
                if (positionInput)
                    positionInput.value = '';
                if (startDateInput)
                    startDateInput.value = '';
                if (endDateInput)
                    endDateInput.value = '';
                if (responsibilitiesInput)
                    responsibilitiesInput.value = '';
                if (aboutInput)
                    aboutInput.value = '';
            }
        });
        downloadResumeButton.addEventListener('click', function () {
            var resumeHTML = (resumeContent === null || resumeContent === void 0 ? void 0 : resumeContent.innerHTML) || '';
            var blob = new Blob([resumeHTML], { type: 'text/html' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'resume.html';
            a.click();
            URL.revokeObjectURL(url);
        });
    }
});
