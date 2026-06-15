// Baza zadań
const taskPool = [
    { req: 'speed', title: "OSWAJANIE PRĘDKOŚCI NA CROSSIE", desc: "Zanim podniesiesz koło, musisz nauczyć się panować nad gazem. Skup się na płynnym, ale zdecydowanym odkręcaniu manetki na prostych odcinkach.", details: "<h4>🎯 CEL</h4><p>Płynne oddawanie mocy na crossie bez szarpania.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Wykonaj 10 prostych odcinków odkręcając gaz liniowo do 80%.</li><li>Brak gwałtownych szarpnięć, pełna kontrola sprzęgła.</li></ul>" },
    { req: 'standing', title: "BALANS CIAŁEM (POZYCJA STOJĄCA)", desc: "Wheelie to 80% balans ciałem, a 20% gaz. Musisz idealnie wyczuć środek ciężkości motocykla terenowego.", details: "<h4>🎯 CEL</h4><p>Idealne wyczucie balansu w terenie.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Przejedź minimum 2 minuty na stojąco w trudnym terenie bez siadania.</li><li>Amortyzuj nierówności wyłącznie nogami, ściskając motocykl kolanami.</li></ul>" },
    { req: 'start', title: "STRZAŁ ZE SPRZĘGŁA (PODRYWANIE KOŁA)", desc: "Naucz się idealnego momentu, w którym sprzęgło łapie, by agresywnie przekazać moc na tylne koło z kostką.", details: "<h4>🎯 CEL</h4><p>Podrzucenie przedniego koła na wysokość ok. 30 cm używając wyłącznie sprzęgła.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Podrzuć koło z pierwszego biegu 15 razy.</li><li>Nie używaj pleców - wykorzystaj moment obrotowy silnika!</li></ul>" },
    { req: 'brake', title: "TYLNY HAMULEC - KOŁO RATUNKOWE", desc: "Najważniejsza lekcja: ratowanie się z 'przewrotki na plecy'. Wyrób pamięć mięśniową na prawej stopie.", details: "<h4>🎯 CEL</h4><p>Instynktowne uderzenie w dźwignię tylnego hamulca podczas podrywania koła.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Rozpędź się, podrzuć przednie koło na 50 cm.</li><li>Natychmiast zbij je w dół mocno wciskając tylny hamulec (20 powtórzeń).</li></ul>" },
    
    // Core tasks
    { title: "ZNAJDOWANIE PIONU (BP)", desc: "Powoli zwiększaj wysokość przedniego koła, aż poczujesz moment nieważkości - Balance Point (BP).", details: "<h4>🎯 CEL</h4><p>Utrzymanie koła w górze przez 2 sekundy w BP.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Złap BP na drugim biegu.</li><li>Nie przyspieszaj - motocykl ma jechać stałą prędkością.</li></ul>" },
    { title: "KONTROLA GAZEM W BP", desc: "Kiedy jesteś w pionie, minimalne ruchy manetką pozwalają utrzymać motocykl w równowadze.", details: "<h4>🎯 CEL</h4><p>Stabilizacja lotu za pomocą płynnego gazu.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Przejedź na tylnym kole 15 metrów, korygując opadanie gazem.</li><li>Trzymaj stopę cały czas na hamulcu!</li></ul>" },
    { title: "ZWALNIANIE NA KOLE", desc: "Zaczynamy wyższą szkołę jazdy: wchodzisz za pion i używasz hamulca, aby zwolnić jadąc na jednym kole.", details: "<h4>🎯 CEL</h4><p>Jazda za BP (za punktem balansu).</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Osiągnij BP, odchyl się mocniej do tyłu i natychmiast skoryguj hamulcem, zwalniając motocykl o 10 km/h nie opuszczając koła.</li></ul>" },
    { title: "ZMIANA BIEGÓW W POWIETRZU", desc: "Aby jechać na kole kilometrami, musisz nauczyć się 'przebijać' biegi w powietrzu bez użycia sprzęgła.", details: "<h4>🎯 CEL</h4><p>Przebicie z 2 na 3 bieg podczas trwania wheelie.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Podrzuć na dwójce, złap BP, zamknij lekko gaz i zdecydowanie podbij dźwignię zmiany biegów na trójkę. Utrzymaj pion!</li></ul>" },
    
    // Padding tasks
    { title: "PERFEKCJA HAMULCA", desc: "Szlifuj pamięć mięśniową. Hamulec to Twoje życie na crossie.", details: "<h4>🎯 CEL</h4><p>100% pewności przy ratowaniu się hamulcem.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Podrywaj koło agresywniej niż zwykle i ucinaj lot w ułamku sekundy prawą stopą (15 prób).</li></ul>" },
    { title: "WYTRZYMAŁOŚĆ W PIONIE", desc: "Zwiększaj dystans. Szukaj totalnego luzu w ciele podczas lotu.", details: "<h4>🎯 CEL</h4><p>Wydłużenie dystansu i redukcja stresu.</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Przejedź jednorazowo minimum 50 metrów bez uczucia spinania mięśni rąk.</li></ul>" }
];

