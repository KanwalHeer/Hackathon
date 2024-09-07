<<<<<<< HEAD
=======
// main.ts

>>>>>>> 1d21e2997a15a467ee4af5fe00cbef815cad35c5
document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
    const navLinks = document.getElementById('nav-links') as HTMLUListElement | null;

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const navLinksItems = document.querySelectorAll('nav ul li a');

    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const href = link.getAttribute('href');
            if (href) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

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
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
    const skillsContent = document.getElementById('skills-content') as HTMLDivElement | null;

    if (toggleSkillsButton && skillsContent) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsContent.classList.contains('hidden')) {
                skillsContent.classList.remove('hidden');
                toggleSkillsButton.textContent = 'Hide Skills';
            } else {
                skillsContent.classList.add('hidden');
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }

    // Resume generation
    const submitButton = document.getElementById('submit-all') as HTMLButtonElement | null;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement | null;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement | null;
    const downloadResumeButton = document.getElementById('download-resume') as HTMLButtonElement | null;

    if (submitButton && resumeOutput && resumeContent && downloadResumeButton) {
        submitButton.addEventListener('click', () => {
            // Capture the form data
            const nameInput = document.getElementById('name') as HTMLInputElement | null;
            const emailInput = document.getElementById('email') as HTMLInputElement | null;
            const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
            const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
            const photoInput = document.getElementById('photo') as HTMLInputElement | null;

            const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
            const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
            const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;

            const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;

            const companyInput = document.getElementById('company') as HTMLInputElement | null;
            const positionInput = document.getElementById('position') as HTMLInputElement | null;
            const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
            const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
            const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;

            const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;

            // Basic validation
            if (!nameInput || !emailInput || !phoneInput || !addressInput ||
                !institutionInput || !degreeInput || !graduationDateInput ||
                !skillsInput || !companyInput || !positionInput ||
                !startDateInput || !endDateInput || !responsibilitiesInput) {
                alert('Please ensure all required fields are present.');
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const address = addressInput.value.trim();
            const photo = photoInput && photoInput.files?.[0] ? URL.createObjectURL(photoInput.files[0]) : '';

            const institution = institutionInput.value.trim();
            const degree = degreeInput.value.trim();
            const graduationDate = graduationDateInput.value.trim();

            const skills = skillsInput.value.trim();

            const company = companyInput.value.trim();
            const position = positionInput.value.trim();
            const startDate = startDateInput.value.trim();
            const endDate = endDateInput.value.trim();
            const responsibilities = responsibilitiesInput.value.trim();

            const about = aboutInput ? aboutInput.value.trim() : '';

            // Validate if all fields are filled
            if (!name || !email || !phone || !address || !institution ||
                !degree || !graduationDate || !skills || !company ||
                !position || !startDate || !endDate || !responsibilities) {
                alert('Please fill in all required fields.');
                return;
            }

            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Validate phone number (simple check for digits and length)
            const phonePattern = /^\d{10,15}$/; // Adjust based on expected phone number format
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
            const resumeHTML = `
                <div class="static-resume">
                    <div class="resume-header">
                      
                        ${photo ? `<img src="${photo}" alt="Photo" />` : ''}
                         <h1>${name}</h1>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phone}</p>
                        <p>Address: ${address}</p>
                    </div>
                    <div class="resume-section">
                        <h4>Education</h4>
                        <p><strong> Institution: ${institution}</strong></p>
                        <p>Degree: ${degree}</p>
                        <p>Graduation Date: ${graduationDate}</p>
                    </div>
                    <div class="resume-section">
                        <h4>Skills</h4>
                        <p>${skills}</p>
                    </div>
                    <div class="resume-section">
                        <h4>Work Experience</h4>
                        <p><strong>${company}</strong> - ${position}</p>
                        <p>Start Date: ${startDate}</p>
                        <p>End Date: ${endDate || 'Present'}</p>
                        <p>Responsibilities: ${responsibilities}</p>
                    </div>
                    <div class="resume-section">
                        <h4>About</h4>
                        <p>${about}</p>
                    </div>
                </div>
            `;

            if (resumeContent) {
                resumeContent.innerHTML = resumeHTML;
                if (resumeOutput) {
                    resumeOutput.style.display = 'block';
                }

                // Clear all form fields
                if (nameInput) nameInput.value = '';
                if (emailInput) emailInput.value = '';
                if (phoneInput) phoneInput.value = '';
                if (addressInput) addressInput.value = '';
                if (photoInput) photoInput.value = ''; // Reset file input
                if (institutionInput) institutionInput.value = '';
                if (degreeInput) degreeInput.value = '';
                if (graduationDateInput) graduationDateInput.value = '';
                if (skillsInput) skillsInput.value = '';
                if (companyInput) companyInput.value = '';
                if (positionInput) positionInput.value = '';
                if (startDateInput) startDateInput.value = '';
                if (endDateInput) endDateInput.value = '';
                if (responsibilitiesInput) responsibilitiesInput.value = '';
                if (aboutInput) aboutInput.value = '';
            }
        });

        downloadResumeButton.addEventListener('click', () => {
            const resumeHTML = resumeContent?.innerHTML || '';
            const blob = new Blob([resumeHTML], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.html';
            a.click();
            URL.revokeObjectURL(url);
        });
    }
});
