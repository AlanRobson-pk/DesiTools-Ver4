<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Desi Developers - AI Tool Directory</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body class="light-mode">
  <!-- Dark/Light Mode Toggle -->
  <header class="header">
    <h1>Desi Developers</h1>
    <nav class="nav-tabs">
      <a href="#featuredTools">Featured Tools</a>
      <a href="#categories">Categories</a>
      <a href="#resources">Resources</a>
    </nav>
    <button id="modeToggle">Toggle Mode</button>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h2>Discover the Best AI Tools for Desi Users – Free & Paid</h2>
    <div class="search-bar">
      <input type="text" placeholder="Search tools..." id="searchInput" />
      <select id="filterCategory">
        <option value="">All Categories</option>
        <option value="Text & Writing">Text & Writing</option>
        <option value="Image Generation">Image Generation</option>
        <option value="Video Generation">Video Generation</option>
        <option value="Audio Generation">Audio Generation</option>
        <option value="Code Generation">Code Generation</option>
      </select>
      <select id="filterPricing">
        <option value="">All</option>
        <option value="Free">Free</option>
        <option value="Premium">Premium</option>
        <option value="Paid">Paid</option>
      </select>
    </div>
  </section>

  <!-- Featured Tools Section -->
  <section class="featured-tools" id="featuredTools">
    <h3>Featured AI Tools</h3>
    <div class="tool-grid">
      <div class="tool-card">
        <img src="images/grammarly.png" alt="Grammarly Logo" onerror="this.src='images/placeholder.png'" />
        <h4>Grammarly</h4>
        <p>Advanced writing assistant for error-free content.</p>
        <span class="badge free">Free</span>
        <div class="tags">Text & Writing</div>
        <a href="https://www.grammarly.com" target="_blank">Visit Website</a>
      </div>
      <!-- Other tools ... -->
      <!-- Adding placeholder fallback for all images -->
      <div class="tool-card">
        <img src="images/looka.png" alt="Looka Logo" onerror="this.src='images/placeholder.png'" />
        <h4>Looka</h4>
        <p>AI-powered logo and brand identity maker.</p>
        <span class="badge paid">Paid</span>
        <div class="tags">Image Generation</div>
        <a href="https://www.looka.com" target="_blank">Visit Website</a>
      </div>
    </div>
  </section>

  <!-- Browse by Category Section -->
  <section class="categories" id="categories">
    <h3>Browse by Category</h3>
    <div class="category-grid">
      <div class="category-card">Text & Writing</div>
      <div class="category-card">Image Generation</div>
      <div class="category-card">Video Generation</div>
      <div class="category-card">Audio Generation</div>
      <div class="category-card">Code Generation</div>
      <div class="category-card">Social Media Marketing</div>
    </div>
  </section>

  <!-- Help Us Help You Section -->
  <section class="resources" id="resources">
    <h3>Help Us Help You</h3>
    <div class="resource-grid">
      <div class="resource-card">
        <h4>How to Make a Website Using AI</h4>
      </div>
      <div class="resource-card">
        <h4>How to Train an AI Agent</h4>
      </div>
      <div class="resource-card">
        <h4>Contact an AI Expert</h4>
      </div>
      <div class="resource-card">
        <h4>Share Your Issues</h4>
        <a href="mailto:support@desidevs.com">Email Us</a>
      </div>
    </div>
  </section>

  <!-- Footer CTA -->
  <footer class="footer">
    <button id="submitToolBtn">Submit a Tool</button>
    <div class="footer-links">
      <a href="#">Blog/Resources</a>
      <a href="#">About/FAQ</a>
      <a href="mailto:contact@desidevelopers.com">Contact Us</a>
    </div>
    <p>&copy; 2025 All rights reserved by <strong>HELMSTRAT</strong></p>
  </footer>

  <script src="scripts.js"></script>
</body>

</html>
