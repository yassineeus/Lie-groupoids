function loadPdfViewer(pdfUrl) {
  const viewerContainer = document.getElementById('pdf-viewer');
  viewerContainer.style.display = 'block';
  
  // Clear previous content
  viewerContainer.innerHTML = '';
  
  // Create iframe for PDF viewing
  const iframe = document.createElement('iframe');
  
  // For arXiv links, convert to PDF URL if needed
  if (pdfUrl.includes('arxiv.org/abs/')) {
    pdfUrl = pdfUrl.replace('arxiv.org/abs/', 'arxiv.org/pdf/') + '.pdf';
  }
  
  iframe.src = pdfUrl;
  iframe.width = '100%';
  iframe.height = '600px';
  iframe.frameBorder = '0';
  
  viewerContainer.appendChild(iframe);
  
  // Scroll to the viewer
  viewerContainer.scrollIntoView({ behavior: 'smooth' });
}
