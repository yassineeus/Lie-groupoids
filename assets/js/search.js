document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // Sample references data - you'll need to generate this from your markdown files
  const references = [
    { title: "Derived structures on moduli spaces of stable objects", authors: "T. Pantev, G. Vezzosi", year: 2025, url: "https://arxiv.org/abs/2504.05728", topic: "Moduli Spaces" },
    { title: "Representation theory of quantum Lie algebras at roots of unity", authors: "V. Toledano Laredo, E. Meinrenken", year: 2025, url: "https://arxiv.org/abs/2504.09812", topic: "Lie Groups and Algebras" },
    { title: "Equivariant quantum K-theory of moduli spaces of stable maps", authors: "A. Okounkov, R. Pandharipande", year: 2025, url: "https://arxiv.org/abs/2503.04112", topic: "Moduli Spaces" },
    // Add more references here
  ];
  
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }
    
    const filteredResults = references.filter(ref => 
      ref.title.toLowerCase().includes(query) || 
      ref.authors.toLowerCase().includes(query) ||
      ref.topic.toLowerCase().includes(query)
    );
    
    renderResults(filteredResults);
  });
  
  function renderResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }
    
    results.forEach(ref => {
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      resultItem.innerHTML = `
        <div><strong>${ref.title}</strong> (${ref.year})</div>
        <div>${ref.authors}</div>
        <div class="topic-tag">${ref.topic}</div>
      `;
      
      resultItem.addEventListener('click', function() {
        openReference(ref.url);
      });
      
      searchResults.appendChild(resultItem);
    });
    
    searchResults.style.display = 'block';
  }
  
  // Handle clicks on reference links
  document.querySelectorAll('.reference-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      openReference(url);
    });
  });
  
  function openReference(url) {
    // If it's a PDF, load in the viewer
    if (url.endsWith('.pdf')) {
      loadPdfViewer(url);
    } else {
      // For arXiv or other links, open in new tab
      window.open(url, '_blank');
    }
  }
});
