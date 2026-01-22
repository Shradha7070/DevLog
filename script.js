document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Change icon based on state
            if (navLinks.classList.contains('active')) {
                mobileBtn.textContent = '✕';
                mobileBtn.setAttribute('aria-label', 'Close menu');
            } else {
                mobileBtn.textContent = '☰';
                mobileBtn.setAttribute('aria-label', 'Open menu');
            }
        });
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Shrinking Header on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Inlined Data to avoid CORS issues with file:// protocol
    const BLOG_DATA = [
        {
            "id": "1",
            "title": "Getting Started with Web Development",
            "date": "October 15, 2023",
            "author": "Shradha",
            "excerpt": "A comprehensive guide on how to begin your journey into the world of web development, from HTML to modern frameworks.",
            "content": "<p>Web development is one of the most accessible and rewarding fields in computer science. Whether you want to build a personal blog, a startup landing page, or a complex web application, the fundamentals remain the same.</p><h2>The Big Three: HTML, CSS, and JavaScript</h2><p>Every web developer starts their journey with these three technologies:</p><ul><li><strong>HTML (HyperText Markup Language)</strong>: This is the skeleton of your website. It defines the structure and content, such as headings, paragraphs, and images.</li><li><strong>CSS (Cascading Style Sheets)</strong>: This is the skin and makeup. It controls how your website looks, from colors and fonts to layouts and responsiveness.</li><li><strong>JavaScript</strong>: This is the brain or muscle. It adds interactivity and logic, allowing your website to respond to user actions.</li></ul><h2>Setting Up Your Environment</h2><p>You don't need expensive software to get started. Here is the essential toolkit:</p><ol><li>A code editor (VS Code is highly recommended)</li><li>A modern web browser (Chrome, Firefox, or Edge)</li><li>Git for version control</li></ol><h2>Start Building Today</h2><p>The best way to learn is by doing. Start with simple projects like a personal portfolio or a tribute page. Don't worry about making it perfect; focus on understanding how the pieces fit together.</p><p>Happy coding!</p>"
        },
        {
            "id": "2",
            "title": "Understanding CSS Grid vs Flexbox",
            "date": "October 12, 2023",
            "author": "Shradha",
            "excerpt": "When to use Grid and when to use Flexbox? Let's dive deep into the layout systems of modern CSS.",
            "content": "<p>CSS Layouts have come a long way. Gone are the days of using floats and clearfixes. Today, we have two powerful tools at our disposal: Flexbox and CSS Grid.</p><h2>Flexbox: One-Dimensional Layout</h2><p>Flexbox is designed for laying out items in a single dimension - either in a row or a column. It is perfect for aligning items within a container, distributing space, and handling components like navigation bars or card layouts.</p><h2>CSS Grid: Two-Dimensional Layout</h2><p>CSS Grid is a two-dimensional layout system. It handles both columns and rows simultaneously. It is ideal for defining the overall layout of a page, such as header, sidebar, main content, and footer.</p><h2>When to use which?</h2><p>Rule of thumb: Content-first design? Use Flexbox. Layout-first design? Use Grid.</p>"
        },
        {
            "id": "3",
            "title": "The Power of Modern JavaScript",
            "date": "October 08, 2023",
            "author": "Shradha",
            "excerpt": "Exploring ES6+ features that have revolutionized how we write JavaScript today.",
            "content": "<p>JavaScript has evolved significantly since ES6 (ECMAScript 2015). Modern JavaScript makes code more readable, concise, and powerful.</p><h2>Key Features</h2><ul><li><strong>Arrow Functions:</strong> Shorter syntax for writing function expressions.</li><li><strong>Destructuring:</strong> Easily extract values from arrays or properties from objects.</li><li><strong>Template Literals:</strong> Embed variables directly in strings.</li><li><strong>Promises & Async/Await:</strong> Better handling of asynchronous operations.</li><li><strong>Modules:</strong> Organize code into separate files.</li></ul><p>Adopting these features will make you a more efficient developer.</p>"
        },
        {
            "id": "4",
            "title": "Designing for Accessibility",
            "date": "October 05, 2023",
            "author": "Shradha",
            "excerpt": "Why web accessibility matters and practical tips to make your sites inclusive for everyone.",
            "content": "<p>Web accessibility (a11y) ensures that websites are usable by people with disabilities. It is not just a nice-to-have; it is a necessity.</p><h2>Simple Tips for Better Accessibility</h2><ul><li>Use semantic HTML tags (header, main, footer, article).</li><li>Provide alt text for images.</li><li>Ensure sufficient color contrast between text and background.</li><li>Make sure your site is keyboard navigable.</li><li>Use aria-labels where necessary.</li></ul><p>Building accessible webs benefits everyone, including users with slow internet or older devices.</p>"
        },
        {
            "id": "5",
            "title": "Optimizing Web Performance",
            "date": "September 28, 2023",
            "author": "Shradha",
            "excerpt": "Tips and tricks to make your web applications load faster and perform better.",
            "content": "<p>Performance is a key part of user experience. A slow website drives users away.</p><h2>Optimization Strategies</h2><ul><li><strong>Minify CSS and JS:</strong> Reduce file sizes.</li><li><strong>Optimize Images:</strong> Use modern formats like WebP and lazy loading.</li><li><strong>Use Caching:</strong> Leverage browser caching to reduce server requests.</li><li><strong>Reduce HTTP Requests:</strong> Combine files where possible.</li></ul><p>Tools like Google Lighthouse can help you identify performance bottlenecks.</p>"
        },
        {
            "id": "6",
            "title": "Introduction to Git and GitHub",
            "date": "September 22, 2023",
            "author": "Shradha",
            "excerpt": "Version control essentials for every developer. Learn how to manage your code effectively.",
            "content": "<p>Git is a version control system that tracks changes in your code. GitHub is a platform to host your Git repositories.</p><h2>Basic Git Commands</h2><ul><li><code>git init</code>: Initialize a new repository.</li><li><code>git add .</code>: Stage changes.</li><li><code>git commit -m 'message'</code>: Save changes.</li><li><code>git push</code>: Upload changes to a remote repository.</li></ul><p>Mastering these commands is essential for collaboration and code management.</p>"
        }
    ];

    // Render Data
    const blogGrid = document.getElementById('blog-grid');
    const articleContainer = document.getElementById('article-container');

    // Render Blog Grid (Index Page)
    if (blogGrid) {
        blogGrid.innerHTML = BLOG_DATA.map(post => `
            <article class="post-card">
                <div class="post-content">
                    <span class="post-date">${post.date}</span>
                    <h2 class="post-title"><a href="post.html?id=${post.id}">${post.title}</a></h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="post.html?id=${post.id}" class="read-more">Read Article →</a>
                </div>
            </article>
        `).join('');
    }

    // Render Single Post (Article Page)
    if (articleContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const post = BLOG_DATA.find(p => p.id === postId);

        if (post) {
            document.title = `${post.title} — DevLog`;
            articleContainer.innerHTML = `
                <header class="article-header" style="transition: opacity 0.1s ease, transform 0.1s ease; transform-origin: top center;">
                    <span class="post-date">${post.date}</span>
                    <h1 class="article-title">${post.title}</h1>
                    <div class="article-meta">
                        <span>By ${post.author}</span>
                    </div>
                </header>

                <div class="content-body">
                    ${post.content}
                </div>

                <a href="index.html" class="back-link">← Back to Home</a>
            `;

            // Article Header Scroll Effect
            const articleHeader = articleContainer.querySelector('.article-header');
            if (articleHeader) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    if (scrolled < 600) { // Limit effect to top of page
                        const opacity = Math.max(0, 1 - (scrolled / 500));
                        const scale = Math.max(0.9, 1 - (scrolled / 1500));
                        const translateY = scrolled * 0.3; // Parallax effect

                        articleHeader.style.opacity = opacity;
                        articleHeader.style.transform = `translateY(${translateY}px) scale(${scale})`;
                    }
                });
            }
        } else {
            articleContainer.innerHTML = `
                <div style="text-align: center; padding: 4rem 0;">
                    <h2>Article not found</h2>
                    <p>The article you are looking for does not exist.</p>
                    <a href="index.html" class="back-link">← Back to Home</a>
                </div>
            `;
        }
    }
});
