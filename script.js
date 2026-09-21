/* ==================================================
   АВТО-ОС · Логика приложения
   ================================================== */

// ==================== КОНСТАНТЫ ====================

const RU_LETTERS = ['А','В','Е','К','М','Н','О','Р','С','Т','У','Х'];

const CAR_BRANDS = [
  'Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen',
  'Kia', 'Hyundai', 'Nissan', 'Mazda', 'Honda',
  'Mitsubishi', 'Subaru', 'Lexus', 'Volvo', 'Skoda',
  'Ford', 'Chevrolet', 'Renault', 'Peugeot', 'Citroen',
  'Lada', 'УАЗ', 'Chery', 'Haval', 'Geely', 'Exeed'
];

const CAR_MODELS = {
  'Toyota': ['Camry', 'Corolla', 'Mark II', 'Chaser', 'Cresta', 'RAV4', 'Land Cruiser', 'Land Cruiser Prado', 'Highlander', 'Prius', 'Avensis', 'Yaris', 'Supra', 'Celica'],
  'BMW': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X6', 'M3', 'M5', 'E36', 'E39', 'E46', 'E60', 'F10', 'G20'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'A-Class', 'CLA', 'W124', 'W210', 'W211'],
  'Audi': ['A4', 'A6', 'A8', 'Q5', 'Q7', 'A3', 'A5', 'TT', 'RS6', 'Quattro'],
  'Volkswagen': ['Passat', 'Golf', 'Tiguan', 'Touareg', 'Polo', 'Jetta', 'Arteon'],
  'Kia': ['Rio', 'Sportage', 'Sorento', 'Optima', 'K5', 'Soul', 'Ceed', 'Cerato'],
  'Hyundai': ['Solaris', 'Creta', 'Tucson', 'Santa Fe', 'Elantra', 'Sonata', 'i30', 'ix35'],
  'Nissan': ['Qashqai', 'X-Trail', 'Juke', 'Almera', 'Teana', 'Skyline', 'Silvia', 'GT-R'],
  'Mazda': ['3', '6', 'CX-5', 'CX-7', 'CX-9', 'MX-5', 'Demio'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'Fit', 'Pilot', 'Integra', 'S2000'],
  'Mitsubishi': ['Lancer', 'Outlander', 'Pajero', 'ASX', 'Eclipse', 'Galant'],
  'Subaru': ['Forester', 'Outback', 'Impreza', 'Legacy', 'XV', 'WRX'],
  'Lexus': ['RX', 'NX', 'LX', 'ES', 'GS', 'IS', 'LS', 'GX'],
  'Volvo': ['XC60', 'XC90', 'S60', 'S90', 'V60', 'V90'],
  'Skoda': ['Octavia', 'Superb', 'Kodiaq', 'Karoq', 'Rapid', 'Fabia'],
  'Ford': ['Focus', 'Mondeo', 'Kuga', 'Explorer', 'Fiesta', 'Mustang', 'Transit'],
  'Chevrolet': ['Cruze', 'Aveo', 'Lacetti', 'Captiva', 'Niva', 'Camaro', 'Tahoe'],
  'Renault': ['Logan', 'Duster', 'Sandero', 'Kaptur', 'Arkana', 'Megane'],
  'Peugeot': ['308', '408', '3008', '5008', '2008', 'Partner'],
  'Citroen': ['C4', 'C5', 'Berlingo', 'C3', 'C-Elysee'],
  'Lada': ['Granta', 'Vesta', 'Niva', 'Kalina', 'Priora', 'Largus', 'XRAY'],
  'УАЗ': ['Patriot', 'Hunter', 'Profi', 'Буханка'],
  'Chery': ['Tiggo 4', 'Tiggo 7', 'Tiggo 8', 'Arrizo', 'Bonus'],
  'Haval': ['Jolion', 'F7', 'H9', 'Dargo', 'F7x'],
  'Geely': ['Coolray', 'Atlas', 'Tugella', 'Monjaro', 'Emgrand'],
  'Exeed': ['TXL', 'VX', 'LX', 'TXL Sport']
};

