//=================================================================================================//
//                   navbar , skills and links toggle functionality start



// Get navbar section elements by their IDs
const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
const navLinks = document.getElementById('nav-links') as HTMLElement | null;


// Get skills ssection elements by their IDs
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsContent = document.getElementById('skills-content') as HTMLParagraphElement;


// Get link section elements by their IDs
const toggleButtonlink = document.getElementById('toggle-links') as HTMLButtonElement; 
const linksContent = document.getElementById('links-content') as HTMLParagraphElement; 


//skills and links toggale function
const toggleFunction = (btn: HTMLButtonElement, content: HTMLParagraphElement, text: string) => {
    // Toggle the 'hidden' class on the content
    content.classList.toggle('hidden');

    // Update the button text based on visibility
    if (content.classList.contains('hidden')) {
        btn.textContent = `Show ${text}`;
    } else {
        btn.textContent = `Hide ${text}`;
    }
};


//attach with button and Ensure elements are not null before adding event listeners
if (toggleButton && skillsContent) {
    toggleButton.addEventListener('click', () => toggleFunction(toggleButton, skillsContent, 'Skills'));
}


if (toggleButtonlink && linksContent) {
    toggleButtonlink.addEventListener('click', () => toggleFunction(toggleButtonlink, linksContent, 'Links'));
}


// Navigation toggle script
const navToggleFunction = ()=>{
    if (navToggle && navLinks) { navLinks.classList.toggle('active');}
}

//attach with button and Ensure elements are not null before adding event listeners
navToggle?.addEventListener('click',navToggleFunction)


//                   navbar , skills and links toggle functionality completed
//=============================================================================================================//



//============================================================================================================//
//                   resume generator functionality start


//Get input Element by ID
//personal information section
const photoInput = document.getElementById('photo') as HTMLInputElement 
const nameInput = document.getElementById('name') as HTMLInputElement 
const emailInput = document.getElementById('email') as HTMLInputElement 
const phoneInput = document.getElementById('phone') as HTMLInputElement 
const addressInput = document.getElementById('address') as HTMLTextAreaElement 

//Education section
const institutionInput = document.getElementById('institution') as HTMLInputElement 
const degreeInput = document.getElementById('degree') as HTMLInputElement 
const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement

//Skills Section
const skillsInput = document.getElementById('skills') as HTMLInputElement 

//Work experience section
const companyInput = document.getElementById('company') as HTMLInputElement 
const positionInput = document.getElementById('position') as HTMLInputElement 
const startDateInput = document.getElementById('start-date') as HTMLInputElement 
const endDateInput = document.getElementById('end-date') as HTMLInputElement 
const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement

//links section
const linkedInInput = document.getElementById('linkedInInput') as HTMLInputElement
const githubInput = document.getElementById('githubInput') as HTMLInputElement


//                          ---------------------

//Get display Element by ID
const displayPhoto = document.getElementById('displayPhoto') as HTMLImageElement 
const displayName = document.getElementById('displayName') as HTMLParagraphElement
const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement
const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement
const displayAddress = document.getElementById('displayAddress') as HTMLParagraphElement


//Education section
const displayInstitution = document.getElementById('displayInstitution') as HTMLParagraphElement
const displayDegree = document.getElementById('displayDegree') as HTMLParagraphElement
const displayGraduation = document.getElementById('displayGraduation') as  HTMLParagraphElement;


//Skills Section
const displaySkills = document.getElementById('displaySkills') as HTMLParagraphElement


//Work experience section
const displayCompany = document.getElementById('displayCompany') as  HTMLParagraphElement
const displayPosition = document.getElementById('displayPosition') as HTMLParagraphElement;
const displayStartDate = document.getElementById('displayStartDate') as HTMLParagraphElement;
const displayEndDate = document.getElementById('displayEndDate') as HTMLParagraphElement;
const displayResponsibilities = document.getElementById('displayResponsibilities') as HTMLParagraphElement;


//links section
const displayLinks = document.getElementById('displayLinks') as HTMLDivElement


