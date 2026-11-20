const emailInput = '.login-form__input[type="email"]';
const passwordInput = '#login-password';

function setFieldError(input, error, message) {
    input.setAttribute('aria-invalid', 'true');
    error.textContent = message;
    error.hidden = false;
}

function clearFieldError(input, error) {
    input.removeAttribute('aria-invalid');
    error.textContent = '';
    error.hidden = true;
}

function validateField(input, error, fieldName) {
    if (!input.value.trim()) {
        setFieldError(input, error, `${fieldName}: Enter your ${fieldName.toLowerCase()}.`);
        return false;
    }

    if (input.type === 'email' && !input.validity.valid) {
        setFieldError(input, error, 'Email: Enter a valid email address.');
        return false;
    }

    clearFieldError(input, error);
    return true;
}

function setupPasswordToggle(form) {
    const input = form.querySelector(passwordInput);
    const toggle = form.querySelector('.login-form__toggle');
    const eye = form.querySelector('.login-form__toggle-icon--eye');
    const eyeOff = form.querySelector('.login-form__toggle-icon--eye-off');

    if (!input || !toggle || !eye || !eyeOff) {
        return;
    }

    toggle.addEventListener('click', () => {
        const isVisible = input.type === 'text';
        input.type = isVisible ? 'password' : 'text';
        toggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
        toggle.setAttribute('aria-pressed', String(!isVisible));
        eye.toggleAttribute('hidden', !isVisible);
        eyeOff.toggleAttribute('hidden', isVisible);
    });
}

export function initLoginInteractions(root = document) {
    const form = root.querySelector('.login-form');

    if (!form) {
        return;
    }

    const email = form.querySelector(emailInput);
    const password = form.querySelector(passwordInput);
    const emailError = form.querySelector('#login-email-error');
    const passwordError = form.querySelector('#login-password-error');
    const status = form.querySelector('.login-form__status');

    if (!email || !password || !emailError || !passwordError || !status) {
        return;
    }

    setupPasswordToggle(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValid = validateField(email, emailError, 'Email');
        const passwordValid = validateField(password, passwordError, 'Password');

        if (!emailValid || !passwordValid) {
            status.hidden = true;
            (emailValid ? password : email).focus();
            return;
        }

        status.textContent = 'Login is not connected yet.';
        status.hidden = false;
    });

    email.addEventListener('input', () => {
        if (email.getAttribute('aria-invalid') === 'true') {
            validateField(email, emailError, 'Email');
        }
    });

    password.addEventListener('input', () => {
        if (password.getAttribute('aria-invalid') === 'true') {
            validateField(password, passwordError, 'Password');
        }
    });
}

initLoginInteractions();
