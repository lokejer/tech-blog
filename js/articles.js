/* ---------------- DEFINE ARTICLE ARRAYS ---------------- */
let savedArticles = [];
const allArticles = [
  // article 1
  {
    id: 1,
    link: 'https://www.scientificamerican.com/article/whats-a-qubit-3-ways-scientists-build-quantum-computers/',
    title: 'The Key to Quantum Computing',
    author: 'Scientific American',
    description: 'A solid introduction to quantum computing that covers the fundamentals well. Readers 16 and above will find it informative, though some sections could benefit from deeper exploration. The writing is clear and accessible, making complex concepts understandable. While it successfully sparks curiosity about this emerging technology, it occasionally feels surface-level when discussing more advanced applications and implementations.',
    image: 'assets/articles/article-quantum1.webp',
    rating: 4,
    badge: "NEW",
    saved: false,
  },

  // article 2
  {
    id: 2,
    link: 'https://www.google.com.sg/books/edition/Principles_of_Superconducting_Quantum_Co/awxsEAAAQBAJ?hl=en&gbpv=1&pg=PA2&printsec=frontcover',
    title: 'Principles of Superconducting Quantum Computers',
    author: 'Daniel D. Stancil, Gregory T. Byrd',
    description: 'Exceptional deep dive into quantum computer hardware that brilliantly balances technical depth with accessibility. Perfect for readers 16+ interested in physics or computing. Stancil masterfully explains superconducting principles while maintaining engagement throughout. The comprehensive coverage of both theoretical foundations and practical applications makes this an invaluable resource. Outstanding clarity in explaining complex quantum phenomena—truly exemplary science communication.',
    image: 'assets/articles/article-quantum2.jpg',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 3
  {
    id: 3,
    link: 'https://www.nature.com/articles/d41586-023-01692-9',
    title: 'Qubits Rising',
    author: 'The Spotlight',
    description: 'Basic overview of qubits that barely scratches the surface of quantum computing. While accessible to readers 16+, the content lacks depth and fails to provide meaningful insights into why qubits matter. The writing feels rushed and oversimplified, missing opportunities to engage with fascinating concepts. Disappointing given the potential of the topic—leaves readers wanting substance rather than superficial explanations.',
    image: 'assets/articles/article-quantum3.jpg',
    rating: 2,
    badge: null,
    saved: false
  },

  // article 4
  {
    id: 4,
    link: 'https://www.worldscientific.com/worldscinet/iet',
    title: 'Innovation and Emerging Technologies',
    author: 'World Scientific',
    description: 'Decent survey of current technological trends suitable for readers 16 and above. Provides a reasonable overview of emerging innovations without being groundbreaking. The content is competently written and informative enough for general understanding. However, it lacks the compelling insights or unique perspectives that would elevate it beyond a standard technology review. Adequate for basic knowledge building.',
    image: 'assets/articles/article-innovation1.jpg',
    rating: 3,
    badge: null,
    saved: false
  },

  // article 5
  {
    id: 5,
    link: 'https://www.light-am.com/',
    title: 'Light | Advanced Manufacturing 光 。先进控制',
    author: 'JHL Group 中国',
    description: 'Outstanding exploration of light-based manufacturing technologies that perfectly balances technical precision with reader accessibility. Recommended for ages 16+ seeking to understand cutting-edge industrial innovation. The article excels at connecting photonic principles to real-world manufacturing breakthroughs. Exceptional clarity in explaining complex optical systems and their transformative impact on modern production. Truly illuminating content that sets new standards for technical communication.',
    image: 'assets/articles/article-innovation2.png',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 6
  {
    id: 6,
    link: 'https://chemistry-europe.onlinelibrary.wiley.com/toc/15213765/2025/31/16',
    title: 'Chemistry, an European Journal',
    author: 'European Chemical Societies Publishing',
    description: 'Well-crafted examination of contemporary chemistry developments that makes complex topics approachable for readers 16+. The scientific content is presented clearly with good attention to detail. Successfully bridges the gap between academic rigor and general accessibility. While not groundbreaking, it offers solid insights into current chemical research trends. A reliable resource for students and science enthusiasts seeking foundational understanding.',
    image: 'assets/articles/article-innovation3.webp',
    rating: 4,
    badge: null,
    saved: false
  },

  // article 7
  {
    id: 7,
    link: 'https://www.science.org/doi/10.1126/sciadv.ads5743',
    title: 'How Transcription Begins',
    author: 'sciencemag.org',
    description: 'An exceptional introduction to transcription mechanisms for young adults interested in molecular biology. Covers concepts in an unprecedented high depth and insight. The writing is clear enough for general comprehension, but readers may not fancy its similarity to a textbook writing style. Uses engaging storytelling to provide a profound foundation to transcription, while passing down innovative perspectives that make complex biology truly captivating for young adult audiences.',
    image: 'assets/articles/article-innovation4.avif',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 8
  {
    id: 8,
    link: 'https://advanced.onlinelibrary.wiley.com/journal/15214095',
    title: 'Advanced Materials',
    author: 'Wiley-VCH',
    description: 'I&#39;m recommending this cutting-edge materials science journal because it showcases the latest breakthroughs in nanotechnology, biomaterials, and smart materials that are literally reshaping our world. From self-healing concrete to flexible electronics, these innovations will define the next decade of technology. Perfect for understanding how science creates the materials powering tomorrow&#39;s innovations and career opportunities, but lacklustre in finding the right article for you.',
    image: 'assets/articles/article-innovation5.jpg',
    rating: 3,
    badge: null,
    saved: false
  },

  // article 9
  {
    id: 9,
    link: 'https://technologymagazine.com/magazine/technology-magazine-august-2023',
    title: 'GenAI - The Future of CX',
    author: 'technologymagazine.com',
    description: 'Reasonable overview of technology topics that provides basic information without exceptional depth. Suitable for general audiences seeking introductory knowledge. The content covers essential points competently, though it lacks innovative insights or compelling analysis. Writing quality is acceptable but unremarkable. Serves as a decent starting point for further exploration, meeting basic expectations without exceeding them significantly.',
    image: 'assets/articles/article-technology1.webp',
    rating: 3,
    badge: "NEW",
    saved: false
  },

  // article 10
  {
    id: 10,
    link: 'https://store.digit.in/cartPrewiew?mode=cart_add&product_id=850&quantity=1&category_id=83&page=15',
    title: 'THE NEXT GADGET IS... YOU!',
    author: '9.9 Media',
    description: 'Remarkable piece that delivers exceptional insights with outstanding clarity and depth. The comprehensive analysis showcases expert knowledge while remaining highly accessible to diverse readers. Every paragraph demonstrates thoughtful research and engaging presentation. The author\'s expertise shines through compelling examples and innovative perspectives. This exemplary work sets new benchmarks for quality content, offering tremendous value and inspiring further exploration of complex topics.',
    image: 'assets/articles/article-technology2.jpg',
    rating: 5,
    badge: "NEW",
    saved: false
  },

  // article 11
  {
    id: 11,
    link: 'https://businessmediamags.co.za/magazine-cover/technology-solutions-and-innovations-cover/switched-june-2023-cover/https://businessmediamags.co.za/magazine-cover/technology-solutions-and-innovations-cover/switched-june-2023-cover/',
    title: 'Beyond Virtual Reality',
    author: 'businessmediamags.co.za',
    description: 'Strong article that effectively communicates important concepts with good attention to detail and clarity. The content demonstrates solid research and thoughtful organization throughout. Readers will appreciate the balanced approach to complex topics and practical insights provided. While not groundbreaking, it consistently delivers valuable information with professional presentation. A reliable resource that meets high standards and provides meaningful learning opportunities.',
    image: 'assets/articles/article-technology3.jpg',
    rating: 4,
    badge: null,
    saved: false
  },

  // article 12
  {
    id: 12,
    link: 'https://csd.columbia.edu/research-projects/artificial-intelligence-future-work',
    title: 'AI & the Future of Work',
    author: 'Columbia University',
    description: "Outstanding article that delivers exceptional insights into AI&#39;s transformative impact on the modern workplace. Columbia University&#39;s comprehensive treatment of automation, job displacement, and emerging opportunities leaves readers thoroughly informed about this critical transition. Excellent organization and compelling analysis make complex technological concepts accessible while extracting significant value from current research. Key developments in machine learning, workforce adaptation, and policy implications are explored with rigorous academic explanation and thoughtful development. Exceeds expectations by offering substantial depth beyond surface-level discussions found elsewhere, providing evidence-based perspectives on how artificial intelligence will reshape employment landscapes and requiring strategic workforce preparation.",
    image: 'assets/articles/article-technology4.webp',
    rating: 5,
    badge: "HOT",
    saved: false
  }
];

/* ---------------- DYNAMIC PAGINATION ---------------- */
const ARTICLES_PER_PAGE = 3; // ***change this number during interview to show dynamic pagination***
let currentPage = 1; // track which page we're currently on

console.log('Pagination config loaded:', {
  articlesPerPage: ARTICLES_PER_PAGE,
  currentPage: currentPage
});

/* ---------------- PAGE NAVIGATION FUNCTION ---------------- */
function goToPage(page, articlesArray = allArticles) {
  const totalPages = getTotalPages(articlesArray);
  
  /* --- #1: Validate the page number --- */
  if (page < 1 || page > totalPages) {
    console.log('Invalid page:', page);
    return;
  }
  
  /* --- #2: Update current page --- */
  currentPage = page;
  console.log('Going to page:', currentPage);
  
  /* --- #3: Re-render articles for the new page  --- */
  renderArticles(articlesArray, currentPage);
  
  /* --- #4: Update pagination buttons (we'll create this next) --- */
  updatePaginationButtons(articlesArray);
  
  /* --- #5: Scroll to top of articles --- */
  const articlesContainer = document.getElementById('articles-container');
  if (articlesContainer) {
    // allow DOM content to completely render before scrolling by setting a 10ms delay
    setTimeout(() => {
      articlesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
  }
}

/* ---------------- UPDATE PAGINATION BUTTONS FUNCTION ---------------- */
function updatePaginationButtons(articlesArray = allArticles) {
  const totalPages = getTotalPages(articlesArray);
  const pagination = document.getElementById('pagination-container');
  
  if (!pagination) {
    console.log('Pagination container not found');
    return;
  }
  
  // clear existing pagination
  pagination.innerHTML = '';
  
  /* --- #1: Create Previous buttons (< and <<) --- */
  const prevDisabled = currentPage === 1 ? 'disabled' : '';
  const prevDoubleDisabled = currentPage === 1 ? 'disabled' : '';
  
  pagination.innerHTML += `
    <li class="page-item ${prevDoubleDisabled}">
      <button class="page-link" onclick="goToPage(1)" ${prevDoubleDisabled ? 'disabled' : ''}>
        <i class="bi bi-chevron-double-left"></i>
      </button>
    </li>
    <li class="page-item ${prevDisabled}">
      <button class="page-link" onclick="goToPage(${currentPage - 1})" ${prevDisabled ? 'disabled' : ''}>
        <i class="bi bi-chevron-left"></i>
      </button>
    </li>
  `;
  
  /* --- #2: Create Page number buttons ([1] [2] [3] etc) --- */
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'active' : '';
    pagination.innerHTML += `
      <li class="page-item ${activeClass}">
        <button class="page-link" onclick="goToPage(${i})">${i}</button>
      </li>
    `;
  }
  
  /* --- #3: Create Next buttons (> and >>) --- */
  const nextDisabled = currentPage === totalPages ? 'disabled' : '';
  const nextDoubleDisabled = currentPage === totalPages ? 'disabled' : '';
  
  pagination.innerHTML += `
    <li class="page-item ${nextDisabled}">
      <button class="page-link" onclick="goToPage(${currentPage + 1})" ${nextDisabled ? 'disabled' : ''}>
        <i class="bi bi-chevron-right"></i>
      </button>
    </li>
    <li class="page-item ${nextDoubleDisabled}">
      <button class="page-link" onclick="goToPage(${totalPages})" ${nextDoubleDisabled ? 'disabled' : ''}>
        <i class="bi bi-chevron-double-right"></i>
      </button>
    </li>
  `;
  
  console.log(`Pagination updated: Page ${currentPage} of ${totalPages}`);
}

/* ---------------- PAGINATION HELPER FUNCTIONS ---------------- */
// calculate total no. of pages required to display the correct no. of articles per page
function getTotalPages(articlesArray = allArticles) {
  return Math.ceil(articlesArray.length / ARTICLES_PER_PAGE);
}

// get only the articles that should show on a specific page
function getArticlesForPage(page, articlesArray = allArticles) {
  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  return articlesArray.slice(startIndex, endIndex);
}

/* ---------------- HELPER to SAVE FUNCTIONS (localStorage) ---------------- */
// SAVE DATA TO localStorage
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`Saved to localStorage: ${key}`, data);
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

// LOAD DATA FROM localStorage
function loadFromLocalStorage(key, defaultValue = null) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log(`Loaded from localStorage: ${key}`, parsed);
      return parsed;
    }
    return defaultValue;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return defaultValue;
  }
}

