// ==================== DATA (travel_recommendation_api.json) ====================
const API_DATA = {
  "countries": [
    {
      "id": 1,
      "name": "Australia",
      "cities": [
        { 
          "name": "Sydney, Australia", 
          "imageUrl": "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge." 
        },
        { 
          "name": "Melbourne, Australia", 
          "imageUrl": "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "A cultural hub famous for its art, food, and diverse neighborhoods." 
        }
      ]
    },
    {
      "id": 2,
      "name": "Japan",
      "cities": [
        { 
          "name": "Tokyo, Japan", 
          "imageUrl": "https://images.pexels.com/photos/161251/shibuya-tokyo-japan-crossing-161251.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms." 
        },
        { 
          "name": "Kyoto, Japan", 
          "imageUrl": "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "Known for its historic temples, gardens, and traditional tea houses." 
        }
      ]
    },
    {
      "id": 3,
      "name": "Brazil",
      "cities": [
        { 
          "name": "Rio de Janeiro, Brazil", 
          "imageUrl": "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "A lively city known for stunning beaches, vibrant carnival celebrations." 
        },
        { 
          "name": "São Paulo, Brazil", 
          "imageUrl": "https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=600", 
          "description": "The financial hub with diverse culture, arts, and vibrant nightlife." 
        }
      ]
    }
  ],
  "temples": [
    { 
      "id": 1, 
      "name": "Angkor Wat, Cambodia", 
      "imageUrl": "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600", 
      "description": "A UNESCO World Heritage site and the largest religious monument in the world." 
    },
    { 
      "id": 2, 
      "name": "Taj Mahal, India", 
      "imageUrl": "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600", 
      "description": "An iconic symbol of love and a masterpiece of Mughal architecture." 
    }
  ],
  "beaches": [
    { 
      "id": 1, 
      "name": "Bora Bora, French Polynesia", 
      "imageUrl": "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600", 
      "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows." 
    },
    { 
      "id": 2, 
      "name": "Copacabana Beach, Brazil", 
      "imageUrl": "https://images.pexels.com/photos/984833/pexels-photo-984833.jpeg?auto=compress&cs=tinysrgb&w=600", 
      "description": "A famous beach in Rio de Janeiro with vibrant atmosphere and scenic views." 
    }
  ]
};

// ==================== FETCH API SIMULATION ====================
function fetchRecommendationData() {
  return new Promise((resolve, reject) => {
    // Simulating fetch from travel_recommendation_api.json
    console.log("Fetching travel recommendation data...");
    resolve(API_DATA);
  });
}

// ==================== HELPER FUNCTIONS ====================
function getAllRecommendations(data) {
  let all = [];
  // countries -> cities
  data.countries.forEach(country => {
    country.cities.forEach(city => {
      all.push({
        name: city.name,
        imageUrl: city.imageUrl,
        description: city.description,
        category: "country",
        countryName: country.name
      });
    });
  });
  // temples
  data.temples.forEach(temple => {
    all.push({
      name: temple.name,
      imageUrl: temple.imageUrl,
      description: temple.description,
      category: "temple"
    });
  });
  // beaches
  data.beaches.forEach(beach => {
    all.push({
      name: beach.name,
      imageUrl: beach.imageUrl,
      description: beach.description,
      category: "beach"
    });
  });
  return all;
}

// Keyword matching with case-insensitive and variations (Task 7)
function matchKeywordToCategory(keyword, allRecs) {
  const lowerKey = keyword.toLowerCase().trim();
  let matched = [];
  
  // Match beaches (variations: beach, beaches, Beach, BEACH)
  if (lowerKey.includes("beach") || lowerKey === "beach" || lowerKey === "beaches") {
    matched = allRecs.filter(item => item.category === "beach");
  } 
  // Match temples (variations: temple, temples, Temple, TEMPLE)
  else if (lowerKey.includes("temple") || lowerKey === "temples") {
    matched = allRecs.filter(item => item.category === "temple");
  }
  // Match countries/cities (variations: country, countries, city, cities)
  else if (lowerKey.includes("country") || lowerKey.includes("countries") || 
           lowerKey === "city" || lowerKey === "cities" || lowerKey === "nation") {
    matched = allRecs.filter(item => item.category === "country");
  }
  else {
    // Fallback: fuzzy match by name, description, or country name
    matched = allRecs.filter(item => 
      item.name.toLowerCase().includes(lowerKey) || 
      item.description.toLowerCase().includes(lowerKey) ||
      (item.countryName && item.countryName.toLowerCase().includes(lowerKey))
    );
  }
  
  return matched;
}

