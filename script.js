const toggleSwitch = document.getElementById('theme-toggle');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        document.querySelector('.container').classList.add('dark');
        document.querySelector('.container').classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        document.querySelector('.container').classList.add('light');
        document.querySelector('.container').classList.remove('dark');
    }
});

// Check the user's preference and apply it
if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    document.querySelector('.container').classList.add('dark');
    document.querySelector('.container').classList.remove('light');
} else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    document.querySelector('.container').classList.add('light');
    document.querySelector('.container').classList.remove('dark');
}

// Store the user's preference
toggleSwitch.addEventListener('change', () => {
    localStorage.setItem('theme', toggleSwitch.checked ? 'dark' : 'light');
});

function submitEmail() {
    const email = document.getElementById('email').value;
    if (email) {
        // Here, you can add logic to send the email to the backend for verification
        
        // After email submission, show the password input section
        document.getElementById('passwordSection').classList.remove('hidden');
        document.getElementById('emailSubmit').classList.add('hidden'); // Hide email submit button
    } else {
        alert('Please enter your email.');
    }
}

function submitPassword() {
    const password = document.getElementById('password').value;
    if (password) {
        // Here, you can add logic to handle password submission to the backend
        alert('Password submitted!');
    } else {
        alert('Please enter your password.');
    }
}