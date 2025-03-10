const diseases = {
    "Common Cold": {
        "symptoms": {
            "en": ["runny nose", "sneezing", "cough"],
            "hi": ["नाक बहना", "छींक आना", "खांसी"],
            "mr": ["नाक वाहणे", "शिंक येणे", "खोकला"]
        }
    },
    "Flu": {
        "symptoms": {
            "en": ["fever", "body ache", "headache"],
            "hi": ["बुखार", "शरीर दर्द", "सिरदर्द"],
            "mr": ["ताप", "शरीर दुखणे", "डोकेदुखी"]
        }
    }
};

function predictDisease() {
    const input = document.getElementById('symptomsInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    
    let maxMatches = 0;
    let predictedDisease = "No matching disease found";
    
    // Check matches in all languages
    for(const [disease, data] of Object.entries(diseases)) {
        let matches = 0;
        
        // Check all language symptom sets
        for(const langSymptoms of Object.values(data.symptoms)) {
            matches += langSymptoms.filter(symptom => 
                input.includes(symptom.toLowerCase())
            ).length;
        }
        
        if(matches > maxMatches) {
            maxMatches = matches;
            predictedDisease = disease;
        }
    }
    
    resultDiv.innerHTML = `<h3>Predicted Disease: ${predictedDisease}</h3>`;
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeIcon = document.getElementById('themeIcon');
    themeIcon.textContent = isDarkMode ? '🌞' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
  
  // Initialize theme
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeIcon = document.getElementById('themeIcon');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.textContent = '🌞';
    } else {
      themeIcon.textContent = '🌙';
    }
  }
  
  window.addEventListener('load', initializeTheme);