//get divs and headings
const formDiv = document.getElementById('formDiv') as HTMLDivElement
const outputDiv = document.getElementById('outputDiv') as HTMLDivElement
const resumeDiv = document.getElementById('resumeDiv') as HTMLDivElement
const displayMainHeading = document.getElementById('displayMainHeading') as HTMLHeadingElement
const displayHeading = document.getElementById('displayHeading') as HTMLHeadingElement


// get buttons
const genrateResumeButton = document.getElementById('generateResume') as HTMLButtonElement
const downloadResumeButton = document.getElementById('downloadResume') as HTMLButtonElement
const copyResumeButton = document.getElementById('copyResume') as HTMLButtonElement
const navbar = document.getElementById('navbar') as HTMLElement

//                    -----------------------------


//valid formate for input fields
const namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9\-\+\(\) ]+$/;
const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
const githubPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
    

//ccreate two variables
let isValid = true
let isEditing = false


//resume genrator function
const resumeGeneratorHandler = () => {
    isValid = true;


    // Name validation
    if (nameInput.value.trim() === '') {
        alert("Name is Required");
        isValid = false;
    } else if (!namePattern.test(nameInput.value.trim())) {
        alert('Invalid name format. Only letters, spaces, apostrophes, and hyphens are allowed.');
        isValid = false;
    }


    // Email validation
    if (emailInput.value.trim() === '') {
        alert("Email is Required");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        alert('Invalid email format.');
        isValid = false;
    }


    // Phone number validation
    if (phoneInput.value.trim() === '') {
        alert("Phone number is Required");
        isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
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
    } else if (endDateInput.value < startDateInput.value) {
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


    if (isValid) {
        if (isEditing) {
            // Enable
         //personal info section
         nameInput.removeAttribute('readonly')
         emailInput.removeAttribute('readonly')
         phoneInput.removeAttribute('readonly')
         photoInput.removeAttribute('readonly')
         addressInput.removeAttribute('readonly')
         
        //education section
         institutionInput.removeAttribute('readonly')
         degreeInput.removeAttribute('readonly')
         githubInput.removeAttribute('readonly')
         
        //experience section
         companyInput.removeAttribute('readonly')
         positionInput.removeAttribute('readonly')
         startDateInput.removeAttribute('readonly')
         endDateInput.removeAttribute('readonly')
         responsibilitiesInput.removeAttribute('readonly')

         //skills section
         skillsInput.removeAttribute('readonly')

         //links ssection
         githubInput.removeAttribute('readonly')
         linkedInInput.removeAttribute('readonly')

         //hide and show functionality of dives
         if (formDiv) formDiv.style.display = 'block';
         if (resumeDiv) resumeDiv.style.display = 'none';
         if (outputDiv) outputDiv.style.display = 'none';

         //update buttons
         genrateResumeButton.textContent = 'Update Resume'
         downloadResumeButton.style.display = 'none'
         copyResumeButton.style.display = 'none'
      }else{
         
        //get values from inputs given by user  
        //personal information section
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const phonValue = phoneInput.value;
        const addressValue = addressInput.value;
        const photoInputFile = photoInput.files?.[0];
        const photoValue = photoInputFile ? URL.createObjectURL(photoInputFile) : '';

        //education section
        const institutionValue = institutionInput.value;
        const degreeValue = degreeInput.value;
        const graduationDateValue = graduationDateInput.value;

        //skills section
        const skillsValue = skillsInput.value;

        //experince section
        const companyValue = companyInput.value;
        const positionValue = positionInput.value;
        const startDateValue = startDateInput.value;
        const endDateValue = endDateInput.value;
        const responsibilitiesValue = responsibilitiesInput.value;

        //link section
        const linkedInValue = linkedInInput.value;
        const githubValue = githubInput.value;
        //       -----------


        // Set values to display elements
         //creat image element for display image div
         displayPhoto.innerHTML = '';
         const image = document.createElement("img");
         image.src = photoValue;
         image.alt = "Profile Picture";
         image.style.maxWidth = "100%";
         displayPhoto.appendChild(image);
        if (displayName) displayName.textContent = nameValue;
        if (displayEmail) displayEmail.textContent = emailValue;
        if (displayPhone) displayPhone.textContent = phonValue;
        if (displayAddress) displayAddress.textContent = addressValue;

        // Education section
        if (displayInstitution) displayInstitution.textContent = institutionValue;
        if (displayDegree) displayDegree.textContent = degreeValue;
        if (displayGraduation) displayGraduation.textContent = graduationDateValue;

        // Skills Section
        if (displaySkills) displaySkills.textContent = skillsValue;
       
        // Work experience section
        if (displayCompany) displayCompany.textContent = companyValue;
        if (displayPosition) displayPosition.textContent = positionValue;
        if (displayStartDate) displayStartDate.textContent = startDateValue;
        if (displayEndDate) displayEndDate.textContent = endDateValue;
        if (displayResponsibilities) displayResponsibilities.textContent = responsibilitiesValue;

        // Links section
        const linkHTML = `
        <div class="links-container">
                <a href="${linkedInValue}" target="_blank">LinkedIn Profile</a>
                <a href="${githubValue}" target="_blank">GitHub Profile</a>
        </div>`;
        displayLinks.innerHTML = linkHTML;

        // Hide the form section
        if (displayMainHeading) displayMainHeading.innerText = 'Milestone 03';

        // Hide the form section
        if (displayHeading) displayHeading.innerText = 'Dynamic Resume';

        // Hide the form section
        if (formDiv) formDiv.style.display = 'none';
        if (resumeDiv) resumeDiv.style.display = 'none';
        if (outputDiv) outputDiv.style.display = 'block';



        nameInput.setAttribute('readonly','reue')
        emailInput.setAttribute('readonly','true')
        phoneInput.setAttribute('readonly','true')
        photoInput.setAttribute('readonly','reue')
        addressInput.setAttribute('readonly','reue')
        institutionInput.setAttribute('readonly','reue')
        degreeInput.setAttribute('readonly','reue')
        githubInput.setAttribute('readonly','reue')
        companyInput.setAttribute('readonly','reue')
        positionInput.setAttribute('readonly','reue')
        startDateInput.setAttribute('readonly','reue')
        endDateInput.setAttribute('readonly','reue')
        responsibilitiesInput.setAttribute('readonly','reue')
        skillsInput.setAttribute('readonly','reue')
        displayLinks.setAttribute('readonly','reue')
    
        //buttons update
        genrateResumeButton.textContent = 'Edit Resume'
        downloadResumeButton.style.display = 'block'
        copyResumeButton.style.display = 'block'


        // Store data in localStorage
        const uniqueKey = nameValue.trim().replace(/\s+/g, '-').toLowerCase();
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
        const uniqueUrl = `${window.location.origin}?resume=${uniqueKey}`;
        copyResumeButton.textContent = `Copy URL ${uniqueUrl}`;
        copyResumeButton.classList.remove('hidden');
        downloadResumeButton.classList.remove('hidden');
    }

      isEditing = !isEditing
    }
}

genrateResumeButton?.addEventListener('click', resumeGeneratorHandler);

//                         resume generate functionality completed
//==========================================================================================================//


// Function to handle resume download
const downloadButtonHandle = () => {
    
    // Hide other buttons and elements that should not be printed
    if (genrateResumeButton && copyResumeButton && downloadResumeButton && displayMainHeading && displayHeading ) {
        genrateResumeButton.style.display = 'none';
        downloadResumeButton.style.display = 'none';
        copyResumeButton.style.display = 'none';
        displayMainHeading.style.display = 'none';
        displayHeading.style.display = 'none';
        navbar.style.display = 'none'
       

    }

    // Trigger print
    window.print();

     // show other buttons and elements that should not be printed
    if (genrateResumeButton && copyResumeButton && downloadResumeButton && displayMainHeading && displayHeading ) {
        genrateResumeButton.style.display = 'block';
        downloadResumeButton.style.display = 'block';
        copyResumeButton.style.display = 'block';
        displayMainHeading.style.display = 'block';
        displayHeading.style.display = 'block';
        navbar.style.display = 'block'
        navbar.style.display = 'flex'
        navbar.style.alignItems = 'center'
      
    }
};
// Attach event listener to the download btn button
downloadResumeButton.addEventListener('click', downloadButtonHandle);


//                      download function completed
//========================================================================================================//


// Function to copy the resume link
const copyLinkHandle = () => {
    const link = copyResumeButton.textContent?.split(' ')[2]; // Extract URL from button text
    if (link) {
        navigator.clipboard.writeText(link).then(() => {
            alert(`Link copied to clipboard! Your Link`);
        }).catch(err => {
            console.error('Failed to copy link: ', err);
        });
    }
};

// Attach event listener to the copy resume button
copyResumeButton.addEventListener('click',copyLinkHandle)

// display resume url
const displayResumeFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const resumeKey = params.get('resume');

    if (resumeKey) {
        const data = localStorage.getItem(resumeKey);
        if (data) {
            const {
                name,
                photo,
                email,
                linkedIn,
                github,
                address,
                phone,
                institution,
                degree,
                graduationDate,
                company,
                position,
                startDate,
                endDate,
                responsibilities,
                skills
            } = JSON.parse(data);

            // Set values to display elements
            displayPhoto.innerHTML = `<img src="${photo}" alt="Profile Picture" style="max-width: 100%;">`;
            if (displayPhoto) displayPhoto.src = photo;
            if (displayName) displayName.textContent = name;
            if (displayEmail) displayEmail.textContent = email;
            if (displayPhone) displayPhone.textContent = phone;
            if (displayAddress) displayAddress.textContent = address;
            if (displayInstitution) displayInstitution.textContent = institution;
            if (displayDegree) displayDegree.textContent = degree;
            if (displayGraduation) displayGraduation.textContent = graduationDate;
            if (displayCompany) displayCompany.textContent = company;
            if (displayPosition) displayPosition.textContent = position;
            if (displayStartDate) displayStartDate.textContent = startDate;
            if (displayEndDate) displayEndDate.textContent = endDate;
            if (displayResponsibilities) displayResponsibilities.textContent = responsibilities;
            if (displaySkills) displaySkills.textContent = skills;

             const linkHTML = `
                <div class="links-container">
                        <a href="${linkedIn}" target="_blank">LinkedIn Profile</a>
                        <a href="${github}" target="_blank">GitHub Profile</a>
                </div>`;
            displayLinks.innerHTML = linkHTML;

            // Hide the form and show the resume
            if (formDiv) formDiv.style.display = 'none';
            if (resumeDiv) resumeDiv.style.display = 'none';
            if (outputDiv) outputDiv.style.display = 'block';

            // Hide elements that should not be visible
            if (displayMainHeading) displayMainHeading.style.display = 'none';
            if (displayHeading) displayHeading.style.display = 'none';
            if (navbar) navbar.style.display = 'none';
            if (genrateResumeButton) genrateResumeButton.style.display = 'none';
            if (downloadResumeButton) downloadResumeButton.style.display = 'none';
            if (copyResumeButton) copyResumeButton.style.display = 'none';
            
        } else {
            // Handle case where data is not found
            formDiv.style.display = 'none';
            resumeDiv.style.display = 'none';
            outputDiv.style.display = 'none'
        }
    } else {
        // Handle case where there is no resume key
        formDiv.style.display = 'block';
        resumeDiv.style.display = 'block';
        outputDiv.style.display = 'none'


        // Ensure that all elements are visible if no resume is displayed
        if (displayMainHeading) displayMainHeading.style.display = 'block';
        if (displayHeading) displayHeading.style.display = 'block';
        if (navbar) navbar.style.display = 'block';
        if (genrateResumeButton) genrateResumeButton.style.display = 'block';
        if (downloadResumeButton) downloadResumeButton.style.display = 'block';
        if (copyResumeButton) copyResumeButton.style.display = 'block';
        
    }
};

// Initialize the page based on URL parameters
displayResumeFromUrl();





//                   resume generator functionality completed
//=============================================================================================================//






























    
    

    

        
    