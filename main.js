"use strict";
// // Utility function to convert image file to Base64 string
// const fileToBase64 = (file: File): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(file);
//     });
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// // Function to generate resume HTML
// const generateResumeHTML = async (): Promise<string> => {
//     // Get all inputs
//     const nameInput = document.getElementById('name') as HTMLInputElement;
//     const emailInput = document.getElementById('email') as HTMLInputElement;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement;
//     const addressInput = document.getElementById('address') as HTMLTextAreaElement;
//     const institutionInput = document.getElementById('institution') as HTMLInputElement;
//     const degreeInput = document.getElementById('degree') as HTMLInputElement;
//     const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement;
//     const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
//     const companyInput = document.getElementById('company') as HTMLInputElement;
//     const positionInput = document.getElementById('position') as HTMLInputElement;
//     const startDateInput = document.getElementById('start-date') as HTMLInputElement;
//     const endDateInput = document.getElementById('end-date') as HTMLInputElement;
//     const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement;
//     const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement;
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
//     const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
//     const downloadButton = document.getElementById('download-resume') as HTMLButtonElement;
//     const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
//     const shareButton = document.getElementById('share-resume') as HTMLButtonElement;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement;
//     const resumeContent = document.getElementById('resume-content') as HTMLElement;
//     generateButton.addEventListener('click', async () => {
//         const resumeHTML = await generateResumeHTML();
//         if (resumeHTML) {
//             resumeContent.innerHTML = resumeHTML;
//             resumeOutput.classList.remove('hidden');
//             downloadButton.classList.remove('hidden');
//             editButton.classList.remove('hidden');
//             shareButton.classList.remove('hidden');
//             // Clear input fields after generating the resume
//             clearInputFields();
//         }
//     });
//     downloadButton.addEventListener('click', () => {
//         const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
//         const url = URL.createObjectURL(resumeBlob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'resume.html';
//         a.click();
//         URL.revokeObjectURL(url);
//     });
//     editButton.addEventListener('click', () => {
//         resumeOutput.classList.add('hidden');
//     });
//     shareButton.addEventListener('click', () => {
//         const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
//         window.open(resumeURL, '_blank');
//     });
//     // Toggle skills visibility
//     const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
//     const skillsContent = document.getElementById('skills-content') as HTMLElement;
//     toggleSkillsButton.addEventListener('click', () => {
//         if (skillsContent.classList.contains('hidden')) {
//             skillsContent.classList.remove('hidden');
//             toggleSkillsButton.textContent = 'Hide Skills';
//         } else {
//             skillsContent.classList.add('hidden');
//             toggleSkillsButton.textContent = 'Show Skills';
//         }
//     });
//     // Navigation toggle script
//     const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement;
//     const navLinks = document.getElementById('nav-links') as HTMLElement;
//     navToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });
// Utility function to convert image file to Base64 string
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
// Function to clear all input fields
const clearInputFields = () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.type === 'file') {
            input.value = ''; // Clear file input
        }
        else {
            input.value = ''; // Clear text input
        }
    });
};
// Function to populate input fields with existing data
const populateInputFields = (data) => {
    var _a;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const institutionInput = document.getElementById('institution');
    const degreeInput = document.getElementById('degree');
    const graduationDateInput = document.getElementById('graduation-date');
    const skillsInput = document.getElementById('skills');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const responsibilitiesInput = document.getElementById('responsibilities');
    const aboutInput = document.getElementById('about-me');
    const photoInput = document.getElementById('photo');
    if (data) {
        if (nameInput)
            nameInput.value = data.name || '';
        if (emailInput)
            emailInput.value = data.email || '';
        if (phoneInput)
            phoneInput.value = data.phone || '';
        if (addressInput)
            addressInput.value = data.address || '';
        if (institutionInput)
            institutionInput.value = data.institution || '';
        if (degreeInput)
            degreeInput.value = data.degree || '';
        if (graduationDateInput)
            graduationDateInput.value = data.graduationDate || '';
        if (skillsInput)
            skillsInput.value = data.skills || '';
        if (companyInput)
            companyInput.value = data.company || '';
        if (positionInput)
            positionInput.value = data.position || '';
        if (startDateInput)
            startDateInput.value = data.startDate || '';
        if (endDateInput)
            endDateInput.value = data.endDate || '';
        if (responsibilitiesInput)
            responsibilitiesInput.value = data.responsibilities || '';
        if (aboutInput)
            aboutInput.value = data.about || '';
        // Set the photo if available
        if (data.photoBase64 && photoInput) {
            const img = document.createElement('img');
            img.src = data.photoBase64;
            img.alt = 'Photo';
            img.style.width = '150px';
            img.style.height = '150px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            (_a = photoInput.parentElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', img);
        }
    }
};
// Function to generate resume HTML
const generateResumeHTML = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const institutionInput = document.getElementById('institution');
    const degreeInput = document.getElementById('degree');
    const graduationDateInput = document.getElementById('graduation-date');
    const skillsInput = document.getElementById('skills');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const responsibilitiesInput = document.getElementById('responsibilities');
    const aboutInput = document.getElementById('about-me');
    const photoInput = document.getElementById('photo');
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
    const photoBase64 = photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? yield fileToBase64(photoInput.files[0]) : '';
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
    const phonePattern = /^\d{10}$/; // Adjust regex pattern as needed
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
});
// Event listeners and functions
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume');
    const downloadButton = document.getElementById('download-resume');
    const editButton = document.getElementById('edit-resume');
    const shareButton = document.getElementById('share-resume');
    const resumeOutput = document.getElementById('resume-output');
    const resumeContent = document.getElementById('resume-content');
    if (generateButton && downloadButton && editButton && shareButton && resumeOutput && resumeContent) {
        let resumeData = {};
        generateButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const resumeHTML = yield generateResumeHTML();
            if (resumeHTML) {
                resumeContent.innerHTML = resumeHTML;
                resumeOutput.classList.remove('hidden');
                downloadButton.classList.remove('hidden');
                editButton.classList.remove('hidden');
                shareButton.classList.remove('hidden');
                // Save the resume data for later use
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const phoneInput = document.getElementById('phone');
                const addressInput = document.getElementById('address');
                const institutionInput = document.getElementById('institution');
                const degreeInput = document.getElementById('degree');
                const graduationDateInput = document.getElementById('graduation-date');
                const skillsInput = document.getElementById('skills');
                const companyInput = document.getElementById('company');
                const positionInput = document.getElementById('position');
                const startDateInput = document.getElementById('start-date');
                const endDateInput = document.getElementById('end-date');
                const responsibilitiesInput = document.getElementById('responsibilities');
                const aboutInput = document.getElementById('about-me');
                const photoInput = document.getElementById('photo');
                resumeData = {
                    name: (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || '',
                    email: (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || '',
                    phone: (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || '',
                    address: (addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) || '',
                    institution: (institutionInput === null || institutionInput === void 0 ? void 0 : institutionInput.value) || '',
                    degree: (degreeInput === null || degreeInput === void 0 ? void 0 : degreeInput.value) || '',
                    graduationDate: (graduationDateInput === null || graduationDateInput === void 0 ? void 0 : graduationDateInput.value) || '',
                    skills: (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || '',
                    company: (companyInput === null || companyInput === void 0 ? void 0 : companyInput.value) || '',
                    position: (positionInput === null || positionInput === void 0 ? void 0 : positionInput.value) || '',
                    startDate: (startDateInput === null || startDateInput === void 0 ? void 0 : startDateInput.value) || '',
                    endDate: (endDateInput === null || endDateInput === void 0 ? void 0 : endDateInput.value) || '',
                    responsibilities: (responsibilitiesInput === null || responsibilitiesInput === void 0 ? void 0 : responsibilitiesInput.value) || '',
                    about: (aboutInput === null || aboutInput === void 0 ? void 0 : aboutInput.value) || '',
                    photoBase64: photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? yield fileToBase64(photoInput.files[0]) : ''
                };
                clearInputFields();
            }
        }));
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
            const resumeURL = 'https://example.com/resume.html'; // Replace with the actual URL
            window.open(resumeURL, '_blank');
        });
        // Toggle skills visibility
        const toggleSkillsButton = document.getElementById('toggle-skills');
        const skillsContent = document.getElementById('skills-content');
        if (toggleSkillsButton && skillsContent) {
            toggleSkillsButton.addEventListener('click', () => {
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
        // Navigation toggle script
        const navToggle = document.getElementById('nav-toggle');
        const navLinks = document.getElementById('nav-links');
        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }
});
