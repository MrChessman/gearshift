/* Home interactions: chip and heart toggles. Client-side state only —
   no fetching, persistence, or filtering (that belongs to services later). */

const HEART_LABEL_OFF = 'Save this build';
const HEART_LABEL_ON = 'Remove from saved builds';

/* Flips a button's aria-pressed and returns the new state.
   Native buttons already fire click on Enter and Space, so keyboard
   activation needs no extra key handling. */
function togglePressed(button) {
    const pressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', pressed ? 'false' : 'true');
    return !pressed;
}

/* Chips toggle independently: several categories can be on at once.
   One listener on the container covers every chip, present and future. */
export function initCategoryChips() {
    const container = document.querySelector('.category-chips-container');
    if (!container) return;

    container.addEventListener('click', (event) => {
        const chip = event.target.closest('.category-chip');
        if (!chip) return;
        togglePressed(chip);
    });
}

/* Hearts each flip their own saved state, and the label names the
   action the next click performs. */
export function initBuildHearts() {
    const hearts = document.querySelectorAll('.build-card__heart');
    hearts.forEach((heart) => {
        heart.addEventListener('click', () => {
            const pressed = togglePressed(heart);
            heart.setAttribute('aria-label', pressed ? HEART_LABEL_ON : HEART_LABEL_OFF);
        });
    });
}

/* Module scripts run after the HTML is parsed, so the elements exist here. */
initCategoryChips();
initBuildHearts();
