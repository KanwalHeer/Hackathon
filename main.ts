
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

    // Resume generation function
    const generateResumeHTML = async () => {
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
            return '';
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
            return '';
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return '';
        }

        // Validate dates (simple check)
        if (new Date(startDate) > new Date(endDate)) {
            alert('End date cannot be before the start date.');
            return '';
        }

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Resume</title>
                <style>
                    .resume-container {
                        width: 90%;
                        align-items: center;
                        text-align: center;
                        max-width: 800px;
                        margin: 0 auto;
                        background-color: #f1def1;
                        border: #4a0746 2px solid;
                        box-shadow: #d6d4d6 2px;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    .resume-header {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .resume-header img {
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        object-fit: cover;
                        margin-bottom: 10px;
                    }
                    .resume-header h1 {
                        font-size: 24px;
                        margin: 0;
                    }
                    .resume-header p {
                        margin: 5px 0;
                    }
                    .resume-section {
                        margin-bottom: 20px;
                        padding: 10px;
                        border: #9a8d99 1px solid;
                    }
                    .resume-section h2 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="resume-container">
                    <div class="resume-header">
                        ${photo ? `<img src="${photo}" alt="Photo"/>` : ''}
                        <h1>${name}</h1>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phone}</p>
                        <p>Address: ${address}</p>
                    </div>
                    <div class="resume-section">
                        <h2>Education</h2>
                        <p><strong>Institution: ${institution}</strong></p>
                        <p>Degree: ${degree}</p>
                        <p>Graduation Date: ${graduationDate}</p>
                    </div>
                    <div class="resume-section">
                        <h2>Skills</h2>
                        <p>${skills}</p>
                    </div>
                    <div class="resume-section">
                        <h2>Work Experience</h2>
                        <p><strong>${company}</strong> - ${position}</p>
                        <p>Start Date: ${startDate}</p>
                        <p>End Date: ${endDate || 'Present'}</p>
                        <p>Responsibilities: ${responsibilities}</p>
                    </div>
                    <div class="resume-section">
                        <h2>About</h2>
                        <p>${about}</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    };

    const submitButton = document.getElementById('submit-all') as HTMLButtonElement | null;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement | null;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement | null;
    const downloadResumeButton = document.getElementById('download-resume') as HTMLButtonElement | null;
    const editResumeButton = document.getElementById('edit-resume') as HTMLButtonElement | null;
    const shareResumeButton = document.getElementById('share-resume') as HTMLButtonElement | null;

    if (submitButton && resumeOutput && resumeContent && downloadResumeButton && editResumeButton && shareResumeButton) {
        submitButton.addEventListener('click', async () => {
            try {
                const resumeHTML = await generateResumeHTML();
                if (resumeContent) {
                    resumeContent.innerHTML = resumeHTML;
                    if (resumeOutput) {
                        resumeOutput.style.display = 'block';
                    }
                }
            } catch (error) {
                console.error('Error generating resume:', error);
            }
        });

        downloadResumeButton.addEventListener('click', async () => {
            try {
                const resumeHTML = await generateResumeHTML();
                const blob = new Blob([resumeHTML], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'resume.html';
                a.click();
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading resume:', error);
            }
        });

        editResumeButton.addEventListener('click', () => {
            if (resumeOutput) {
                resumeOutput.style.display = 'none'; // Hide the generated resume
            }
        });

        shareResumeButton.addEventListener('click', async () => {
            try {
                const resumeHTML = await generateResumeHTML();
                const blob = new Blob([resumeHTML], { type: 'text/html' });
                const url = URL.createObjectURL(blob);

                if (navigator.share) {
                    console.log('Web Share API is supported');
                    await navigator.share({
                        title: 'My Resume',
                        text: 'Check out my resume!',
                        url: url
                    });
                } else {
                    console.log('Web Share API is not supported');
                    window.open(url, '_blank');
                }

                URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error sharing resume:', error);
            }
        });
    }
});