// REMOVE DATA FROM localStorage
function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    console.log(`Removed from localStorage: ${key}`);
  } catch (error) {
    console.error('Failed to remove from localStorage:', error);
  }
}

// INITIALISE localStorage
function initializeFromLocalStorage() {
  console.log('Initializing from localStorage...');
  
  // Load saved article IDs from localStorage
  const savedArticleIds = loadFromLocalStorage('savedArticleIds', []);
  
  // Update the saved status in allArticles array
  allArticles.forEach(article => {
    if (savedArticleIds.includes(article.id)) {
      article.saved = true;
    } else {
      article.saved = false;
    }
  });
  
  // Rebuild savedArticles array based on the loaded data
  savedArticles = allArticles.filter(article => article.saved);
  
  // Load current page from localStorage (optional)
  const storedPage = loadFromLocalStorage('currentPage', 1);
  currentPage = storedPage;
  
  // Load current filter from localStorage (optional)
  const storedFilter = loadFromLocalStorage('currentFilter', 'ALL');
  currentFilter = storedFilter;
  
  console.log('Initialization complete:', {
    savedArticles: savedArticles.length,
    currentPage: currentPage,
    currentFilter: currentFilter
  });
}

/* ---------------- SAVE FUNCTIONS + TOAST NOTIFICATIONS FOR REAL-TIME FEEDBACK ---------------- */
function saveArticle(articleId) {
  // if no ID passed, try to get it from the clicked button
  if (!articleId) {
    const clickedButton = event.target.closest('button[data-article-id]');
    if (!clickedButton) return;
    articleId = parseInt(clickedButton.getAttribute('data-article-id'));
  }
  
  // find the article that the user wants to save in arr allArticles
  const article = allArticles.find(article => article.id === articleId);
  if (!article) return;
  
  // toggle saved status
  article.saved = !article.saved;
  
  // update savedArticles array
  if (article.saved) {
    // append/push this article to arr savedArticles if it's not already there
    if (!savedArticles.find(saved => saved.id === articleId)) {
      savedArticles.push(article);
    }
    showToast(`"${article.title}" added to bookmarks!`, 'success');
  } else {
    // remove from saved articles
    savedArticles = savedArticles.filter(saved => saved.id !== articleId);
    showToast(`"${article.title}" removed from bookmarks!`, 'info');
  }

  // save to localStorage
  const savedArticleIds = savedArticles.map(article => article.id);
  saveToLocalStorage('savedArticleIds', savedArticleIds);

  // update savedArticles count
  updateSavedCount();
  
  // update "Add to Bookmarks" btn appearance
  updateSaveButton(articleId, article.saved);
  
  console.log('Saved Articles:', savedArticles);
}