let userSkills = { speed: false, standing: false, start: false, brake: false };
let programLength = 5;

const translations = {
    pl: {
        navHome: "Strona Główna",
        navSetup: "Trening AI",
        navPlan: "Twój Plan",
        heroTitle: "Zbuduj<br>Dominację.",
        heroDesc: "Sztuczna inteligencja przeanalizuje Twoje błędy i ułoży rygorystyczny program treningowy dopasowany do Twojego dirt bike'a.",
        heroBtn: "Rozpocznij Kalibrację AI →",
        portfolioTitle: "MOJE PORTFOLIO",
        portfolioItem1: "Trener Wheelie AI",
        portfolioItem2: "Soon..."
    },
    en: {
        navHome: "Home",
        navSetup: "AI Training",
        navPlan: "Your Plan",
        heroTitle: "Build<br>Dominance.",
        heroDesc: "Artificial intelligence will analyze your mistakes and create a rigorous training program tailored to your dirt bike.",
        heroBtn: "Start AI Calibration →",
        portfolioTitle: "MY PORTFOLIO",
        portfolioItem1: "Wheelie AI Trainer",
        portfolioItem2: "Soon..."
    }
};

let currentLang = 'pl';

function changeLang(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.style.borderColor = 'var(--border-glass)';
        btn.style.color = '#fff';
    });
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) {
        activeBtn.style.borderColor = 'var(--primary)';
        activeBtn.style.color = 'var(--primary)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeLang(currentLang);
});

// --- SHARED UI LOGIC ---

function toggleAccordion() {
    const content = document.getElementById('portfolio-content');
    if(content) content.classList.toggle('active');
}