const PARTS_DATABASE = [
  { name: 'Моторное масло', cat: 'engine', icon: 'drop' },
  { name: 'Масляный фильтр', cat: 'engine', icon: 'box' },
  { name: 'Воздушный фильтр', cat: 'engine', icon: 'box' },
  { name: 'Салонный фильтр', cat: 'engine', icon: 'box' },
  { name: 'Топливный фильтр', cat: 'engine', icon: 'box' },
  { name: 'Свечи зажигания', cat: 'engine', icon: 'spark' },
  { name: 'Катушка зажигания', cat: 'engine', icon: 'spark' },
  { name: 'Ремень ГРМ', cat: 'engine', icon: 'gear' },
  { name: 'Ремень навесного оборудования', cat: 'engine', icon: 'gear' },
  { name: 'Помпа (водяной насос)', cat: 'engine', icon: 'gear' },
  { name: 'Термостат', cat: 'engine', icon: 'gear' },
  { name: 'Прокладка клапанной крышки', cat: 'engine', icon: 'box' },
  { name: 'Прокладка ГБЦ', cat: 'engine', icon: 'box' },
  { name: 'Форсунки', cat: 'engine', icon: 'gear' },
  { name: 'Турбина', cat: 'engine', icon: 'gear' },
  { name: 'Радиатор', cat: 'engine', icon: 'box' },
  { name: 'Колодки передние', cat: 'brakes', icon: 'disc' },
  { name: 'Колодки задние', cat: 'brakes', icon: 'disc' },
  { name: 'Тормозные диски передние', cat: 'brakes', icon: 'disc' },
  { name: 'Тормозные диски задние', cat: 'brakes', icon: 'disc' },
  { name: 'Тормозная жидкость', cat: 'brakes', icon: 'drop' },
  { name: 'Суппорт тормозной', cat: 'brakes', icon: 'disc' },
  { name: 'Шланг тормозной', cat: 'brakes', icon: 'box' },
  { name: 'Фильтр АКПП', cat: 'filters', icon: 'box' },
  { name: 'Фильтр вариатора', cat: 'filters', icon: 'box' },
  { name: 'Фильтр ГУР', cat: 'filters', icon: 'box' },
  { name: 'Фильтр осушитель кондиционера', cat: 'filters', icon: 'box' },
  { name: 'Антифриз', cat: 'fluids', icon: 'drop' },
  { name: 'Омывающая жидкость', cat: 'fluids', icon: 'drop' },
  { name: 'Масло АКПП', cat: 'fluids', icon: 'drop' },
  { name: 'Масло МКПП', cat: 'fluids', icon: 'drop' },
  { name: 'Масло в редуктор', cat: 'fluids', icon: 'drop' },
  { name: 'Жидкость ГУР', cat: 'fluids', icon: 'drop' },
  { name: 'Тормозная жидкость DOT-4', cat: 'fluids', icon: 'drop' },
  { name: 'Хладагент кондиционера', cat: 'fluids', icon: 'drop' },
  { name: 'АКБ (аккумулятор)', cat: 'electric', icon: 'battery' },
  { name: 'Лампа ближнего света', cat: 'electric', icon: 'spark' },
  { name: 'Лампа дальнего света', cat: 'electric', icon: 'spark' },
  { name: 'Лампы габаритов', cat: 'electric', icon: 'spark' },
  { name: 'Стоп-сигнал', cat: 'electric', icon: 'spark' },
  { name: 'Генератор', cat: 'electric', icon: 'gear' },
  { name: 'Стартер', cat: 'electric', icon: 'gear' },
  { name: 'Датчик кислорода (лямбда)', cat: 'electric', icon: 'spark' },
  { name: 'Датчик коленвала', cat: 'electric', icon: 'spark' },
  { name: 'Датчик распредвала', cat: 'electric', icon: 'spark' },
  { name: 'Датчик температуры', cat: 'electric', icon: 'spark' },
  { name: 'Датчик давления масла', cat: 'electric', icon: 'spark' },
  { name: 'Предохранители', cat: 'electric', icon: 'spark' },
  { name: 'Щётки стеклоочистителя', cat: 'electric', icon: 'box' },
  { name: 'Амортизаторы передние', cat: 'suspension', icon: 'gear' },
  { name: 'Амортизаторы задние', cat: 'suspension', icon: 'gear' },
  { name: 'Пружины передние', cat: 'suspension', icon: 'gear' },
  { name: 'Пружины задние', cat: 'suspension', icon: 'gear' },
  { name: 'Стойки стабилизатора', cat: 'suspension', icon: 'gear' },
  { name: 'Шаровые опоры', cat: 'suspension', icon: 'gear' },
  { name: 'Рулевые тяги', cat: 'suspension', icon: 'gear' },
  { name: 'Рулевые наконечники', cat: 'suspension', icon: 'gear' },
  { name: 'Ступичный подшипник', cat: 'suspension', icon: 'gear' },
  { name: 'Сайлентблоки', cat: 'suspension', icon: 'gear' },
  { name: 'Рычаги подвески', cat: 'suspension', icon: 'gear' },
  { name: 'ШРУС (граната)', cat: 'suspension', icon: 'gear' },
  { name: 'Пыльники ШРУСа', cat: 'suspension', icon: 'box' }
];

const PART_ICONS = {
  drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  box: '<path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  spark: '<path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="M5.6 5.6l2.1 2.1"/><path d="M16.3 16.3l2.1 2.1"/><path d="M5.6 18.4l2.1-2.1"/><path d="M16.3 7.7l2.1-2.1"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
  battery: '<rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/>'
};

// Демо-сервисы
const DEMO_SERVICES = [
  {
    id: 1,
    name: 'Автосервис на Ленина',
    spec: 'Двигатель · Электрика · Подвеска',
    cover: 'lime',
    verified: true,
    rating: 4.8,
    reviews: 127,
    distance: 1.2,
    isOpen: true,
    openUntil: '20:00',
    masters: 3,
    tags: ['3 мастера', 'Онлайн-запись', 'Свои запчасти'],
    categories: ['engine', 'electric', 'suspension']
  },
  {
    id: 2,
    name: 'Гараж №7',
    spec: 'Кузов · Подвеска',
    cover: 'warm',
    verified: true,
    rating: 4.6,
    reviews: 84,
    distance: 2.8,
    isOpen: false,
    openAt: '9:00',
    masters: 5,
    tags: ['5 мастеров', 'Кузовной ремонт'],
    categories: ['body', 'suspension']
  },
  {
    id: 3,
    name: 'СТО Партнёр',
    spec: 'Универсальный · ТО',
    cover: 'cool',
    verified: false,
    rating: 4.9,
    reviews: 212,
    distance: 4.1,
    isOpen: true,
    openUntil: '21:00',
    masters: 8,
    tags: ['8 мастеров', 'ТО под ключ', 'Онлайн-запись'],
    categories: ['engine', 'tires', 'suspension']
  }
];

// Демо-мастера
const DEMO_MASTERS = {
  1: { id: 1, name: 'Иван Смирнов', avatar: 'И', service: 'Автосервис на Ленина', rating: 4.9, reviews: 64, exp: 12, status: 'free', spec: 'Двигатель · Электрика' },
  2: { id: 2, name: 'Пётр Иванов', avatar: 'П', service: 'Автосервис на Ленина', rating: 4.7, reviews: 38, exp: 8, status: 'busy', spec: 'Кузов · Подвеска' },
  3: { id: 3, name: 'Алексей Кузнецов', avatar: 'А', service: 'Автосервис на Ленина', rating: 5.0, reviews: 25, exp: 15, status: 'free', spec: 'Диагностика · Электрика' }
};

// Демо-запросы помощи
const DEMO_HELP_REQUESTS = [
  { id: 1, name: 'Сергей', avatar: 'С', distance: 1.2, reason: 'Не заводится', comment: 'На Ленинградке, прямо у обочины. Аккумулятор сел.', time: '5 мин назад', inClubs: true },
  { id: 2, name: 'Марина', avatar: 'М', distance: 3.4, reason: 'Пробил колесо', comment: 'Не могу открутить болты. Нужна помощь с домкратом.', time: '12 мин назад', inClubs: false },
  { id: 3, name: 'Алексей', avatar: 'А', distance: 0.8, reason: 'Кончился бензин', comment: 'На выезде из двора. Кто может подвезти канистру?', time: '20 мин назад', inClubs: true }
];

