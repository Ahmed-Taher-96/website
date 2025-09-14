const projectDetails = {
    'sales-dashboard': {
        title: 'Sales Performance Dashboard',
        screenshots: [
            { img: 'https://l.top4top.io/p_3543loyew1.png', label: '' },


        ],
        problem: 'The business was using multiple scattered spreadsheets to track sales data across products and regions. This caused:\n- Manual reporting that took hours each week\n- Inconsistent and outdated performance insights\n- Difficulty spotting trends or acting quickly',
        approach: 'I designed and built a fully interactive Excel dashboard using:\n- Power Query to import and clean raw data from multiple files\n- Pivot Tables for dynamic data summaries\n- Slicers & Timelines for filtering by date, product, or region\n- KPI Cards to track performance at a glance\n- Automated Structure so clients can refresh data with one click\n- Professional Layout focused on usability and clarity',
        results: '- Significantly reduced time spent on manual reporting tasks\n- Improved overall productivity and workflow efficiency\n- Boosted revenue through better visibility into performance\n- Enabled managers to make fast, data-driven decisions\n- Helped identify underperforming products and regions early',
        metrics: [
        ]
    },
    'churn-prediction': {
        title: 'Hospital Prescription Analysis',
        screenshots: [
            { img: 'https://f.top4top.io/p_3543z96ac1.png', label: '' },
       

        ],
        problem: 'Hospital prescription data was scattered across different sources—doctors, patients, medications, and prescriptions. There was no unified system to answer questions like:\n\nWhat medications are being overused?\n\nWhich doctor is prescribing the most?\n\nWhat are patient-specific or drug-specific trends?\n\nThe lack of integration and insights limited the hospital\'s ability to monitor performance, track prescriptions, or identify optimization opportunities.',
        approach: 'I built a normalized relational database from scratch using SQL, and analyzed it through custom queries:\n\nCreated 4 key tables: Doctor, Patient, Medication, Prescription\n\nAdded primary/foreign key constraints to ensure data integrity\n\nJoined tables using JOIN to combine multiple data dimensions\n\nWrote real-world queries such as:\n\nListing prescriptions by doctor, patient, and medication\n\nFiltering by doctor or patient names\n\nUsing subqueries to compare dosages to the average\n\nUsing GROUP BY and HAVING to find over-prescribing doctors\n\nFollowed clean formatting and business-style naming for readability',
        results: 'Built a complete, queryable hospital database with strong data integrity\n\nEnabled tracking of doctor behavior, patient treatment, and drug usage\n\nProvided ready-to-use queries for reporting and decision support\n\nDemonstrated mastery of SQL joins, subqueries, aggregation, and constraints\n\nProject can be reused or scaled for larger healthcare datasets',
        metrics: [
        ]
    },
    'risk-analytics': {
        title: 'Financial Risk Analytics Platform',
        screenshots: [
            { icon: '📈', label: 'Risk Dashboard' },
            { icon: '⚡', label: 'Monte Carlo Simulation' },
            { icon: '📊', label: 'Portfolio Analysis' }
        ],
        problem: 'The investment firm lacked comprehensive risk assessment tools, relying on outdated methods that couldn\'t handle complex portfolio interactions or provide real-time risk metrics during volatile market conditions.',
        approach: 'Developed a comprehensive risk analytics platform using R and Shiny, implementing Monte Carlo simulations for VaR calculations, stress testing scenarios, and correlation analysis. Integrated real-time market data feeds and created interactive visualizations for risk managers.',
        results: 'Improved risk assessment accuracy by 60%, reduced portfolio volatility by 28%, and enabled real-time risk monitoring. The platform helped avoid significant losses during market downturns and optimized portfolio allocation strategies.',
        metrics: [
            { value: '60%', label: 'Accuracy Improvement' },
            { value: '28%', label: 'Volatility Reduction' },
            { value: '15%', label: 'Return Optimization' }
        ]
    },
    'supply-chain': {
        title: 'Supply Chain Optimization',
        screenshots: [
            { icon: '🔍', label: 'Supply Chain Map' },
            { icon: '📦', label: 'Inventory Dashboard' },
            { icon: '🚚', label: 'Logistics Optimization' }
        ],
        problem: 'Inefficient supply chain operations with high inventory costs, frequent stockouts, and suboptimal logistics routes. The company needed better demand forecasting and inventory optimization to reduce costs while maintaining service levels.',
        approach: 'Implemented advanced demand forecasting using ARIMA and machine learning models, optimized inventory levels using ABC analysis and safety stock calculations, and developed logistics optimization algorithms. Created comprehensive dashboards for supply chain visibility.',
        results: 'Reduced operational costs by 28%, decreased stockouts by 45%, and improved delivery times by 22%. The optimization strategies freed up $1.8M in working capital and increased customer satisfaction scores.',
        metrics: [
            { value: '28%', label: 'Cost Reduction' },
            { value: '45%', label: 'Fewer Stockouts' },
            { value: '$1.8M', label: 'Capital Freed' }
        ]
    },
    'taher': {
        title: 'Supply Chain Optimization of taher',
        screenshots: [
            { icon: '🔍', label: 'Supply Chain Map' },
            { icon: '📦', label: 'Inventory Dashboard' },
            { icon: '🚚', label: 'Logistics Optimization' }
        ],
        problem: 'Inefficient supply chain operations with high inventory costs, frequent stockouts, and suboptimal logistics routes. The company needed better demand forecasting and inventory optimization to reduce costs while maintaining service levels.',
        approach: 'Implemented advanced demand forecasting using ARIMA and machine learning models, optimized inventory levels using ABC analysis and safety stock calculations, and developed logistics optimization algorithms. Created comprehensive dashboards for supply chain visibility.',
        results: 'Reduced operational costs by 28%, decreased stockouts by 45%, and improved delivery times by 22%. The optimization strategies freed up $1.8M in working capital and increased customer satisfaction scores.',
        metrics: [
            { value: '28%', label: 'Cost Reduction' },
            { value: '45%', label: 'Fewer Stockouts' },
            { value: '$1.8M', label: 'Capital Freed' }
        ]
    },
};

