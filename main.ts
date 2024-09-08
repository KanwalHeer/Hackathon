

// // Utility function to convert image file to Base64 string
// const fileToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//     });
// };

// // Function to clear all input fields
// const clearInputFields = () => {
//     const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
//     inputs.forEach(input => {
//         if (input.type === 'file') {
//             (input as HTMLInputElement).value = ''; // Clear file input
//         } else {
//             input.value = ''; // Clear text input
//         }
//     });
// };

// // Function to populate input fields with existing data
// const populateInputFields = (data: any) => {
//     const nameInput = document.getElementById('name') as HTMLInputElement | null;
//     const emailInput = document.getElementById('email') as HTMLInputElement | null;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//     const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//     const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//     const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//     const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//     const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//     const companyInput = document.getElementById('company') as HTMLInputElement | null;
//     const positionInput = document.getElementById('position') as HTMLInputElement | null;
//     const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//     const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//     const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//     const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//     const photoInput = document.getElementById('photo') as HTMLInputElement | null;

//     if (data) {
//         if (nameInput) nameInput.value = data.name || '';
//         if (emailInput) emailInput.value = data.email || '';
//         if (phoneInput) phoneInput.value = data.phone || '';
//         if (addressInput) addressInput.value = data.address || '';
//         if (institutionInput) institutionInput.value = data.institution || '';
//         if (degreeInput) degreeInput.value = data.degree || '';
//         if (graduationDateInput) graduationDateInput.value = data.graduationDate || '';
//         if (skillsInput) skillsInput.value = data.skills || '';
//         if (companyInput) companyInput.value = data.company || '';
//         if (positionInput) positionInput.value = data.position || '';
//         if (startDateInput) startDateInput.value = data.startDate || '';
//         if (endDateInput) endDateInput.value = data.endDate || '';
//         if (responsibilitiesInput) responsibilitiesInput.value = data.responsibilities || '';
//         if (aboutInput) aboutInput.value = data.about || '';

//         // Set the photo if available
//         if (data.photoBase64 && photoInput) {
//             const img = document.createElement('img');
//             img.src = data.photoBase64;
//             img.alt = 'Photo';
//             img.style.width = '150px';
//             img.style.height = '150px';
//             img.style.borderRadius = '50%';
//             img.style.objectFit = 'cover';
//             photoInput.parentElement?.insertAdjacentElement('beforeend', img);
//         }
//     }
// };

// // Function to generate resume HTML
// const generateResumeHTML = async (): Promise<string> => {
//     const nameInput = document.getElementById('name') as HTMLInputElement | null;
//     const emailInput = document.getElementById('email') as HTMLInputElement | null;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//     const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//     const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//     const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//     const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//     const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//     const companyInput = document.getElementById('company') as HTMLInputElement | null;
//     const positionInput = document.getElementById('position') as HTMLInputElement | null;
//     const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//     const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//     const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//     const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//     const photoInput = document.getElementById('photo') as HTMLInputElement | null;

//     // Basic validation
//     if (!nameInput || !emailInput || !phoneInput || !addressInput ||
//         !institutionInput || !degreeInput || !graduationDateInput ||
//         !skillsInput || !companyInput || !positionInput ||
//         !startDateInput || !endDateInput || !responsibilitiesInput) {
//         alert('Please ensure all required fields are present.');
//         return '';
//     }

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const phone = phoneInput.value.trim();
//     const address = addressInput.value.trim();
//     const photoBase64 = photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : '';

//     const institution = institutionInput.value.trim();
//     const degree = degreeInput.value.trim();
//     const graduationDate = graduationDateInput.value.trim();
//     const skills = skillsInput.value.trim();
//     const company = companyInput.value.trim();
//     const position = positionInput.value.trim();
//     const startDate = startDateInput.value.trim();
//     const endDate = endDateInput.value.trim();
//     const responsibilities = responsibilitiesInput.value.trim();
//     const about = aboutInput ? aboutInput.value.trim() : '';

//     // Validate if all fields are filled
//     if (!name || !email || !phone || !address || !institution ||
//         !degree || !graduationDate || !skills || !company ||
//         !position || !startDate || !endDate || !responsibilities) {
//         alert('Please fill in all required fields.');
//         return '';
//     }

