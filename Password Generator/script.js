document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);
document.getElementById('mode-toggle').addEventListener('click', toggleMode);

function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.querySelector('.mode-toggle i');
    modeIcon.classList.toggle('fa-moon');
    modeIcon.classList.toggle('fa-sun');
}
