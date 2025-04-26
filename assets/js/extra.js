// Custom JavaScript for MkDocs template

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add table of contents highlighting
    highlightTableOfContents();
    
    // Enhance code blocks
    enhanceCodeBlocks();
    
    // Add anchor links to headings
    addAnchorLinks();
    
    // Make tables sortable
    makeSortableTables();
    
    // Add image lightbox
    addImageLightbox();
  });
  
  /**
   * Highlight the current section in the table of contents
   */
  function highlightTableOfContents() {
    // Get all section headings
    const headings = document.querySelectorAll('.md-content h1, .md-content h2, .md-content h3');
    
    // Get all TOC items
    const tocItems = document.querySelectorAll('.md-nav__link');
    
    // If we're on a page with headings and a TOC
    if (headings.length > 0 && tocItems.length > 0) {
      // Create an IntersectionObserver to detect when headings are in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the ID of the visible heading
            const id = entry.target.id;
            
            // Find the corresponding TOC item
            tocItems.forEach(item => {
              // Check if the href attribute ends with the heading ID
              if (item.getAttribute('href') && item.getAttribute('href').endsWith('#' + id)) {
                // Add active class to this TOC item
                item.classList.add('md-nav__link--active');
              } else {
                // Remove active class from other TOC items
                item.classList.remove('md-nav__link--active');
              }
            });
          }
        });
      }, { threshold: 0.1 });
      
      // Observe all headings
      headings.forEach(heading => observer.observe(heading));
    }
  }
  
  /**
   * Add enhancements to code blocks
   */
  function enhanceCodeBlocks() {
    // Get all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
      // Create a copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'md-clipboard md-icon';
      copyButton.title = 'Copy to clipboard';
      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/></svg>';
      
      // Add copy functionality
      copyButton.addEventListener('click', function() {
        const code = codeBlock.textContent;
        
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        
        // Select and copy the text
        textarea.select();
        document.execCommand('copy');
        
        // Clean up
        document.body.removeChild(textarea);
        
        // Show copied feedback
        const originalTitle = copyButton.title;
        copyButton.title = 'Copied!';
        setTimeout(() => {
          copyButton.title = originalTitle;
        }, 2000);
      });
      
      // Add the button to the code block's parent (the pre element)
      const preElement = codeBlock.parentElement;
      preElement.style.position = 'relative';
      preElement.appendChild(copyButton);
    });
  }
  
  /**
   * Add anchor links to headings
   */
  function addAnchorLinks() {
    // Get all headings
    const headings = document.querySelectorAll('.md-content h1, .md-content h2, .md-content h3, .md-content h4, .md-content h5, .md-content h6');
    
    headings.forEach(heading => {
      // Create anchor link
      const anchor = document.createElement('a');
      anchor.className = 'header-anchor';
      anchor.href = '#' + heading.id;
      anchor.innerHTML = '#';
      anchor.title = 'Permalink';
      
      // Add the anchor link to the heading
      heading.appendChild(anchor);
    });
  }
  
  /**
   * Make tables sortable
   */
  function makeSortableTables() {
    // Get all tables
    const tables = document.querySelectorAll('.md-typeset table:not([class])');
    
    tables.forEach(table => {
      // Get all headers
      const headers = table.querySelectorAll('th');
      
      // Add click event to headers
      headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        
        // Add sort indicator
        const sortIndicator = document.createElement('span');
        sortIndicator.className = 'sort-indicator';
        sortIndicator.innerHTML = ' ⇵';
        header.appendChild(sortIndicator);
        
        // Add click event
        header.addEventListener('click', function() {
          sortTable(table, index);
        });
      });
    });
  }
  
  /**
   * Sort a table by a specific column
   */
  function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headers = table.querySelectorAll('th');
    
    // Determine the current sort direction
    const header = headers[columnIndex];
    const isAscending = header.dataset.sortDirection !== 'asc';
    
    // Update sort direction for all headers
    headers.forEach(h => h.dataset.sortDirection = '');
    
    // Set the new sort direction
    header.dataset.sortDirection = isAscending ? 'asc' : 'desc';
    
    // Sort the rows
    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();
      
      // Check if the cell contains a number
      if (!isNaN(cellA) && !isNaN(cellB)) {
        return isAscending 
          ? parseFloat(cellA) - parseFloat(cellB)
          : parseFloat(cellB) - parseFloat(cellA);
      }
      
      // Sort alphabetically
      return isAscending 
        ? cellA.localeCompare(cellB)
        : cellB.localeCompare(cellA);
    });
    
    // Reorder the rows in the DOM
    rows.forEach(row => tbody.appendChild(row));
  }
  
  /**
   * Add lightbox functionality to images
   */
  function addImageLightbox() {
    // Get all images in the content
    const images = document.querySelectorAll('.md-content img:not(.emoji)');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.right = '0';
    lightbox.style.bottom = '0';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '9999';
    lightbox.style.display = 'none';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    
    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    lightboxImage.style.maxWidth = '90%';
    lightboxImage.style.maxHeight = '90%';
    lightboxImage.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);
    
    // Add click event to images
    images.forEach(image => {
      image.style.cursor = 'pointer';
      
      image.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightbox.style.display = 'flex';
      });
    });
    
    // Close lightbox when clicked
    lightbox.addEventListener('click', function() {
      this.style.display = 'none';
    });
  }