// DYNAMIC TOAST NOTIFICATION FN
function showToast(message, type = 'info') {
  // create toast element if it doesn't exist yet
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'position-fixed top-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }
  
  const toastId = 'toast-' + Date.now();
  const toastHTML = `
    <div class="toast my-2 align-items-center text-white bg-${type === 'success' ? 'success' : 'info'} border-0" 
         id="${toastId}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
          ${message}
        </div>
        <button
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          data-bs-dismiss="toast" 
          aria-label="Close"
        >
        </button>
      </div>
    </div>
  `;
  
  toastContainer.innerHTML += toastHTML;
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
  
  // auto-hide after 4 seconds
  setTimeout(() => {
    toast.hide();
  }, 4000);
  
  // remove element if user clicks the X button
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}
// UPDATE "ADD TO BOOKMARKS" BTN FN
function updateSaveButton(articleId, isSaved) {
  const button = document.querySelector(`button[data-article-id="${articleId}"]`);
  if (!button) return;
  
  const icon = button.querySelector('i');
  
  if (isSaved) {
    button.classList.add('saved');
    button.classList.remove('btn-outline-info');
    button.classList.add('btn-success');
    icon.className = 'bi bi-bookmark-fill me-1';
    button.innerHTML = `<i class="bi bi-bookmark-fill me-1"></i>Bookmarked`;
  } 
  else {
    button.classList.remove('saved');
    button.classList.remove('btn-success');
    button.classList.add('btn-outline-info');
    icon.className = 'bi bi-bookmark me-1';
    button.innerHTML = `<i class="bi bi-bookmark me-1"></i>Add to Bookmarks`;
  }
}
// GET SAVED ARTICLES FN
function getSavedArticles() {
  return savedArticles;
}
// MANAGE BOOKMARKS FEATURE (REMOVE ARTICLES FROM SAVED) FN
function removeSavedArticle(articleId) {
  const article = allArticles.find(article => article.id === articleId);
  if (article) {
    article.saved = false;
    savedArticles = savedArticles.filter(saved => saved.id !== articleId);

    // remove this saved article from localStorage
    const savedArticleIds = savedArticles.map(article => article.id);
    saveToLocalStorage('savedArticleIds', savedArticleIds);

    updateSaveButton(articleId, false);
    updateSavedCount();
    showToast(`"${article.title}" removed from bookmarks!`, 'info');
  };
}

