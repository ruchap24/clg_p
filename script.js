const diseases = {
  "Common Cold": {
    symptoms: {
      en: ["runny nose", "sneezing", "cough"],
      hi: ["नाक बहना", "छींक आना", "खांसी"],
      mr: ["नाक वाहणे", "शिंक येणे", "खोकला"],
    },
  },
  Flu: {
    symptoms: {
      en: ["fever", "body ache", "headache"],
      hi: ["बुखार", "शरीर दर्द", "सिरदर्द"],
      mr: ["ताप", "शरीर दुखणे", "डोकेदुखी"],
    },
  },

  Migraine: {
    symptoms: {
      en: ["severe headache", "nausea", "sensitivity to light"],
      hi: ["तीव्र सिरदर्द", "मतली", "प्रकाश संवेदनशीलता"],
      mr: ["तीव्र डोकेदुखी", "मळमळ", "प्रकाशास संवेदनशीलता"],
    },
  },
  "Food Poisoning": {
    symptoms: {
      en: ["vomiting", "diarrhea", "stomach cramps"],
      hi: ["उल्टी", "दस्त", "पेट में मरोड़"],
      mr: ["उलट्या", "अतिसार", "पोटात कळा"],
    },
  },
  Allergy: {
    symptoms: {
      en: ["itchy eyes", "sneezing", "skin rash"],
      hi: ["खुजली वाली आँखें", "छींक आना", "त्वचा पर चकत्ते"],
      mr: ["खाज सुटलेले डोळे", "शिंक येणे", "त्वचेचे पुरळ"],
    },
  },
  "Dengue Fever": {
    symptoms: {
      en: ["high fever", "joint pain", "skin rash"],
      hi: ["तेज़ बुखार", "जोड़ों का दर्द", "त्वचा पर दाने"],
      mr: ["तीव्र ताप", "सांध्यात वेदना", "त्वचेवर पुरळ"],
    },
  },
  Bronchitis: {
    symptoms: {
      en: ["persistent cough", "chest congestion", "fatigue"],
      hi: ["लगातार खांसी", "छाती में जकड़न", "थकान"],
      mr: ["सतत खोकला", "छातीत कोंजेशन", "थकवा"],
    },
  },
  Asthama: {
    symptoms: {
      en: ["wheezing", "shortness of breath", "chest tightness"],
      hi: ["घरघराहट", "सांस लेने में तकलीफ", "छाती में जकड़न"],
      mr: ["श्वासोच्छ्वासात घरघर", "श्वास कष्ट", "छातीत जखडणे"],
    },
  },
  Pneumonia: {
    symptoms: {
      en: ["fever with chills", "cough with phlegm", "breathing difficulty"],
      hi: ["कंपकंपी के साथ बुखार", "बलगम वाली खांसी", "साँस लेने में कठिनाई"],
      mr: ["कँपयुक्त ताप", "कफ असलेला खोकला", "श्वास घेण्यात अडचण"],
    },
  },
  "Urinary Tract Infection": {
    symptoms: {
      en: ["burning urination", "frequent urination", "abdominal pain"],
      hi: ["पेशाब में जलन", "बार-बार पेशाब आना", "पेट दर्द"],
      mr: ["लघवीत जळजळ", "वारंवार लघवी येणे", "पोटदुखी"],
    },
  },
  "Seasonal Allergy": {
    symptoms: {
      en: ["runny nose", "watery eyes", "sneezing"],
      hi: ["नाक बहना", "पानी वाली आँखें", "छींक आना"],
      mr: ["नाक वाहणे", "डोळे पाणावणे", "शिंक येणे"],
    },
  },
  Gastroenteritis: {
    symptoms: {
      en: ["watery diarrhea", "nausea", "abdominal cramps"],
      hi: ["पानी जैसे दस्त", "मतली", "पेट में मरोड़"],
      mr: ["पाण्यासारखे अतिसार", "मळमळ", "पोटात कळा"],
    },
  },
};

function predictDisease() {
  const input = document.getElementById("symptomsInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  let maxMatches = 0;
  let predictedDisease = "No matching disease found";

  // Check matches in all languages
  for (const [disease, data] of Object.entries(diseases)) {
    let matches = 0;

    // Check all language symptom sets
    for (const langSymptoms of Object.values(data.symptoms)) {
      matches += langSymptoms.filter((symptom) =>
        input.includes(symptom.toLowerCase())
      ).length;
    }

    if (matches > maxMatches) {
      maxMatches = matches;
      predictedDisease = disease;
    }
  }

  resultDiv.innerHTML = `<h3>Predicted Disease: ${predictedDisease}</h3>`;
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  const themeIcon = document.getElementById("themeIcon");
  themeIcon.textContent = isDarkMode ? "🌞" : "🌙";
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeIcon = document.getElementById("themeIcon");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "🌞";
  } else {
    themeIcon.textContent = "🌙";
  }
}

window.addEventListener("load", initializeTheme);