// ==================== СОСТОЯНИЕ ====================
let currentScreen = 'landing';
let currentStep = 1;
let currentReason = 'Не заводится';
let sendLocation = true;
let needsChange = false;
let currentResetPart = null;
let currentPartCategory = 'all';
let currentPartSearch = '';
let currentHelpFilter = 'nearby';
let currentServicesView = 'list';
let currentServicesCategory = 'all';
let currentServicesQuery = '';
let respondRequestId = null;
let currentServiceId = 1;
let currentMasterId = 1;
let bookingDay = null;
let bookingTime = null;
let bookingChips = new Set();
let expenseView = 'list';

// ==================== НАВИГАЦИЯ ====================
const screensWithNav = ['home', 'expenses', 'maintenance', 'services', 'help', 'clubs', 'profile'];

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + screenId);
  if (el) {
    el.classList.add('active');
    currentScreen = screenId;
    window.scrollTo(0, 0);
  }

  const nav = document.getElementById('bottomNav');
  if (screensWithNav.includes(screenId)) {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }

  document.querySelectorAll('#bottomNav .nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === screenId);
  });

  if (screenId === 'profile') updateProfile();
  if (screenId === 'home') updateHome();
  if (screenId === 'maintenance') renderPartsList();
  if (screenId === 'help') renderHelpRequests();
  if (screenId === 'services') renderServicesList();
}

// ==================== РЕГИСТРАЦИЯ ====================
const phoneInput = document.getElementById('phoneInput');
const sendCodeBtn = document.getElementById('sendCodeBtn');

function formatPhone(value) {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (!digits.startsWith('7')) digits = '7' + digits;
  digits = digits.slice(0, 11);
  let result = '+7';
  if (digits.length > 1) result += ' ' + digits.slice(1, 4);
  if (digits.length >= 5) result += ' ' + digits.slice(4, 7);
  if (digits.length >= 8) result += '-' + digits.slice(7, 9);
  if (digits.length >= 10) result += '-' + digits.slice(9, 11);
  return result;
}

phoneInput.addEventListener('input', (e) => {
  e.target.value = formatPhone(e.target.value);
  const digits = e.target.value.replace(/\D/g, '');
  sendCodeBtn.disabled = digits.length !== 11;
});

phoneInput.addEventListener('focus', () => {
  if (!phoneInput.value) phoneInput.value = '+7 ';
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value === '+7 ' || phoneInput.value === '+7') phoneInput.value = '';
});

function sendCode() {
  document.getElementById('phoneDisplay').textContent = phoneInput.value;
  document.getElementById('reg-phone').style.display = 'none';
  document.getElementById('reg-code').style.display = 'flex';
  document.getElementById('backBtnReg').style.display = 'flex';
  startResendTimer();
  setTimeout(() => document.querySelectorAll('.code-cell')[0].focus(), 300);
}

function registrationBack() {
  document.getElementById('reg-phone').style.display = 'flex';
  document.getElementById('reg-code').style.display = 'none';
  document.getElementById('backBtnReg').style.display = 'none';
  if (resendTimer) clearInterval(resendTimer);
}

const codeCells = document.querySelectorAll('.code-cell');
const verifyBtn = document.getElementById('verifyBtn');
const resendBtn = document.getElementById('resendBtn');

codeCells.forEach((cell, i) => {
  cell.addEventListener('input', (e) => {
    const v = e.target.value.replace(/\D/g, '');
    if (v) {
      e.target.value = v[0];
      e.target.classList.add('filled');
      if (i < 3) codeCells[i + 1].focus();
    } else {
      e.target.value = '';
      e.target.classList.remove('filled');
    }
    checkCodeComplete();
  });
  cell.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && i > 0) {
      codeCells[i - 1].focus();
      codeCells[i - 1].value = '';
      codeCells[i - 1].classList.remove('filled');
      checkCodeComplete();
    }
  });
});

function checkCodeComplete() {
  verifyBtn.disabled = ![...codeCells].every(c => c.value.length === 1);
}

let resendTimer = null;
let secondsLeft = 60;

function startResendTimer() {
  secondsLeft = 60;
  resendBtn.disabled = true;
  document.getElementById('timerBox').style.display = 'block';
  if (resendTimer) clearInterval(resendTimer);
  resendTimer = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(resendTimer);
      resendBtn.disabled = false;
      document.getElementById('timerBox').style.display = 'none';
    } else {
      document.getElementById('timerBox').textContent = `через ${secondsLeft} сек`;
    }
  }, 1000);
}

resendBtn.addEventListener('click', () => {
  codeCells.forEach(c => { c.value = ''; c.classList.remove('filled'); });
  verifyBtn.disabled = true;
  startResendTimer();
  codeCells[0].focus();
});

function verifyCode() {
  verifyBtn.textContent = 'Проверяем...';
  verifyBtn.disabled = true;
  setTimeout(() => {
    verifyBtn.textContent = 'Войти';
    verifyBtn.disabled = false;
    localStorage.setItem('userPhone', phoneInput.value);
    goTo('onboarding');
    setStep(1);
  }, 700);
}

// ==================== ОНБОРДИНГ ====================
function setStep(n) {
  document.querySelectorAll('.step-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById('step-pane-' + n);
  if (pane) {
    pane.classList.add('active');
    window.scrollTo(0, 0);
  }
  currentStep = n;
  const fill = document.getElementById('progressFill');
  fill.style.width = (n / 3 * 100) + '%';
  document.getElementById('stepCounter').textContent = n + ' / 3';
  if (n === 3) updatePlatePreview();
}

function nextStep(n) {
  const oldPane = document.getElementById('step-pane-' + currentStep);
  if (oldPane) {
    oldPane.classList.add('exit-left');
    setTimeout(() => {
      oldPane.classList.remove('exit-left', 'active');
      setStep(n);
    }, 320);
  } else {
    setStep(n);
  }
}

function onboardingBack() {
  if (currentStep > 1) {
    const oldPane = document.getElementById('step-pane-' + currentStep);
    if (oldPane) {
      oldPane.classList.add('exit-left');
      setTimeout(() => {
        oldPane.classList.remove('exit-left', 'active');
        setStep(currentStep - 1);
      }, 320);
    }
  } else {
    goTo('registration');
  }
}

const lastNameInput = document.getElementById('lastNameInput');
const firstNameInput = document.getElementById('firstNameInput');
const birthDateInput = document.getElementById('birthDateInput');
const step1Btn = document.getElementById('step1Btn');

function checkStep1() {
  const ln = lastNameInput.value.trim();
  const fn = firstNameInput.value.trim();
  const bd = birthDateInput.value;
  step1Btn.disabled = !(ln.length >= 2 && fn.length >= 2 && bd);
}

[lastNameInput, firstNameInput].forEach(input => {
  input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9]/g, '').replace(/[^А-Яа-яЁёA-Za-z\s\-]/g, '');
    checkStep1();
  });
});
birthDateInput.addEventListener('change', checkStep1);