// Optional Task 10: Display local time for destinations
function getDestinationTimeZone(destinationName) {
  const timeMap = {
    "Sydney": "Australia/Sydney",
    "Melbourne": "Australia/Sydney",
    "Tokyo": "Asia/Tokyo",
    "Kyoto": "Asia/Tokyo",
    "Rio de Janeiro": "America/Sao_Paulo",
    "São Paulo": "America/Sao_Paulo",
    "Angkor Wat": "Asia/Phnom_Penh",
    "Taj Mahal": "Asia/Kolkata",
    "Bora Bora": "Pacific/Tahiti",
    "Copacabana Beach": "America/Sao_Paulo"
  };
  
  let foundKey = Object.keys(timeMap).find(key => destinationName.includes(key));
  if (foundKey) {
    try {
      const tz = timeMap[foundKey];
      const options = { 
        timeZone: tz, 
        hour12: true, 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
      };
      return new Date().toLocaleTimeString('en-US', options);
    } catch(e) { 
      return null; 
    }
  }
  return null;
}

// Render results with grid layout (Task 8)
function renderResults(resultsArray) {
  const container = document.getElementById('resultsContainer');
  if (!container) return;
  
  if (!resultsArray || resultsArray.length === 0) {
    container.innerHTML = `<div style="background: rgba(0,0,0,0.5); padding: 2rem; border-radius: 2rem; color:white; text-align:center;">
      ✨ No recommendations found. Try "beach", "temple", or "country".
    </div>`;
    return;
  }
  
  container.innerHTML = resultsArray.map(item => {
    let timeHtml = '';
    const timeStr = getDestinationTimeZone(item.name);
    if (timeStr) {
      timeHtml = `<div class="time-badge">🕒 Local time: ${timeStr}</div>`;
    }
    return `
      <div class="result-card">
        <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Travel+Vista'">
        <div class="result-info">
          <h3>📍 ${item.name}</h3>
          <p>${item.description}</p>
          ${timeHtml}
        </div>
      </div>
    `;
  }).join('');
}

// Search function (Task 6 & 7)
async function performSearch() {
  const searchInput = document.getElementById('searchInput');
  let keyword = searchInput ? searchInput.value : '';
  
  if (!keyword.trim()) {
    document.getElementById('resultsContainer').innerHTML = `<div style="background:rgba(0,0,0,0.6); padding:1.5rem; border-radius:2rem; color:white;">
      🌍 Please enter a keyword (beach, temple, country...)
    </div>`;
    return;
  }
  
  try {
    const data = await fetchRecommendationData();
    const allRecommendations = getAllRecommendations(data);
    const matched = matchKeywordToCategory(keyword, allRecommendations);
    renderResults(matched);
  } catch (err) {
    console.error("Fetch error:", err);
    document.getElementById('resultsContainer').innerHTML = `<div style="color:red; text-align:center;">
      ⚠️ Failed to load recommendations.
    </div>`;
  }
}

// Reset/Clear results (Task 9)
function resetResults() {
  const container = document.getElementById('resultsContainer');
  if (container) {
    container.innerHTML = '';
  }
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  console.log("Results cleared");
}

// Page routing (Task 4: Hide search on About & Contact)
function showPage(pageId) {
  const homeDiv = document.getElementById('homePage');
  const aboutDiv = document.getElementById('aboutPage');
  const contactDiv = document.getElementById('contactPage');
  const searchContainer = document.getElementById('searchContainer');
  
  homeDiv.classList.add('hidden-page');
  aboutDiv.classList.add('hidden-page');
  contactDiv.classList.add('hidden-page');
  
  if (pageId === 'home') {
    homeDiv.classList.remove('hidden-page');
    homeDiv.classList.add('active-page');
    if(searchContainer) searchContainer.style.display = 'flex';
  } else if (pageId === 'about') {
    aboutDiv.classList.remove('hidden-page');
    if(searchContainer) searchContainer.style.display = 'none';
  } else if (pageId === 'contact') {
    contactDiv.classList.remove('hidden-page');
    if(searchContainer) searchContainer.style.display = 'none';
  }
}

// Contact form submission handler (Task 5)
function setupContactForm() {
  const contactForm = document.getElementById('contactFormElem');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('contactMsg').value.trim();
      const feedback = document.getElementById('formFeedback');
      
      if(!name || !email || !msg) {
        feedback.innerHTML = '<span style="color:#c0392b;">❗ Please fill all fields.</span>';
        return;
      }
      
      feedback.innerHTML = '<span style="color:#2c6e2c;">✅ Thank you! Our team will get back soon.</span>';
      contactForm.reset();
      setTimeout(() => { feedback.innerHTML = ''; }, 3000);
    });
  }
}

// ==================== EVENT LISTENERS ====================
function initializeEventListeners() {
  // Navigation
  document.getElementById('nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('home');
  });
  
  document.getElementById('nav-about').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('about');
  });
  
  document.getElementById('nav-contact').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('contact');
  });
  
  // Search and Reset buttons
  const searchBtn = document.getElementById('searchBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  if (resetBtn) resetBtn.addEventListener('click', resetResults);
  
  // Allow Enter key to trigger search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

// ==================== INITIALIZATION ====================
// Load data and log to console (Task 6)
fetchRecommendationData().then(data => {
  console.log("Travel data loaded successfully:", data);
}).catch(e => console.warn("Error loading data:", e));

// Initialize all event listeners and form
initializeEventListeners();
setupContactForm();

console.log("TravelVista application initialized");