//     // Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return '';
//     }

//     // Validate phone number (example: basic validation for 10-digit phone numbers)
//     const phonePattern = /^\d{10}$/;  // Adjust regex pattern as needed
//     if (!phonePattern.test(phone)) {
//         alert('Please enter a valid phone number (10 digits).');
//         return '';
//     }

//     // Validate dates (simple check)
//     if (new Date(startDate) > new Date(endDate)) {
//         alert('End date cannot be before the start date.');
//         return '';
//     }

//     // Generate resume HTML
//     return `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Resume</title>
//             <style>
//                 .resume-container {
//                     width: 90%;
//                     max-width: 800px;
//                     text-align: center;
//                     margin: 0 auto;
//                     padding: 20px;
//                     box-sizing: border-box;
//                     border: 2px solid #4a0746;
//                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                     background-color: #f1def1;
//                 }
//                 .resume-header img {
//                     width: 150px;
//                     height: 150px;
//                     border-radius: 50%;
//                     object-fit: cover;
//                     margin-bottom: 10px;
//                 }
//                 .resume-section {
//                     margin-bottom: 20px;
//                     padding: 10px;
//                     border: 1px solid #9a8d99;
//                 }
//                 .resume-section h2 {
//                     font-size: 20px;
//                     margin-bottom: 10px;
//                 }
//             </style>
//         </head>
//         <body>
//             <div class="resume-container">
//                 <div class="resume-header">
//                     ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
//                     <h1>${name}</h1>
//                     <p>Email: ${email}</p>
//                     <p>Phone: ${phone}</p>
//                     <p>Address: ${address}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Education</h2>
//                     <p><strong>Institution: ${institution}</strong></p>
//                     <p>Degree: ${degree}</p>
//                     <p>Graduation Date: ${graduationDate}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Skills</h2>
//                     <p>${skills}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>Work Experience</h2>
//                     <p><strong>${company}</strong> - ${position}</p>
//                     <p>Start Date: ${startDate}</p>
//                     <p>End Date: ${endDate || 'Present'}</p>
//                     <p>Responsibilities: ${responsibilities}</p>
//                 </div>
//                 <div class="resume-section">
//                     <h2>About</h2>
//                     <p>${about}</p>
//                 </div>
//             </div>
//         </body>
//         </html>
//     `;
// };

// // Event listeners and functions
// document.addEventListener('DOMContentLoaded', () => {
//     const generateButton = document.getElementById('generate-resume') as HTMLButtonElement | null;
//     const downloadButton = document.getElementById('download-resume') as HTMLButtonElement | null;
//     const editButton = document.getElementById('edit-resume') as HTMLButtonElement | null;
//     const shareButton = document.getElementById('share-resume') as HTMLButtonElement | null;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement | null;
//     const resumeContent = document.getElementById('resume-content') as HTMLElement | null;
    
//     if (generateButton && downloadButton && editButton && shareButton && resumeOutput && resumeContent) {
//         let resumeData: any = {};

//         generateButton.addEventListener('click', async () => {
//             const resumeHTML = await generateResumeHTML();
//             if (resumeHTML) {
//                 resumeContent.innerHTML = resumeHTML;
//                 resumeOutput.classList.remove('hidden');
//                 downloadButton.classList.remove('hidden');
//                 editButton.classList.remove('hidden');
//                 shareButton.classList.remove('hidden');

//                 // Save the resume data for later use
//                 const nameInput = document.getElementById('name') as HTMLInputElement | null;
//                 const emailInput = document.getElementById('email') as HTMLInputElement | null;
//                 const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
//                 const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
//                 const institutionInput = document.getElementById('institution') as HTMLInputElement | null;
//                 const degreeInput = document.getElementById('degree') as HTMLInputElement | null;
//                 const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement | null;
//                 const skillsInput = document.getElementById('skills') as HTMLTextAreaElement | null;
//                 const companyInput = document.getElementById('company') as HTMLInputElement | null;
//                 const positionInput = document.getElementById('position') as HTMLInputElement | null;
//                 const startDateInput = document.getElementById('start-date') as HTMLInputElement | null;
//                 const endDateInput = document.getElementById('end-date') as HTMLInputElement | null;
//                 const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement | null;
//                 const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement | null;
//                 const photoInput = document.getElementById('photo') as HTMLInputElement | null;

