// index.js
const loadHomePage = async () => {
    const { HomePage } = await import('./Component/Homepage');
    return HomePage;
  };
  
  const loadAboutPage = async () => {
    const { AboutPage } = await import('./Component/AboutPage');
    return AboutPage;
  };

  const loadContactPage = async () => {
    const {ContactPage} = await import('./Component/Contactpage')
    return ContactPage;
  }

  const loadPage = async (pageName) => {
    switch (pageName) {
      case 'home':
        return loadHomePage();
      case 'about':
        return loadAboutPage();
      case 'contact':
        return loadContactPage();
      default:
        throw new Error('Invalid page name');
    }
  };
  
  const renderPage = async (pageName) => {
    try {
      const page = await loadPage(pageName);
      document.getElementById('app').textContent = page();
    } catch (error) {
      document.getElementById('app').textContent = 'Page not found';
    }
  };
  
  // Add event listeners to simulate navigation
  document.getElementById('home').addEventListener('click', () => renderPage('home'));
  document.getElementById('about').addEventListener('click', () => renderPage('about'));
  document.getElementById('contact').addEventListener('click', () => renderPage('contact'));

  