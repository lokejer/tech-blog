let savedArticles = [];

const allArticles = [
  // article 1
  {
    id: 1,
    title: 'Once Upon Science',
    author: 'Khambhati Moiz',
    description: 'A brief description of the origins of significant scientific discoveries like the atomic bomb',
    image: 'assets/articles/article-cover1.avif',
    rating: 4,
    badge: "NEW",
    saved: false
  },

  // article 2
  {
    id: 2,
    title: 'Recent Tech Breakthroughs',
    author: 'Huzefa Bala',
    description: 'A brief description of the most notable technological leaps in the recent centuries',
    image: 'assets/articles/article-cover2.jpg',
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
    image: 'assets/articles/article-cover2.jpg',
    rating: 5,
    badge: null,
    saved: false
  },

  // article 4
  {
    id: 4,
    title: 'Example Article 4',
    author: 'Example Author',
    description: 'A brief description of this article a brief description of this article',
    image: 'assets/articles/article-cover2.jpg',
    rating: 5,
    badge: null,
    saved: false
  }
]

// renderArticles() helper functions
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

// ARTICLES CAROUSEL
let currentIndex = 0;

// populate HTML with article cards
function renderArticles(articlesToRender = allArticles) {
  const container = document.getElementById('articles-container');
  
  // Clear existing content
  container.innerHTML = '';
  
  // Generate HTML for each article
  articlesToRender.forEach(article => {
    const articleHTML = `
      <div class="col-md-5">
        <div class="card product-card h-100">
        
          <img src="${article.image}" class="product-img" alt="${article.title} cover image">

          <div class="card-body d-flex flex-column">

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

            <div class="mt-auto d-flex justify-content-between align-items-center gap-1">
              <button class="btn btn-3d w-50 px-2 py-2" data-bs-toggle="modal" data-bs-target="#quickViewModal1">
                VIEW ARTICLE
                <i class="bi bi-arrow-up-right"></i>
              </button>
              <button class="btn btn-outline-info ${article.saved ? 'saved' : ''} w-50 px-2 py-2" data-article-id="${article.id}">
                <i class="bi bi-bookmark${article.saved ? '-fill' : ''} me-1"></i>Add to Bookmarks
              </button>
            </div>

          </div>

        </div>
      </div>
    `;
    
    container.innerHTML += articleHTML;
  });
}