let toastTimeout;
function showToast(msg) {
    let toast = document.getElementById('toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// --- SURVEY LOGIC (survey.html) ---

function toggleSkill(el, skillName) {
    el.classList.toggle('selected');
    userSkills[skillName] = el.classList.contains('selected');
}

function setLength(val, el) {
    programLength = val;
    document.querySelectorAll('.skill-option.length').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
}

function generateAIPlan() {
    // Show loading
    document.getElementById('view-setup').style.display = 'none';
    document.getElementById('view-loading').style.display = 'flex';

    // Simulate AI loading with GSAP
    gsap.to("#load-fill", {width: "100%", duration: 2.5, ease: "power2.inOut"});
    
    setTimeout(() => {
        document.getElementById('load-txt').innerText = "KOMPILACJA DANYCH...";
        document.getElementById('load-sub').innerText = "Wgrywanie modułów balansu i trakcji";
    }, 1000);

    setTimeout(() => {
        buildDatabase();
        window.location.href = 'dashboard.html';
    }, 2500);
}

function buildDatabase() {
    let baseTasks = [];
    
    const age = parseInt(document.getElementById('inp-age').value);
    const height = parseInt(document.getElementById('inp-height').value);
    const levelInput = document.getElementById('inp-level').value || "";
    const level = levelInput.toLowerCase();
    const bikeInput = document.getElementById('inp-bike').value || "";
    const bike = bikeInput.toLowerCase();
    
    // Deep copy task pool to mutate it safely
    let pool = JSON.parse(JSON.stringify(taskPool));
    
    // DYNAMIC AI MODIFICATIONS BASED ON SURVEY
    pool.forEach(t => {
        let modifications = "";
        
        if(bike.includes('450') || bike.includes('500')) {
            modifications += "<li><b>⚠️ UWAGA " + bikeInput + ":</b> Masz potężny moment z samego dołu. Zredukuj ruch manetki o połowę w stosunku do normalnych instrukcji. Nawet muśnięcie wyrywa koło!</li>";
        } else if(bike.includes('125') || bike.includes('150') || bike.includes('2t') || bike.includes('300')) {
            modifications += "<li><b>⚠️ UWAGA " + bikeInput + " (Dwusuw/Ostra góra):</b> Silnik wkręca się agresywnie. Uważaj na moment wejścia w rezonans ('bandę'). Wyrywaj na niższych obrotach przed rezonansem.</li>";
        } else if(bike.includes('250') && (bike.includes('4t') || bike.includes('f'))) {
            modifications += "<li><b>💡 WSKAZÓWKA " + bikeInput + ":</b> Masz idealny silnik do nauki. Liniowe oddawanie mocy pozwoli Ci bardzo łatwo operować gazem w punkcie balansu.</li>";
        } else if (bikeInput !== "") {
            modifications += "<li><b>💡 WSKAZÓWKA DLA " + bikeInput.toUpperCase() + ":</b> Pamiętaj, aby przed próbami wyczuć, w którym momencie sprzęgło łapie najostrzej. Twój motocykl ma swoją unikalną charakterystykę!</li>";
        }
        
        if(height < 170 && t.req === 'standing') {
            modifications += "<li><b>💡 WSKAZÓWKA (Niski wzrost):</b> Przy twoim wzroście, trzymanie crossa kolanami może być trudniejsze. Zainwestuj w wysokie siedzenie i dobrze ustaw SAG tylnego amortyzatora.</li>";
        } else if(height > 190 && t.req === 'standing') {
            modifications += "<li><b>💡 WSKAZÓWKA (Wysoki wzrost):</b> Uważaj, aby nie pochylać się zbytnio w przód na stojąco, co obciąża kierownicę. Kup wyższą kierownicę lub risery!</li>";
        }
        
        if((level.includes('nowicjusz') || level.includes('początkujący') || level.includes('slaby') || level.includes('brak')) && t.req === 'brake') {
            modifications += "<li><b>⚠️ " + levelInput.toUpperCase() + ":</b> Jako że dopiero zaczynasz, spędź na tym etapie 2x więcej czasu. Brak pamięci mięśniowej na hamulcu to gwarantowana wywrotka na plecy.</li>";
        } else if (levelInput !== "" && t.req === 'brake') {
            modifications += "<li><b>💡 PROFIL: " + levelInput.toUpperCase() + ":</b> Twoje dotychczasowe doświadczenie pomoże Ci w balansie, ale nie lekceważ instynktu hamulca. Każdy nowy sprzęt to inna reakcja.</li>";
        }
        
        if(modifications !== "") {
            t.details = t.details.replace("<ul>", "<ul>" + modifications);
        }
    });
    
    if(!userSkills.speed) baseTasks.push(pool[0]);
    if(!userSkills.standing) baseTasks.push(pool[1]);
    if(!userSkills.start) baseTasks.push(pool[2]);
    if(!userSkills.brake) baseTasks.push(pool[3]);
    
    baseTasks.push(pool[4], pool[5], pool[6], pool[7]);
    
    let finalPlan = [];
    for(let i=0; i<programLength; i++) {
        if (i < baseTasks.length) {
            finalPlan.push({...baseTasks[i], day: i+1});
        } else {
            let p = pool[8 + (i % 2)]; 
            finalPlan.push({
                title: p.title + ` (Szlifowanie v${i-baseTasks.length+1})`,
                desc: "Kolejna sesja utrwalająca pamięć mięśniową na crossie. Pamiętaj o tylnym hamulcu.",
                details: p.details,
                day: i+1
            });
        }
    }

    finalPlan[0].status = 1; // 1 = active, 0 = locked, 2 = completed
    for(let i=1; i<finalPlan.length; i++) finalPlan[i].status = 0;

    const limitMapping = {5:1, 10:2, 15:3, 20:4, 25:5};
    const maxPerDay = limitMapping[programLength] || 1;

    const db = {
        tasks: finalPlan,
        progress: {
            lastUpdate: new Date().toDateString(),
            completedToday: 0
        },
        settings: {
            length: programLength,
            maxPerDay: maxPerDay
        }
    };
    
    localStorage.setItem('mx_ai_db', JSON.stringify(db));
}

// --- DASHBOARD LOGIC (dashboard.html) ---

function renderPlan() {
    const grid = document.getElementById('plan-grid');
    if(!grid) return; // Not on dashboard page
    
    const db = JSON.parse(localStorage.getItem('mx_ai_db'));
    if(!db) {
        window.location.href = 'index.html';
        return;
    }

    const today = new Date().toDateString();
    if(db.progress.lastUpdate !== today) {
        db.progress.lastUpdate = today;
        db.progress.completedToday = 0;
        localStorage.setItem('mx_ai_db', JSON.stringify(db));
    }

    const limitReached = db.progress.completedToday >= db.settings.maxPerDay;

    document.getElementById('ui-rule').innerText = `LIMIT: ${db.settings.maxPerDay} ZADANIA NA DZIEŃ`;
    document.getElementById('ui-progress').innerText = `Dzisiaj ukończono: ${db.progress.completedToday}/${db.settings.maxPerDay}`;

    grid.innerHTML = '';

    db.tasks.forEach((task, index) => {
        let statusClass = task.status === 2 ? 'completed' : (task.status === 1 ? 'active' : 'locked');
        let isActuallyLocked = task.status === 1 && limitReached;
        if(isActuallyLocked) statusClass = 'locked';

        let btnHtml = '';
        if(task.status === 2) btnHtml = '<button class="day-btn" disabled>ZALICZONE ✓</button>';
        else if(task.status === 1 && !limitReached) btnHtml = `<button class="day-btn" onclick="openLessonModal(${task.day})">Szczegóły Lekcji →</button>`;
        else btnHtml = '<button class="day-btn" disabled>🔒</button>';

        let lockBadge = isActuallyLocked ? '<div class="locked-badge">DOSTĘPNE JUTRO</div>' : '';

        let card = document.createElement('div');
        card.className = `day-card ${statusClass}`;
        card.innerHTML = `
            ${lockBadge}
            <div class="day-num">${task.day < 10 ? '0'+task.day : task.day}</div>
            <div class="day-content">
                <div class="day-title">Etap ${task.day}: ${task.title}</div>
                <div class="day-desc">${task.desc}</div>
                <div class="day-action">${btnHtml}</div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    gsap.fromTo(".day-card", {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.4, stagger: 0.1});
}

let activeLessonDay = null;

function openLessonModal(dayNum) {
    const db = JSON.parse(localStorage.getItem('mx_ai_db'));
    const task = db.tasks.find(t => t.day === dayNum);
    if(!task) return;

    activeLessonDay = dayNum;
    document.getElementById('lm-title').innerText = `Etap ${task.day}: ${task.title}`;
    
    let detailsHtml = task.details;
    if(!detailsHtml) {
        detailsHtml = `<h4>🎯 KONTynuACJA TRENINGU</h4><p>${task.desc}</p><h4>✅ KRYTERIA ZALICZENIA</h4><ul><li>Wykonaj sesję powtórkową dbając o maksymalną kontrolę.</li><li>Skup się na poprawności techniki.</li></ul>`;
    }
    document.getElementById('lm-body').innerHTML = detailsHtml;

    const modal = document.getElementById('lesson-modal');
    modal.style.display = 'flex';
    gsap.fromTo(".modal-content", {y: 50, opacity: 0, scale: 0.9}, {y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)"});
}

function closeLessonModal() {
    const modal = document.getElementById('lesson-modal');
    gsap.to(".modal-content", {y: 30, opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
        modal.style.display = 'none';
    }});
}

function confirmLesson() {
    if(activeLessonDay) {
        completeTask(activeLessonDay);
        closeLessonModal();
    }
}

function completeTask(dayNum) {
    const db = JSON.parse(localStorage.getItem('mx_ai_db'));
    const taskIndex = db.tasks.findIndex(t => t.day === dayNum);
    
    if(taskIndex !== -1 && db.progress.completedToday < db.settings.maxPerDay) {
        db.tasks[taskIndex].status = 2; 
        db.progress.completedToday++;
        
        if(taskIndex + 1 < db.tasks.length) {
            db.tasks[taskIndex + 1].status = 1;
        }
        
        localStorage.setItem('mx_ai_db', JSON.stringify(db));
        renderPlan();
    }
}

function resetProgress() {
    localStorage.removeItem('mx_ai_db');
    window.location.href = 'index.html';
}




