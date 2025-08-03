/* ---------------- DEFINE ARTICLE ARRAYS ---------------- */
let savedArticles = [];
const allArticles = [
  // article 1
  {
    id: 1,
    title: 'The Key to Quantum Computing',
    author: 'Scientific American',
    description: 'Quantum computing can solve complex problems far beyond the reach of classical computers. By harnessing quantum mechanics, it enables breakthroughs in areas like drug discovery, cryptography, artificial intelligence, and materials science, potentially revolutionising industries and accelerating scientific progress.',
    image: 'assets/articles/article-quantum1.webp',
    rating: 4,
    badge: "NEW",
    saved: false,
  },

  // article 2
  {
    id: 2,
    title: 'Principles of Superconducting Quantum Computers',
    author: 'Huzefa Bala',
    description: 'A brief description of the most notable technological leaps in the recent centuries',
    image: 'assets/articles/article-quantum2.jpg',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 3
  {
    id: 3,
    title: 'Example Article 3',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-quantum3.jpg',
    rating: 2,
    badge: null,
    saved: false
  },

  // article 4
  {
    id: 4,
    title: 'Example Article 4',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-innovation1.jpg',
    rating: 3,
    badge: null,
    saved: false
  },

  // article 5
  {
    id: 5,
    title: 'Example Article 5',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-innovation2.png',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 6
  {
    id: 6,
    title: 'Example Article 6',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-innovation3.webp',
    rating: 4,
    badge: null,
    saved: false
  },

  // article 7
  {
    id: 7,
    title: 'Example Article 7',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-innovation4.avif',
    rating: 3,
    badge: null,
    saved: false
  },

  // article 8
  {
    id: 8,
    title: 'Example Article 8',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-innovation5.jpg',
    rating: 5,
    badge: "HOT",
    saved: false
  },

  // article 9
  {
    id: 9,
    title: 'Example Article 9',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-technology1.webp',
    rating: 3,
    badge: "NEW",
    saved: false
  },

  // article 10
  {
    id: 10,
    title: 'Example Article 10',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-technology2.jpg',
    rating: 5,
    badge: "NEW",
    saved: false
  },

  // article 11
  {
    id: 11,
    title: 'Example Article 11',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-technology3.jpg',
    rating: 4,
    badge: null,
    saved: false
  },

  // article 12
  {
    id: 12,
    title: 'Example Article 12',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-technology4.webp',
    rating: 2,
    badge: null,
    saved: false
  }
];

/* ---------------- DYNAMIC PAGINATION ---------------- */
const ARTICLES_PER_PAGE = Math.floor(Math.random() * 5) + 2; // show 2 - 6 articles per page
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
      <article class="col-md-5">
        <div class="card product-card h-100">
        
          <!-- PRODUCT IMAGE -->
          <a href="#" class=""> <img src="${article.image}" class="product-img" alt="${article.title} cover image"> </a>

          <div class="card-body d-flex flex-column">

          <!-- PRODUCT CARD CONTENT -->
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="mb-0 text-heading align-middle">
                ${article.title} 
                ${article.badge ? `<span class="badge align-middle badge-${article.badge.toLowerCase()}">${getBadgeHTML(article.badge)}</span>` : ''}
              </h5>
              <div class="star-rating">
                ${generateStarRating(article.rating)}
              </div>
            </div>
            <p class="mb-3 text-secondary">${article.author}</p>
            <p class="mb-4 text-secondary">${article.description}</p>

            <!-- BUTTONS WRAPPER -->
            <div class="mt-auto d-flex justify-content-between align-items-center gap-1">
              <button class="btn btn-3d w-50 px-2 py-2">
                VIEW ARTICLE
                <i class="bi bi-arrow-up-right"></i>
              </button>
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

// For search functionality
function searchArticles(searchTerm) {
  const filtered = allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  currentPage = 1; // reset to first page
  renderArticles(filtered, 1);
  updatePaginationButtons(filtered);
}