// Show project detail modal
function showProjectDetail(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
                <h2 class="project-detail-title">${project.title}</h2>
                
<div class="project-screenshots">
  ${project.screenshots.map(screenshot => `
  <div class="screenshot">
  ${screenshot.img
            ? `<img src="${screenshot.img}" 
        alt="${screenshot.label}" 
        class="shot-img" 
        onclick="openImageModal('${screenshot.img}', '${screenshot.label}')"/>`

            : `<div class="screenshot-placeholder">${screenshot.icon || ''}</div>`
        }
  <div class="screenshot-label">${screenshot.label}</div>
</div>
  `).join('')}
</div>

                <div class="project-metrics">
                    ${project.metrics.map(metric => `
                        <div class="metric-card">
                            <div class="metric-value">${metric.value}</div>
                            <div class="metric-label">${metric.label}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="project-story">
                    <div class="story-section">
                        <h3>🎯 The Problem</h3>
                        <p>${project.problem}</p>
                    </div>
                    
                    <div class="story-section">
                        <h3>🔧 My Approach</h3>
                        <p>${project.approach}</p>
                    </div>
                    
                    <div class="story-section">
                        <h3>🚀 Results & Impact</h3>
                        <p>${project.results}</p>
                    </div>
                </div>
            `;

    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project detail modal
function closeProjectDetail() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}



// Chatbot functionality
let chatbotOpen = false;

// Predefined responses for the chatbot
const chatbotResponses = {
greetings: [
"Hello! I'm here to help you learn more about Ahmed's data analysis expertise.",
"Hi there! What would you like to know about Ahmed's work?",
"Welcome! I can tell you about Ahmed's projects, services, or experience.",
"Hey! 👋 Need data help or just here to chat? Either way, I’m ready!",
"Hi! Whether you're here for insights or just a good dashboard pun... I’ve got you covered."
],
services: [
"Ahmed offers several key services:\n\n📊 Data Visualization - Creating interactive dashboards and compelling visualizations\n🤖 Machine Learning - Building predictive models and AI solutions\n📈 Business Intelligence - Transforming data into strategic insights\n🔍 Data Mining - Extracting valuable insights from large datasets\n\nWhich service interests you most?",
"Need dashboards, automation, or machine learning? Ahmed builds smart, scalable solutions that save you time and money.",
"Ahmed transforms chaos into clarity—whether it’s Excel, Python, or SQL. Which tool are you curious about today?"
],
projects: [
"Ahmed has completed several impressive projects:\n\n📊 Sales Performance Dashboard - Interactive Excel dashboard with 85% time savings\n🤖 Hospital SQL Database - Normalized structure for prescription tracking\n🚀 Risk Analytics Platform - Real-time VaR with Monte Carlo\n\nWant a sneak peek into one of them?",
"Each project Ahmed builds is a custom data story—interactive, insightful, and impactful. Want to see his favorite one?",
"Whether you're into Excel dashboards or SQL wizardry, Ahmed has a project that’ll impress."
],
experience: [
"Ahmed is a skilled data analyst with:\n\n✅ 6+ completed projects\n✅ 98% client satisfaction rate\n✅ 24/7 support availability\n✅ Expertise in Excel, Python, SQL, Machine Learning\n\nHe specializes in turning complex data into actionable business insights!",
"Ahmed blends engineering logic with analytical thinking—perfect for solving real-world data problems.",
"From spreadsheets to simulations, Ahmed’s experience covers every step of the data journey. Want to see his strongest skill?"
],
contact: [
  "Ahmed responds quickly and professionally. Try email or LinkedIn—and he’s even cooler in real life! 😎 Anyways...\n\nYou can reach Ahmed through:\n\n📧 Email: ahmed.taher.youssef@outlook.com\n💼 LinkedIn: linkedin.com/in/ahmed-taher96\n🔗 GitHub: github.com/Ahmed-Taher-96\n\nHe's always happy to discuss new projects and opportunities!",
  "You can reach Ahmed through:\n\n📧 Email: ahmed.taher.youssef@outlook.com\n💼 LinkedIn: linkedin.com/in/ahmed-taher96\n🔗 GitHub: github.com/Ahmed-Taher-96\n\nHe's always happy to discuss new projects and opportunities!"
],
pricing: [
"Ahmed offers competitive pricing tailored to your specific needs. Factors include:\n\n• Project complexity and scope\n• Timeline requirements\n• Data volume and sources\n• Deliverable format\n\nFor a personalized quote, please contact Ahmed directly. He offers free initial consultations!",
"Data clarity shouldn't cost a fortune. Ahmed adapts pricing to suit freelancers, startups, or large teams—everyone's welcome."
],
fun: [
"Why did the data analyst break up with the graph? It just didn’t *trend* well anymore! 😅",
"I analyze data by day and crack terrible jokes by night. Want to hear one more?",
"Feeling bored? I can tell you fun facts about Excel or toss a SQL pun your way!"
],
confused: [
"Hmm... I didn’t quite catch that. Try rephrasing or say 'help' to get started!",
"That's either a typo or some kind of encrypted message 🤖. Can you say it again?",
"Beep boop... System confused. Please send data in clearer format! 😅"
],
default: [
"That's a great question! While I can help with general information about Ahmed's services, projects, and experience, for specific technical details I'd recommend contacting Ahmed directly.",
"I'd be happy to help! You can ask me about Ahmed's services, past projects, experience, or how to get in touch with him.",
"Interesting question! For the most accurate and detailed information, I'd suggest reaching out to Ahmed directly through the contact options on this page.",
"I’m trained on Ahmed’s work, but I’m still learning jokes. Ask me something about Excel, SQL, or Python!",
"I'm not sure how to answer that, but I bet Ahmed can! Shall I show you how to reach him?"
]
};

function toggleChatbot() {
    const chatWindow = document.getElementById('chatbot-window');
    chatbotOpen = !chatbotOpen;

    if (chatbotOpen) {
        chatWindow.classList.add('active');
        document.getElementById('chat-input').focus();
    } else {
        chatWindow.classList.remove('active');
    }
}

function closeChatbot() {
    const chatWindow = document.getElementById('chatbot-window');
    chatWindow.classList.remove('active');
    chatbotOpen = false;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    input.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Generate bot response after delay
    setTimeout(() => {
        const response = generateResponse(message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    const messagesContainer = document.getElementById('chat-messages');
    indicator.classList.add('active');
    messagesContainer.appendChild(indicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    indicator.classList.remove('active');
}


function handleSpecificQuestions(message) {
if (message.includes('how many') && message.includes('joke')) {
return "I’ve got a database full of bad puns... but let’s say around 10 (and growing!).";
}
if (message.includes('how old') && message.includes('you')) {
return "In bot years? I’m ancient. But this version of me was just deployed recently!";
}
if (message.includes('who') && message.includes('ahmed')) {
return "Ahmed Taher is a civil engineer turned data analyst with a passion for solving problems through data. Want to hear about his journey?";
}
if (message.includes('what') && message.includes('can you do')) {
return "I can chat, entertain, and tell you all about Ahmed's services and projects. I’m basically the voice of his portfolio!";
}
if (message.includes('are you human') || message.includes('are you real')) {
return "I'm a chatbot, but I swear I have feelings... especially about clean datasets!";
}
if ((message.includes('how') && message.includes('are you')) || message.includes('you good?')) {
    return "I'm doing awesome! Thanks for asking 😄";
}
return null;
}



function generateResponse(userMessage) {
const message = userMessage.toLowerCase().trim();


// Step 1: Try matching known questions first
const specificAnswer = handleSpecificQuestions(message);
if (specificAnswer) return specificAnswer;


// Step 2: Keyword category matching


 // --- GREETINGS ---
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
        return getRandomResponse('greetings');
    }
    // --- SERVICES ---
    if (message.includes('service') || message.includes('what do') || message.includes('what can') || message.includes('offer')) {
        return getRandomResponse('services');
    }
    // --- PROJECTS ---
    if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('example')) {
        return getRandomResponse('projects');
    }
    // --- EXPERIENCE / SKILLS ---
    if (message.includes('experience') || message.includes('skill') || message.includes('background') || message.includes('about')) {
        return getRandomResponse('experience');
    }
    // --- CONTACT INFO ---
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')|| message.includes('touch')) {
        return getRandomResponse('contact');
    }
    // --- PRICING ---
    if (message.includes('price') || message.includes('cost') || message.includes('rate') || message.includes('fee')) {
        return getRandomResponse('pricing');
    }
    // --- TECH STACK ---
    if (message.includes('excel') || message.includes('python') || message.includes('sql') || message.includes('machine learning')) {
        return "Yes! Ahmed is highly skilled in Excel, Python, SQL, and Machine Learning. He uses these tools to create powerful data solutions. Want to see a demo or example?";
    }
    // --- YES / NO LOGIC ---
    if (message === 'yes' || message === 'yeah' || message === 'sure' || message === 'absolutely') {
        const followUps = [
            "Awesome! What would you like to explore first — projects or services?",
            "Great! Would you like to see examples or ask me anything?",
            "Cool! Want to check out Ahmed's dashboards or contact him directly?"
        ];
        return followUps[Math.floor(Math.random() * followUps.length)];
    }
    if (message === 'no' || message === 'nah' || message === 'not really') {
        const replies = [
            "No worries! Let me know if you change your mind.",
            "All good! I'm always here if you get curious later.",
            "Totally fine! We can just chat or explore something else."
        ];
        return replies[Math.floor(Math.random() * replies.length)];
    }
    // --- FUN / JOKES / SMALL TALK ---
    if (message.includes('joke') || message.includes('bored') || message.includes('funny') || message.includes('robot')) {
        return getRandomResponse('fun');
    }
    // --- LOGICAL RANDOM QUESTIONS ---
    if (message.includes("how many") || message.includes("do you have") || message.includes("can you count")) {
        return "I'm not sure about the exact number, but I’ve got *plenty* of tricks up my code! Want to hear one?";
    }
    if (message.includes("who made you") || message.includes("are you real") || message.includes("are you human")) {
        return "I was built with 💻, ☕, and a sprinkle of personality. Real? Sort of. Human? Not yet 😉";
    }
    if (message.includes("how are you")) {
        return "I’m feeling... 01001100 01001111 01001100 😄 Just kidding! I’m always ready to help.";
    }
    if (message.match(/^[a-z]{3,}$/) && !message.includes(' ')) {
        return getRandomResponse('confused');
    }
    // --- DEFAULT FALLBACK ---
    return getRandomResponse('default');
}

function getRandomResponse(category) {
const responses = chatbotResponses[category];
return responses[Math.floor(Math.random() * responses.length)];
}

// Handle Enter key in chat input
document.addEventListener('DOMContentLoaded', function () {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Close modal when clicking outside
document.getElementById('project-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeProjectDetail();
    }
});



// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProjectDetail();
    }
});