//                 resumeData = {
//                     name: nameInput?.value || '',
//                     email: emailInput?.value || '',
//                     phone: phoneInput?.value || '',
//                     address: addressInput?.value || '',
//                     institution: institutionInput?.value || '',
//                     degree: degreeInput?.value || '',
//                     graduationDate: graduationDateInput?.value || '',
//                     skills: skillsInput?.value || '',
//                     company: companyInput?.value || '',
//                     position: positionInput?.value || '',
//                     startDate: startDateInput?.value || '',
//                     endDate: endDateInput?.value || '',
//                     responsibilities: responsibilitiesInput?.value || '',
//                     about: aboutInput?.value || '',
//                     photoBase64: photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : ''
//                 };

//                 clearInputFields();
//             }
//         });

//         downloadButton.addEventListener('click', () => {
//             if (resumeContent) {
//                 const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
//                 const url = URL.createObjectURL(resumeBlob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = 'resume.html';
//                 a.click();
//                 URL.revokeObjectURL(url);
//             }
//         });

//         editButton.addEventListener('click', () => {
//             if (resumeOutput) {
//                 resumeOutput.classList.add('hidden');
//                 populateInputFields(resumeData);
//             }
//         });

//         shareButton.addEventListener('click', () => {
//             const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
//             window.open(resumeURL, '_blank');
//         });

//         // Toggle skills visibility
//         const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
//         const skillsContent = document.getElementById('skills-content') as HTMLElement | null;

//         if (toggleSkillsButton && skillsContent) {
//             toggleSkillsButton.addEventListener('click', () => {
//                 if (skillsContent.classList.contains('hidden')) {
//                     skillsContent.classList.remove('hidden');
//                     toggleSkillsButton.textContent = 'Hide Skills';
//                 } else {
//                     skillsContent.classList.add('hidden');
//                     toggleSkillsButton.textContent = 'Show Skills';
//                 }
//             });
//         }

//         // Navigation toggle script
//         const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
//         const navLinks = document.getElementById('nav-links') as HTMLElement | null;

//         if (navToggle && navLinks) {
//             navToggle.addEventListener('click', () => {
//                 navLinks.classList.toggle('active');
//             });
//         }
//     }
// });




















// Utility function to convert image file to Base64 string
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

// Function to clear all input fields
const clearInputFields = () => {
    const inputs = document.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
    inputs.forEach(input => {
        if (input.type === 'file') {
            (input as HTMLInputElement).value = ''; // Clear file input
        } else {
            input.value = ''; // Clear text input
        }
    });
};

// Function to populate input fields with existing data
const populateInputFields = (data: any) => {
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
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
    const photoInput = document.getElementById('photo') as HTMLInputElement | null;

    if (data) {
        if (nameInput) nameInput.value = data.name || '';
        if (emailInput) emailInput.value = data.email || '';
        if (phoneInput) phoneInput.value = data.phone || '';
        if (addressInput) addressInput.value = data.address || '';
        if (institutionInput) institutionInput.value = data.institution || '';
        if (degreeInput) degreeInput.value = data.degree || '';
        if (graduationDateInput) graduationDateInput.value = data.graduationDate || '';
        if (skillsInput) skillsInput.value = data.skills || '';
        if (companyInput) companyInput.value = data.company || '';
        if (positionInput) positionInput.value = data.position || '';
        if (startDateInput) startDateInput.value = data.startDate || '';
        if (endDateInput) endDateInput.value = data.endDate || '';
        if (responsibilitiesInput) responsibilitiesInput.value = data.responsibilities || '';
        if (aboutInput) aboutInput.value = data.about || '';

        // Set the photo if available
        if (data.photoBase64 && photoInput) {
            const img = document.createElement('img');
            img.src = data.photoBase64;
            img.alt = 'Photo';
            img.style.width = '150px';
            img.style.height = '150px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            photoInput.parentElement?.insertAdjacentElement('beforeend', img);
        }
    }
};

