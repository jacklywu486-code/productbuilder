class ContactForm extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                margin-top: 50px;
                padding-top: 30px;
                border-top: 2px solid var(--shadow-color);
            }
            .contact-form {
                text-align: left;
                max-width: 400px;
                margin: 0 auto;
            }
            .contact-form h2 {
                color: var(--text-color);
                font-size: 1.8rem;
                margin-bottom: 25px;
                text-align: center;
                font-weight: 800;
            }
            .form-group {
                margin-bottom: 20px;
            }
            .form-group label {
                display: block;
                color: var(--text-color);
                margin-bottom: 8px;
                font-weight: 600;
                font-size: 0.9rem;
            }
            .form-group input, .form-group textarea {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid var(--shadow-color);
                border-radius: 12px;
                background-color: var(--container-bg-color);
                color: var(--text-color);
                box-sizing: border-box;
                font-family: inherit;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            .form-group input:focus, .form-group textarea:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);
            }
            .form-group textarea {
                height: 120px;
                resize: vertical;
            }
            .submit-btn {
                width: 100%;
                background-color: var(--secondary-color);
                color: white;
                border: none;
                padding: 15px;
                font-size: 1.1rem;
                font-weight: bold;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(255, 127, 80, 0.4);
                margin-top: 10px;
            }
            .submit-btn:hover {
                background-color: #ff6347;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255, 127, 80, 0.5);
            }
            .submit-btn:active {
                transform: translateY(0);
            }
            ::placeholder {
                color: #aaa;
                opacity: 0.7;
            }
        `;
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'contact-form');
        wrapper.innerHTML = `
            <h2>제휴 문의</h2>
            <form action="https://formspree.io/f/xvznlylz" method="POST">
                <div class="form-group">
                    <label for="name">성함 / 업체명</label>
                    <input type="text" id="name" name="name" required placeholder="예: 홍길동 / (주)파트너스">
                </div>
                <div class="form-group">
                    <label for="email">이메일 주소</label>
                    <input type="email" id="email" name="_replyto" required placeholder="example@email.com">
                </div>
                <div class="form-group">
                    <label for="message">문의 내용</label>
                    <textarea id="message" name="message" required placeholder="제휴 제안이나 궁금하신 내용을 입력해주세요."></textarea>
                </div>
                <button type="submit" class="submit-btn">문의 보내기</button>
            </form>
        `;
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('contact-form', ContactForm);

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