const brandInput = document.getElementById('brandInput');
const modelInput = document.getElementById('modelInput');
const mileageInput = document.getElementById('mileageInput');
const step2Btn = document.getElementById('step2Btn');
const brandSuggestions = document.getElementById('brandSuggestions');
const modelSuggestions = document.getElementById('modelSuggestions');

function checkStep2() {
  const b = brandInput.value.trim();
  const m = modelInput.value.trim();
  const km = mileageInput.value.replace(/\D/g, '');
  step2Btn.disabled = !(b.length >= 2 && m.length >= 1 && km);
}

brandInput.addEventListener('input', (e) => {
  const v = e.target.value;
  if (v.length >= 1) {
    const matches = CAR_BRANDS.filter(b => b.toLowerCase().startsWith(v.toLowerCase())).slice(0, 5);
    if (matches.length > 0 && matches[0].toLowerCase() !== v.toLowerCase()) {
      brandSuggestions.innerHTML = matches.map(m => `<button type="button" class="suggestion" onclick="pickBrand('${m}')">${m}</button>`).join('');
      brandSuggestions.classList.add('show');
    } else {
      brandSuggestions.classList.remove('show');
    }
  } else {
    brandSuggestions.classList.remove('show');
  }
  updateModelSuggestions();
  checkStep2();
});

brandInput.addEventListener('blur', () => {
  setTimeout(() => brandSuggestions.classList.remove('show'), 200);
});

function pickBrand(name) {
  brandInput.value = name;
  brandSuggestions.classList.remove('show');
  updateModelSuggestions();
  checkStep2();
}

function updateModelSuggestions() {
  const brand = brandInput.value.trim();
  const modelValue = modelInput.value.trim();
  const models = CAR_MODELS[brand];
  if (!models) { modelSuggestions.classList.remove('show'); return; }
  const query = modelValue.toLowerCase();
  const matches = models.filter(m => m.toLowerCase().includes(query)).slice(0, 6);
  if (matches.length > 0 && !(matches.length === 1 && matches[0].toLowerCase() === query)) {
    modelSuggestions.innerHTML = matches.map(m => `<button type="button" class="suggestion" onclick="pickModel('${m}')">${m}</button>`).join('');
    modelSuggestions.classList.add('show');
  } else {
    modelSuggestions.classList.remove('show');
  }
}

modelInput.addEventListener('input', () => {
  modelInput.value = modelInput.value.replace(/[^А-Яа-яЁёA-Za-z0-9\s\-\.]/g, '');
  updateModelSuggestions();
  checkStep2();
});

modelInput.addEventListener('focus', updateModelSuggestions);
modelInput.addEventListener('blur', () => {
  setTimeout(() => modelSuggestions.classList.remove('show'), 200);
});

function pickModel(name) {
  modelInput.value = name;
  modelSuggestions.classList.remove('show');
  checkStep2();
}

mileageInput.addEventListener('input', (e) => {
  const d = e.target.value.replace(/\D/g, '');
  e.target.value = d ? Number(d).toLocaleString('ru-RU') : '';
  checkStep2();
});

const plateInput = document.getElementById('plateInput');
const regionInput = document.getElementById('regionInput');
const step3Btn = document.getElementById('step3Btn');
const plateHint = document.getElementById('plateHint');
const regionHint = document.getElementById('regionHint');

function formatPlate(value) {
  let v = value.toUpperCase().replace(/[^А-ЯЁ0-9]/g, '');
  if (v.length > 0 && !RU_LETTERS.includes(v[0])) v = v.slice(1);
  if (v.length > 1) {
    const rest = v.slice(1);
    let digits = '', letters = '', foundLetter = false;
    for (const ch of rest) {
      if (!foundLetter && /[0-9]/.test(ch)) digits += ch;
      else if (!foundLetter && /[А-ЯЁ]/.test(ch)) { foundLetter = true; letters += ch; }
      else if (foundLetter && /[А-ЯЁ]/.test(ch) && RU_LETTERS.includes(ch)) letters += ch;
    }
    v = v[0] + digits.slice(0, 3) + letters.slice(0, 2);
  }
  return v;
}

function validatePlate() {
  const v = plateInput.value;
  let valid = false, hint = '';
  if (v.length === 0) hint = '';
  else if (v.length < 6) hint = 'Полный номер: буква + 3 цифры + 2 буквы';
  else if (v.length === 6) {
    const l1 = v[0], d = v.slice(1, 4), l2 = v[4], l3 = v[5];
    if (/^\d{3}$/.test(d) && RU_LETTERS.includes(l1) && RU_LETTERS.includes(l2) && RU_LETTERS.includes(l3)) valid = true;
    else hint = 'Неверный формат. Буквы только: ' + RU_LETTERS.join(', ');
  }
  if (hint) {
    plateHint.textContent = hint;
    plateHint.classList.add('show');
    plateInput.classList.toggle('error', !valid);
  } else {
    plateHint.classList.remove('show');
    plateInput.classList.remove('error');
  }
  return valid;
}

plateInput.addEventListener('input', (e) => {
  e.target.value = formatPlate(e.target.value);
  const ok = validatePlate();
  const regionOk = validateRegion();
  step3Btn.disabled = !(ok && regionOk);
  updatePlatePreview();
});

function validateRegion() {
  const v = regionInput.value;
  if (v.length === 0) { regionHint.classList.remove('show'); regionInput.classList.remove('error'); return false; }
  const num = parseInt(v, 10);
  if (isNaN(num) || v.startsWith('0')) {
    regionHint.textContent = 'Регион не может начинаться с 0';
    regionHint.classList.add('show');
    regionInput.classList.add('error');
    return false;
  }
  if (v.length > 3) {
    regionHint.textContent = 'Максимум 3 цифры';
    regionHint.classList.add('show');
    regionInput.classList.add('error');
    return false;
  }
  regionHint.classList.remove('show');
  regionInput.classList.remove('error');
  return v.length >= 1;
}

regionInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
  const ok = validatePlate();
  const regionOk = validateRegion();
  step3Btn.disabled = !(ok && regionOk);
  updatePlatePreview();
});

function updatePlatePreview() {
  const v = plateInput.value.padEnd(6, ' ');
  const region = regionInput.value || '000';
  document.getElementById('svgL1').textContent = v[0] || 'А';
  document.getElementById('svgD1').textContent = v[1] || '0';
  document.getElementById('svgD2').textContent = v[2] || '0';
  document.getElementById('svgD3').textContent = v[3] || '0';
  document.getElementById('svgL2').textContent = v[4] || 'А';
  document.getElementById('svgL3').textContent = v[5] || 'А';
  document.getElementById('svgRegion').textContent = region;
}

function finishOnboarding(skip) {
  if (!skip) {
    localStorage.setItem('lastName', lastNameInput.value.trim());
    localStorage.setItem('firstName', firstNameInput.value.trim());
    localStorage.setItem('birthDate', birthDateInput.value);
    localStorage.setItem('carBrand', brandInput.value.trim());
    localStorage.setItem('carModel', modelInput.value.trim());
    localStorage.setItem('carMileage', mileageInput.value);
    localStorage.setItem('carPlate', plateInput.value);
    localStorage.setItem('carRegion', regionInput.value);
  } else {
    if (lastNameInput.value) {
      localStorage.setItem('lastName', lastNameInput.value.trim());
      localStorage.setItem('firstName', firstNameInput.value.trim());
      localStorage.setItem('birthDate', birthDateInput.value);
    }
  }
  localStorage.setItem('registered', '1');
  localStorage.setItem('registeredAt', new Date().toISOString());
  updateHome();
  updateProfile();
  goTo('home');
}

// ==================== ГЛАВНАЯ ====================
function updateHome() {
  const firstName = localStorage.getItem('firstName');
  const brand = localStorage.getItem('carBrand');
  const model = localStorage.getItem('carModel');
  const km = localStorage.getItem('carMileage');

  const greetEl = document.getElementById('homeGreeting');
  greetEl.textContent = firstName ? `Привет, ${firstName}` : 'Привет';

  if (brand && model) {
    document.getElementById('homeCarDisplay').innerHTML = `${brand}<br><em class="lime-em">${model}</em>`;
    document.getElementById('homeCarMeta').textContent = `${km || '0'} км`;
  } else {
    document.getElementById('homeCarDisplay').innerHTML = `Добавь<br><em class="lime-em">машину</em>`;
    document.getElementById('homeCarMeta').textContent = 'Пока нет данных';
  }
}

// ==================== ПРОФИЛЬ ====================
function updateProfile() {
  const phone = localStorage.getItem('userPhone');
  const lastName = localStorage.getItem('lastName');
  const firstName = localStorage.getItem('firstName');
  const brand = localStorage.getItem('carBrand');
  const model = localStorage.getItem('carModel');
  const km = localStorage.getItem('carMileage');
  const plate = localStorage.getItem('carPlate');
  const region = localStorage.getItem('carRegion');

  const nameEl = document.getElementById('profileName');
  const phoneEl = document.getElementById('profilePhone');
  const avatarEl = document.getElementById('profileAvatar');

  if (firstName) {
    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    nameEl.textContent = fullName;
    avatarEl.textContent = firstName[0].toUpperCase();
    avatarEl.classList.remove('empty');
  } else {
    nameEl.textContent = 'Без имени';
    avatarEl.textContent = '?';
    avatarEl.classList.add('empty');
  }

  phoneEl.textContent = phone || '—';

  const carNameEl = document.getElementById('profileCarName');
  const carMetaEl = document.getElementById('profileCarMeta');
  const plateWrap = document.getElementById('profilePlateWrap');

  if (brand && model) {
    carNameEl.textContent = `${brand} ${model}`;
    carMetaEl.textContent = `${km || '0'} км`;
  } else {
    carNameEl.textContent = 'Машина не добавлена';
    carMetaEl.textContent = 'Добавь данные, чтобы вести историю';
    plateWrap.style.display = 'none';
    return;
  }

  if (plate && plate.length === 6 && region) {
    document.getElementById('pL1').textContent = plate[0];
    document.getElementById('pD1').textContent = plate[1];
    document.getElementById('pD2').textContent = plate[2];
    document.getElementById('pD3').textContent = plate[3];
    document.getElementById('pL2').textContent = plate[4];
    document.getElementById('pL3').textContent = plate[5];
    document.getElementById('pRegion').textContent = region;
    plateWrap.style.display = 'block';
  } else {
    plateWrap.style.display = 'none';
  }
}

// ==================== ОБСЛУЖИВАНИЕ ====================
function getParts() {
  const stored = localStorage.getItem('userParts');
  return stored ? JSON.parse(stored) : [];
}
function saveParts(parts) {
  localStorage.setItem('userParts', JSON.stringify(parts));
}

