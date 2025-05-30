import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your Nav component
import Nav from './components/Nav';

// Import pages
import Home from './pages/Home';
import HtmlPage from './pages/HTML';
import HTMLTags from './pages/HTML/HTMLTags';
import CssPage from './pages/CSS';
import CSSSelectors from './pages/CSS/CSS-Selectors';
import JsPage from './pages/JavaScript';
import ReactPage from './pages/React';
import UiPage from './pages/UI';
import UxPage from './pages/UX';

function App() {
  return (
    <Router>
      {/* Your new Nav component */}
      <Nav />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/html/tags" element={<HTMLTags />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/css/selectors" element={<CSSSelectors />} />
        <Route path="/javascript" element={<JsPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/ux" element={<UxPage />} />
        <Route path="/ui" element={<UiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