// Function to generate resume HTML
const generateResumeHTML = async (): Promise<string> => {
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
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
    const photoInput = document.getElementById('photo') as HTMLInputElement | null;

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
    const photoBase64 = photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : '';

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

    // Validate phone number (example: basic validation for 10-digit phone numbers)
    const phonePattern = /^\d{10}$/;  // Adjust regex pattern as needed
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return '';
    }

    // Validate dates (simple check)
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date cannot be before the start date.');
        return '';
    }

    // Generate resume HTML
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
                    max-width: 800px;
                    text-align: center;
                    margin: 0 auto;
                    padding: 20px;
                    box-sizing: border-box;
                    border: 2px solid #4a0746;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #f1def1;
                }
                .resume-header img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 10px;
                }
                .resume-section {
                    margin-bottom: 20px;
                    padding: 10px;
                    border: 1px solid #9a8d99;
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
                    ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
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

// Event listeners and functions
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement | null;
    const downloadButton = document.getElementById('download-resume') as HTMLButtonElement | null;
    const editButton = document.getElementById('edit-resume') as HTMLButtonElement | null;
    const shareButton = document.getElementById('share-resume') as HTMLButtonElement | null;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement | null;
    const resumeContent = document.getElementById('resume-content') as HTMLElement | null;
    const socialShare = document.getElementById('social-share') as HTMLElement | null;

    if (generateButton && downloadButton && editButton && shareButton && resumeOutput && resumeContent && socialShare) {
        let resumeData: any = {};

        generateButton.addEventListener('click', async () => {
            const resumeHTML = await generateResumeHTML();
            if (resumeHTML) {
                resumeContent.innerHTML = resumeHTML;
                resumeOutput.classList.remove('hidden');
                downloadButton.classList.remove('hidden');
                editButton.classList.remove('hidden');
                shareButton.classList.remove('hidden');

                // Save the resume data for later use
                const nameInput = document.getElementById('name') as HTMLInputElement | null;
                const emailInput = document.getElementById('email') as HTMLInputElement | null;
                const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
                const addressInput = document.getElementById('address') as HTMLTextAreaElement | null;
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
                const photoInput = document.getElementById('photo') as HTMLInputElement | null;

                resumeData = {
                    name: nameInput?.value || '',
                    email: emailInput?.value || '',
                    phone: phoneInput?.value || '',
                    address: addressInput?.value || '',
                    institution: institutionInput?.value || '',
                    degree: degreeInput?.value || '',
                    graduationDate: graduationDateInput?.value || '',
                    skills: skillsInput?.value || '',
                    company: companyInput?.value || '',
                    position: positionInput?.value || '',
                    startDate: startDateInput?.value || '',
                    endDate: endDateInput?.value || '',
                    responsibilities: responsibilitiesInput?.value || '',
                    about: aboutInput?.value || '',
                    photoBase64: photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : ''
                };

                clearInputFields();
            }
        });

        downloadButton.addEventListener('click', () => {
            if (resumeContent) {
                const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
                const url = URL.createObjectURL(resumeBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'resume.html';
                a.click();
                URL.revokeObjectURL(url);
            }
        });

        editButton.addEventListener('click', () => {
            if (resumeOutput) {
                resumeOutput.classList.add('hidden');
                populateInputFields(resumeData);
            }
        });

        shareButton.addEventListener('click', () => {
            if (socialShare) {
                socialShare.classList.toggle('hidden');
            }
        });

        // Social media sharing buttons
        const shareWhatsAppButton = document.getElementById('share-whatsapp') as HTMLButtonElement | null;
        const shareTwitterButton = document.getElementById('share-twitter') as HTMLButtonElement | null;

        if (shareWhatsAppButton) {
            shareWhatsAppButton.addEventListener('click', () => {
                const url = `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out my resume! ' + window.location.href)}`;
                window.open(url, '_blank');
            });
        }

        if (shareTwitterButton) {
            shareTwitterButton.addEventListener('click', () => {
                const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out my resume! ' + window.location.href)}`;
                window.open(url, '_blank');
            });
        }

        // Toggle skills visibility
        const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
        const skillsContent = document.getElementById('skills-content') as HTMLElement | null;

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

        // Navigation toggle script
        const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
        const navLinks = document.getElementById('nav-links') as HTMLElement | null;

        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }
});