function renderPartsList() {
  const parts = getParts();
  const list = document.getElementById('partsList');

  if (parts.length === 0) {
    list.innerHTML = `
      <div class="card p-6 text-center">
        <div class="text-[13px] text-ink-3 mb-1">Пока ничего не добавлено</div>
        <div class="text-[11.5px] text-ink-3 mb-4">Нажми + вверху, чтобы выбрать запчасть из списка</div>
        <button class="btn-primary" style="max-width: 240px; margin: 0 auto;" onclick="openAddPart()">Добавить запчасть</button>
      </div>
    `;
    return;
  }

  list.innerHTML = parts.map((p, idx) => {
    const iconSvg = PART_ICONS[p.icon] || PART_ICONS.box;
    const statusClass = p.needsChange ? 'overdue' : (p.lastDate ? 'ok' : 'soon');
    const statusLabel = p.needsChange ? 'Пора менять' : (p.lastDate ? 'ОК' : 'Не отмечено');
    let metaText = '';
    if (p.lastDate && p.lastMileage) metaText = `Заменено ${p.lastDate} · ${p.lastMileage} км`;
    else if (p.needsChange) metaText = 'Нужно поменять';
    else metaText = 'Нажми, чтобы отметить замену';

    return `
      <div class="node-card ${statusClass}" onclick="openReset('${p.name}', ${idx})">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(255,255,255,0.04); color: rgba(245,245,245,0.55);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconSvg}</svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-2 mb-1">
              <div class="text-[14px] font-semibold truncate">${p.name}</div>
              <span class="status-badge ${p.needsChange ? 'overdue' : 'ok'}">${statusLabel}</span>
            </div>
            <div class="text-[11.5px] text-ink-2">${metaText}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openAddPart() {
  document.getElementById('addPartModal').classList.add('show');
  document.body.style.overflow = 'hidden';
  document.getElementById('partSearchInput').value = '';
  currentPartSearch = '';
  currentPartCategory = 'all';
  document.querySelectorAll('#partCategories .filter-chip').forEach((b, i) => {
    b.classList.toggle('active', i === 0);
  });
  renderPartsSearch();
  setTimeout(() => document.getElementById('partSearchInput').focus(), 300);
}
function closeAddPart() {
  document.getElementById('addPartModal').classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('partSearchInput').addEventListener('input', (e) => {
  currentPartSearch = e.target.value.toLowerCase().trim();
  renderPartsSearch();
});

function selectPartCategory(btn) {
  document.querySelectorAll('#partCategories .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentPartCategory = btn.dataset.cat;
  renderPartsSearch();
}

function renderPartsSearch() {
  const list = document.getElementById('partsSearchList');
  const userParts = getParts();
  const userPartNames = userParts.map(p => p.name);

  let filtered = PARTS_DATABASE.filter(p => {
    if (currentPartCategory !== 'all' && p.cat !== currentPartCategory) return false;
    if (currentPartSearch && !p.name.toLowerCase().includes(currentPartSearch)) return false;
    return true;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="text-center py-10">
        <div class="text-[13px] text-ink-3 mb-1">Ничего не найдено</div>
        <div class="text-[11.5px] text-ink-3">Попробуй другое название или категорию</div>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(p => {
    const iconSvg = PART_ICONS[p.icon] || PART_ICONS.box;
    const already = userPartNames.includes(p.name);
    const catNames = {
      engine: 'Двигатель', brakes: 'Тормоза', filters: 'Фильтры',
      fluids: 'Жидкости', electric: 'Электрика', suspension: 'Подвеска'
    };
    return `
      <div class="part-search-item" onclick="addPartFromSearch('${p.name}', '${p.icon}')">
        <div class="part-search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconSvg}</svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="part-search-name">${p.name}</div>
          <div class="part-search-cat">${catNames[p.cat] || ''}</div>
        </div>
        ${already ? '<span class="text-[10px] text-ink-3">Уже добавлено</span>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(198,255,61,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>'}
      </div>
    `;
  }).join('');
}

function addPartFromSearch(name, icon) {
  const parts = getParts();
  if (parts.find(p => p.name === name)) { closeAddPart(); return; }
  parts.push({ name: name, icon: icon, lastDate: null, lastMileage: null, needsChange: false });
  saveParts(parts);
  closeAddPart();
  renderPartsList();
}

function openReset(partName, partIndex) {
  currentResetPart = { name: partName, index: partIndex };
  document.getElementById('resetTitle').textContent = partName;
  document.getElementById('resetModal').classList.add('show');
  document.body.style.overflow = 'hidden';

  const parts = getParts();
  const part = parts[partIndex];
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('resetDate').value = part.lastDate || today;
  const km = part.lastMileage || localStorage.getItem('carMileage') || '';
  document.getElementById('resetMileage').value = km;
  needsChange = part.needsChange || false;
  updateNeedsChangeBox();
}

function updateNeedsChangeBox() {
  const box = document.getElementById('needsChangeBox');
  if (needsChange) box.classList.add('checked');
  else box.classList.remove('checked');
}

function toggleNeedsChange() {
  needsChange = !needsChange;
  updateNeedsChangeBox();
}

function closeReset() {
  document.getElementById('resetModal').classList.remove('show');
  document.body.style.overflow = '';
  currentResetPart = null;
}

function confirmReset() {
  if (!currentResetPart) return;
  const parts = getParts();
  const part = parts[currentResetPart.index];
  if (!part) return;

  const dateVal = document.getElementById('resetDate').value;
  const mileageVal = document.getElementById('resetMileage').value;

  let formattedDate = '';
  if (dateVal) {
    const d = new Date(dateVal);
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    formattedDate = `${d.getDate()} ${months[d.getMonth()]}`;
  }

  part.lastDate = formattedDate;
  part.lastMileage = mileageVal;
  part.needsChange = needsChange;
  saveParts(parts);

  const btn = event.target;
  btn.textContent = 'Сохраняем...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Сохранить';
    btn.disabled = false;
    closeReset();
    renderPartsList();
  }, 400);
}

document.getElementById('resetMileage').addEventListener('input', (e) => {
  const d = e.target.value.replace(/\D/g, '');
  e.target.value = d ? Number(d).toLocaleString('ru-RU') : '';
});

// ==================== СЕРВИСЫ ====================
function selectServicesView(btn, view) {
  document.querySelectorAll('#screen-services .view-toggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentServicesView = view;
  if (view === 'map') alert('Карта сервисов — в следующей версии');
}

function selectServiceCategory(btn) {
  document.querySelectorAll('#screen-services .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentServicesCategory = btn.dataset.cat;
  renderServicesList();
}

function filterServices(value) {
  currentServicesQuery = value.toLowerCase().trim();
  renderServicesList();
}

function renderServicesList() {
  const list = document.getElementById('servicesList');
  const countEl = document.getElementById('servicesCount');
  if (!list) return;

  let filtered = DEMO_SERVICES.filter(s => {
    if (currentServicesCategory !== 'all' && !s.categories.includes(currentServicesCategory)) return false;
    if (currentServicesQuery) {
      const hay = (s.name + ' ' + s.spec).toLowerCase();
      if (!hay.includes(currentServicesQuery)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="text-center py-16">
        <div class="text-[13px] text-ink-3 mb-1">Ничего не найдено</div>
        <div class="text-[11.5px] text-ink-3">Попробуй другой фильтр или запрос</div>
      </div>
    `;
    countEl.textContent = 'Показано 0 сервисов';
    return;
  }

  list.innerHTML = filtered.map(s => {
    const verifiedBadge = s.verified ? `
      <div class="verified-badge">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
        Проверен
      </div>
    ` : '';

    const openBadge = s.isOpen
      ? `<span class="open-badge"><span class="dot"></span>Открыто до ${s.openUntil}</span>`
      : `<span class="open-badge closed"><span class="dot"></span>Закрыто · откроется в ${s.openAt}</span>`;

    const tagsHtml = s.tags.map(t => `<span class="tag">${t}</span>`).join('');

    return `
      <div class="service-card" onclick="openServiceDetail(${s.id})">
        <div class="service-cover ${s.cover}">
          <div class="pattern"></div>
          ${verifiedBadge}
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-3 mb-2">
            <div class="min-w-0 flex-1">
              <div class="font-semibold text-[15px] tracking-tight truncate">${s.name}</div>
              <div class="text-[11.5px] mt-1 text-ink-2">${s.spec}</div>
            </div>
            <div class="rating flex-shrink-0">
              <svg class="star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 9"/>
              </svg>
              <span>${s.rating}</span>
              <span class="count">(${s.reviews})</span>
            </div>
          </div>
          <div class="flex items-center gap-3 mb-3 text-[11.5px] text-ink-2">
            <span class="flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${s.distance} км
            </span>
            ${openBadge}
          </div>
          <div class="flex flex-wrap gap-1.5 mb-4">${tagsHtml}</div>
          <div class="flex gap-2">
            <button class="btn-book flex-1" onclick="event.stopPropagation(); openBookingForMaster(1, ${s.id})">Записаться</button>
            <button class="btn-service-ghost" onclick="event.stopPropagation(); openServiceDetail(${s.id})">Подробнее</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  countEl.textContent = `Показано ${filtered.length} из ${DEMO_SERVICES.length} сервисов`;
}

function openServiceDetail(id) {
  currentServiceId = id;
  const s = DEMO_SERVICES.find(x => x.id === id);
  if (!s) return;
  document.getElementById('detailServiceName').innerHTML = s.name.replace(' ', '<br>');
  document.getElementById('detailRating').textContent = s.rating;
  document.getElementById('detailReviews').textContent = `${s.reviews} отзывов`;
  goTo('service-detail');
}

function switchServiceTab(index, btn) {
  document.querySelectorAll('#screen-service-detail .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  for (let i = 0; i < 4; i++) {
    const el = document.getElementById('serviceTab' + i);
    if (el) el.classList.toggle('hidden', i !== index);
  }
}

// ==================== МАСТЕР (детальная) ====================
function openMasterDetail(id) {
  currentMasterId = id;
  const m = DEMO_MASTERS[id];
  if (!m) return;
  document.getElementById('masterAvatar').textContent = m.avatar;
  document.getElementById('masterName').textContent = m.name;
  document.getElementById('masterService').textContent = m.service;
  document.getElementById('masterRatingBig').textContent = m.rating;
  document.getElementById('masterReviewsBig').textContent = m.reviews;
  document.getElementById('masterExpBig').textContent = m.exp;
  goTo('master-detail');
}

// ==================== ЗАПИСЬ В СЕРВИС ====================
function openBookingForMaster(masterId, serviceId) {
  currentMasterId = masterId || currentMasterId;
  if (serviceId) currentServiceId = serviceId;
  const m = DEMO_MASTERS[currentMasterId] || DEMO_MASTERS[1];
  document.getElementById('bookingMasterAvatar').textContent = m.avatar;
  document.getElementById('bookingMasterName').textContent = m.name;
  document.getElementById('bookingMasterService').textContent = m.service;
  document.getElementById('bookingProblem').value = '';
  bookingChips.clear();
  document.querySelectorAll('#bookingQuickChips .quick-chip').forEach(c => c.classList.remove('active'));
  bookingDay = 'Завтра';
  bookingTime = '15:00';
  goTo('booking');
}

function bookingBack() {
  if (currentServiceId) goTo('service-detail');
  else goTo('services');
}

function toggleBookingChip(btn, text) {
  btn.classList.toggle('active');
  if (bookingChips.has(text)) bookingChips.delete(text);
  else bookingChips.add(text);
  const ta = document.getElementById('bookingProblem');
  if (!ta.dataset.userEdited) {
    ta.value = [...bookingChips].join(', ');
  }
}

document.getElementById('bookingProblem').addEventListener('input', (e) => {
  e.target.dataset.userEdited = e.target.value ? '1' : '';
});

function selectBookingDay(btn) {
  btn.parentElement.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  bookingDay = btn.textContent.trim();
}

function selectBookingTime(btn) {
  if (btn.disabled) return;
  btn.parentElement.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  bookingTime = btn.textContent.trim();
}

function submitBooking() {
  const text = document.getElementById('bookingProblem').value.trim();
  if (!text) {
    document.getElementById('bookingProblem').focus();
    document.getElementById('bookingProblem').style.borderColor = '#FF3D2E';
    setTimeout(() => document.getElementById('bookingProblem').style.borderColor = '', 800);
    return;
  }
  const btn = event.target;
  btn.textContent = 'Отправляем...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Отправить заявку';
    btn.disabled = false;
    alert('Заявка отправлена!\n\nМастер ' + DEMO_MASTERS[currentMasterId].name + ' получит уведомление и подтвердит запись.');
    goTo('home');
  }, 700);
}

// ==================== СОГЛАСОВАНИЕ СМЕТЫ ====================
function approveEstimate() {
  if (!confirm('Согласовать смету на 11 800 ₽?\n\nМастер сразу приступит к работе.')) return;
  alert('Смета согласована\n\nИван приступает к работе. Уведомления будут приходить по мере выполнения.');
  goTo('home');
}

// ==================== РАСХОДЫ ====================
function openExpense() {
  document.getElementById('expenseModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeExpense() {
  document.getElementById('expenseModal').classList.remove('show');
  document.body.style.overflow = '';
}

const expenseAmount = document.getElementById('expenseAmount');
const saveExpenseBtn = document.getElementById('saveExpenseBtn');

expenseAmount.addEventListener('input', (e) => {
  const d = e.target.value.replace(/\D/g, '');
  e.target.value = d ? Number(d).toLocaleString('ru-RU') : '';
  saveExpenseBtn.disabled = !d;
});

function saveExpense() {
  saveExpenseBtn.textContent = 'Сохраняем...';
  saveExpenseBtn.disabled = true;
  setTimeout(() => {
    saveExpenseBtn.textContent = 'Сохранить';
    saveExpenseBtn.disabled = false;
    closeExpense();
    expenseAmount.value = '';
    document.getElementById('expenseDesc').value = '';
  }, 600);
}

function setExpenseView(view) {
  expenseView = view;
  const listBtn = document.getElementById('expViewList');
  const daysBtn = document.getElementById('expViewDays');
  if (view === 'list') {
    listBtn.style.background = '#C6FF3D'; listBtn.style.color = '#0A0A0A'; listBtn.style.fontWeight = '600';
    daysBtn.style.background = 'none'; daysBtn.style.color = 'rgba(245,245,245,0.5)'; daysBtn.style.fontWeight = '500';
  } else {
    daysBtn.style.background = '#C6FF3D'; daysBtn.style.color = '#0A0A0A'; daysBtn.style.fontWeight = '600';
    listBtn.style.background = 'none'; listBtn.style.color = 'rgba(245,245,245,0.5)'; listBtn.style.fontWeight = '500';
  }
}

// ==================== ПОМОЩЬ ====================
function openHelpRequest() {
  document.getElementById('helpModal').classList.add('show');
  document.body.style.overflow = 'hidden';
  document.getElementById('helpComment').value = '';
  currentReason = 'Не заводится';
  sendLocation = true;
  document.querySelectorAll('#helpReasonGrid .reason-btn').forEach((b, i) => {
    b.classList.toggle('active', i === 0);
  });
  updateLocationBox();
}
function closeHelpRequest() {
  document.getElementById('helpModal').classList.remove('show');
  document.body.style.overflow = '';
}
function selectReason(btn) {
  document.querySelectorAll('#helpReasonGrid .reason-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentReason = btn.dataset.reason;
}
function updateLocationBox() {
  const box = document.getElementById('locationBox');
  if (sendLocation) box.classList.add('checked');
  else box.classList.remove('checked');
}
function toggleLocation() {
  sendLocation = !sendLocation;
  updateLocationBox();
}
function sendHelpRequest() {
  const comment = document.getElementById('helpComment').value.trim();
  const requests = JSON.parse(localStorage.getItem('myHelpRequests') || '[]');
  requests.push({ reason: currentReason, comment, location: sendLocation, time: new Date().toISOString() });
  localStorage.setItem('myHelpRequests', JSON.stringify(requests));
  const btn = event.target;
  btn.textContent = 'Отправляем...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Отправить запрос';
    btn.disabled = false;
    closeHelpRequest();
    alert('Запрос отправлен!\n\nУведомление ушло всем в твоих клубах и тем, кто рядом.');
  }, 700);
}
function selectHelpFilter(btn) {
  document.querySelectorAll('#screen-help .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentHelpFilter = btn.dataset.filter;
  renderHelpRequests();
}
function renderHelpRequests() {
  const list = document.getElementById('helpRequestsList');
  if (!list) return;
  let filtered = [...DEMO_HELP_REQUESTS];
  if (currentHelpFilter === 'clubs') filtered = filtered.filter(r => r.inClubs);

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="text-center py-12">
        <div class="text-[13px] text-ink-3 mb-1">Пока никому не нужна помощь</div>
        <div class="text-[11.5px] text-ink-3">Здесь появятся запросы от других водителей</div>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(r => `
    <div class="help-request">
      <div class="help-request-head">
        <div class="help-request-avatar">${r.avatar}</div>
        <div class="flex-1 min-w-0">
          <div class="help-request-name">${r.name}</div>
          <div class="help-request-meta">${r.distance} км от тебя · ${r.time}</div>
        </div>
      </div>
      <div class="help-request-reason">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        ${r.reason}
      </div>
      <div class="help-request-comment">${r.comment}</div>
      <div class="help-request-actions">
        <button class="btn-help-respond" onclick="openRespond(${r.id})">Откликнуться</button>
        <button class="btn-help-message" onclick="alert('Чат — в следующей версии')">Написать</button>
      </div>
    </div>
  `).join('');
}
function openRespond(id) {
  respondRequestId = id;
  const request = DEMO_HELP_REQUESTS.find(r => r.id === id);
  if (!request) return;
  document.getElementById('respondInfo').innerHTML = `
    <div class="flex items-center gap-3 mb-3">
      <div class="help-request-avatar">${request.avatar}</div>
      <div class="flex-1">
        <div class="text-[14px] font-semibold">${request.name}</div>
        <div class="text-[11.5px] text-ink-3 mt-0.5">${request.distance} км от тебя</div>
      </div>
    </div>
    <div class="help-request-reason" style="margin-bottom: 8px;">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
      ${request.reason}
    </div>
    <div class="text-[12.5px] text-ink-2 leading-relaxed">${request.comment}</div>
  `;
  document.getElementById('respondMessage').value = '';
  document.getElementById('respondModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeRespond() {
  document.getElementById('respondModal').classList.remove('show');
  document.body.style.overflow = '';
  respondRequestId = null;
}
function confirmRespond() {
  const btn = event.target;
  btn.textContent = 'Отправляем...';
  btn.disabled = true;
  const name = DEMO_HELP_REQUESTS.find(r => r.id === respondRequestId)?.name || 'водителем';
  setTimeout(() => {
    btn.textContent = 'Откликнуться';
    btn.disabled = false;
    closeRespond();
    alert('Ты откликнулся на запрос.\n\nОткрывается чат с ' + name);
  }, 600);
}
/* ПРОДОЛЖЕНИЕ СЛЕДУЕТ */
// ==================== КЛУБЫ ====================
function openClubDetail(id) {
  goTo('club-detail');
}

function switchClubTab(index, btn) {
  document.querySelectorAll('#screen-club-detail .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  for (let i = 0; i < 5; i++) {
    const el = document.getElementById('clubTab' + i);
    if (el) el.classList.toggle('hidden', i !== index);
  }
}

function joinClub(btn) {
  btn.classList.add('joined');
  btn.textContent = 'В клубе';
  btn.onclick = (e) => { e.stopPropagation(); openClubDetail(1); };
}

// ==================== СТАРТ ====================
(function init() {
  const isRegistered = localStorage.getItem('registered') === '1';
  updateHome();
  updateProfile();

  if (isRegistered) {
    goTo('home');
  } else {
    goTo('landing');
  }
})();