const openSignupModalBtn = document.getElementById('openSignupModal');
const signupModal = document.getElementById('signupModal');
const successModal = document.getElementById('successModal');
const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
const signupForm = document.getElementById('signupForm');

openSignupModalBtn.addEventListener('click', () => {
    signupModal.classList.remove('hidden');
});

signupModal.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.classList.add('hidden');
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    signupModal.classList.add('hidden');
    successModal.classList.remove('hidden');
            
    setTimeout(() => {
        successModal.classList.add('hidden');
    }, 3000);
});

closeSuccessModalBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.add('hidden');
    };
});