// Enhanced continuous parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Background orbs parallax
    const orbs = document.querySelectorAll('.glow-orb');
    orbs.forEach((orb, index) => {
        const speed = 0.05 + (index * 0.03);
        const rotation = scrolled * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
    });

    // Continuous parallax for all elements
    const parallaxElements = document.querySelectorAll('.parallax-element');
    parallaxElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const windowBottom = scrolled + windowHeight;

        // Only apply parallax if element is in viewport
        if (scrolled < elementTop + elementHeight && windowBottom > elementTop) {
            const speed = 0.02 + (index % 4) * 0.01; // Varying speeds
            const yPos = -(scrolled - elementTop) * speed;
            const scale = 1 + (Math.sin((scrolled - elementTop) * 0.001) * 0.02);

            element.style.transform = `translateY(${0}px) scale(${scale})`;
        }
    });
});

// Scroll animations with enhanced observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Enhanced hover effects for all cards
document.querySelectorAll('.project-card, .service-card, .stat-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// Smooth scrolling for navigation links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced stats counter animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalNumber = stat.textContent;
        const isPercentage = finalNumber.includes('%');
        const isPlus = finalNumber.includes('+');
        const isSlash = finalNumber.includes('/');

        let numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = numericValue / 60;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }

            let displayValue = Math.floor(current);
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            if (isSlash) displayValue = finalNumber.replace(/^\d+/, displayValue);
            if (finalNumber.includes('M')) displayValue = (displayValue / 1000000).toFixed(1) + 'M+';

            stat.textContent = displayValue;
        }, 30);
    });
}

// Trigger stats animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}



// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#00d4ff';
        }
    });
});



function openImageModal(src, caption) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("image-caption");

  modal.style.display = "block";
  modalImg.src = src;
  captionText.innerText = caption;

  document.body.style.overflow = "hidden"; // lock background scroll
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // restore scroll
}