/* ---------------- DYNAMIC RENDERING OF ARTICLES ONTO PAGE ---------------- */
// POPULATE HTML WITH ARTICLE CARDS FN
function renderArticles(articlesToRender = allArticles, page = currentPage) {
  const container = document.getElementById('articles-container');
  
  // #1: get only the articles for this page
  const pageArticles = getArticlesForPage(page, articlesToRender);
  
  // #2: clear existing content
  container.innerHTML = '';
  
  // #3 EDGE CASE HANDLING: show error message for empty page/no articles shown
  if (pageArticles.length === 0) {
    container.innerHTML = `
      <div class="col-12 my-5 text-center border">
        <img src="assets/glass-magnifying-glass.png" class="my-3" alt="glassmorphism magnifying glass" width="100" style="opacity: 0.8">
        <p class="text-primary">No articles found for this page.</p>
      </div>
    `;
    return;
  }
  
  // #4: generate articles' HTML
  pageArticles.forEach(article => {
    const articleHTML = `
      <article class="col-xl-4 col-lg-5">
        <div class="card product-card h-100">
        
          <!-- PRODUCT IMAGE -->
          <a href="${article.link}" target="_blank">
            <img 
              src="${article.image}" 
              class="product-img w-100 object-fit-cover object-fit-xl-contain" 
              alt="${article.title} cover image"
            >
          </a>

          <!-- PRODUCT CARD CONTENT -->
          <div class="card-body d-flex flex-column">
            <hr style="border: 1.6px solid hsl(220, 13%, 25%); opacity:1" class="mt-0">

            <!-- ARTICLE TITLE & DESC -->
            <div class="d-flex align-items-center">
              <h5 class="mb-0 text-heading d-flex align-items-center" style="width: 100%">
                <span class="text-truncate">
                  ${article.title}
                </span>
                ${article.badge ? `<span class="ms-1 badge flex-shrink-0 badge-${article.badge.toLowerCase()}">${getBadgeHTML(article.badge)}</span>` : ''}
              </h5>
            </div>
            <p class="mb-3 text-secondary">${article.author}</p>
  
            <!-- STAR RATING -->
            <div class="d-flex">
              <h6 class="lead text-primary">My Review:</h6>
              <div class="ms-2 star-rating">
                ${generateStarRating(article.rating)}
              </div>
            </div>
            <p class="mb-4 text-secondary">${article.description}</p>

            <!-- BUTTONS WRAPPER -->
            <div class="mt-auto d-flex justify-content-between align-items-center gap-1">
              <a href="${article.link}" target="_blank" class="btn btn-3d w-50 px-2 py-2">
                VIEW ARTICLE
                <i class="bi bi-arrow-up-right"></i>
              </a>
              <button
                onclick="saveArticle(${article.id})" 
                class="btn ${article.saved ? 'btn-success saved' : 'btn-outline-info'} w-50 px-2 py-2" 
                data-article-id="${article.id}"
              >
                <i class="bi bi-bookmark${article.saved ? '-fill' : ''} me-1"></i>
                ${article.saved ? 'Bookmarked' : 'Add to Bookmarks'}
              </button>
            </div>

          </div>

        </div>
      </article>
    `;
    
    container.innerHTML += articleHTML;
    animateArticles();
  });
  
  console.log(`Rendered page ${page} with ${pageArticles.length} articles`);
}

