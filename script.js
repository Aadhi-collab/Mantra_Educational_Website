// 1. Mobile Hamburger Navigation Overlay
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// 2. Interactive Accordion FAQ Logic (Home Page)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        // Toggle the target clicked item
        item.classList.toggle('active');
        
        // Dynamic closing of other entries (Optional accordion strict effect)
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// 3. Robust High-Fidelity Front-End Form Validation Logic (Registration Page)
const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop default request transmission
        
        let isValid = true;
        
        // Grab values
        const fullName = document.getElementById('fullName');
        const studentEmail = document.getElementById('studentEmail');
        const selectedTrack = document.getElementById('selectedTrack');
        const statusMsg = document.getElementById('formStatus');
        
        // Validate Full Name
        if (fullName.value.trim().length < 3) {
            fullName.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            fullName.parentElement.classList.remove('invalid');
        }
        
        // Validate Email with regex matching standard forms
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(studentEmail.value.trim())) {
            studentEmail.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            studentEmail.parentElement.classList.remove('invalid');
        }
        
        // Validate Selection Dropdown choice
        if (selectedTrack.value === "") {
            selectedTrack.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            selectedTrack.parentElement.classList.remove('invalid');
        }
        
        // Render success notice banner if fully compliant
        if (isValid) {
            statusMsg.className = "form-status-message success";
            statusMsg.textContent = "✓ Registration Successful! Welcome to Aegis Institute.";
            // Reset input fields
            registrationForm.reset();
        } else {
            statusMsg.style.display = "none";
        }
    });
}