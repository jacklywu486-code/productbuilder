class LottoDisplay extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            .lotto-numbers {
                display: flex;
                justify-content: center;
                gap: 10px;
                flex-wrap: wrap;
            }
            .lotto-number {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                background-color: var(--secondary-color);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
        `;
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'lotto-numbers');
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    updateNumbers(numbers) {
        const wrapper = this.shadowRoot.querySelector('.lotto-numbers');
        wrapper.innerHTML = '';
        numbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.setAttribute('class', 'lotto-number');
            numberElement.textContent = number;
            wrapper.appendChild(numberElement);
        });
    }
}

customElements.define('lotto-display', LottoDisplay);

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', currentTheme);
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const lottoDisplay = document.querySelector('lotto-display');
    const numbers = generateUniqueNumbers(6, 1, 45);
    lottoDisplay.updateNumbers(numbers);
});

function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