// renderArticles() HELPER FNs
function generateStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="bi bi-star-fill me-1"></i>';
    } else {
      stars += '<i class="bi bi-star me-1"></i>';
    }
  }
  return stars;
}
function getBadgeHTML(badge) {
  if (!badge) return '';
  if (badge === 'HOT') {
    return '<i class="bi bi-fire me-1"></i>HOT';
  }
  return badge;
}

// fade-in animation for dynamically generated articles
function animateArticles() {
  const articles = document.querySelectorAll('#articles-container article');
  
  articles.forEach((article, index) => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    article.style.transitionDelay = `${index * 100}ms`; // 0.1s stagger
    
    // trigger animation
    setTimeout(() => {
      article.style.opacity = '1';
      article.style.transform = 'translateY(0)';
    }, 50);
  });
}

/* ---------------- FILTER FUNCTION ---------------- */
let currentFilter = 'ALL';

function filterArticles(filterType) {
  currentFilter = filterType;
  updateActiveFilter(filterType);
  
  let filteredArticles = [];
  
  switch(filterType) {
    case 'HOT':
      filteredArticles = allArticles.filter(article => article.badge === 'HOT');
      break;
    case 'NEW':
      filteredArticles = allArticles.filter(article => article.badge === 'NEW');
      break;
    case 'SAVED':
      filteredArticles = allArticles.filter(article => article.saved === true);
      break;
    case 'ALL':
    default:
      filteredArticles = allArticles;
      break;
  }
  
  currentPage = 1;
  renderArticles(filteredArticles, 1);
  updatePaginationButtons(filteredArticles);
}

// add the active class to filter pills
function updateActiveFilter(activeFilter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeButton = document.querySelector(`[data-filter="${activeFilter}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// update the number next to the "SAVED" filter pill
function updateSavedCount() {
  const savedCount = allArticles.filter(article => article.saved).length;
  const badge = document.getElementById('saved-count');
  if (badge) {
    badge.textContent = savedCount;
    badge.style.display = savedCount > 0 ? 'inline-block' : 'none';
  }
}