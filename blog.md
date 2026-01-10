---
layout: default
title: "Blog"
permalink: /blog/
---

<div class="page-content">
  <div class="page-header-inline">
    <h1>Blogs</h1>
    <p class="page-description">Thoughts, insights, and updates on AI research and development.</p>
  </div>

  <div class="filter-section">
    <div class="filter-tags" id="blog-tag-filters">
      <button class="filter-tag active" data-tag="">All</button>
    </div>
  </div>

  <div class="blog-list" id="blog-list">
    {% for post in site.posts %}
    <article class="blog-card" data-tags="{{ post.tags | join: ',' }}">
      <a href="{{ post.url | relative_url }}" class="blog-card-link">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" class="blog-card-image">
        {% else %}
          <div class="blog-card-image blog-card-placeholder">
            <svg width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13z"/>
            </svg>
          </div>
        {% endif %}

        <div class="blog-card-content">
          <h2 class="blog-card-title">{{ post.title }}</h2>
          <p class="blog-card-date">{{ post.date | date: "%B %d, %Y" }}</p>
          {% if post.tags %}
          <div class="blog-card-tags">
            {% for tag in post.tags %}
            <span class="blog-tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
          <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const posts = document.querySelectorAll('.blog-card');
  const tagFilters = document.getElementById('blog-tag-filters');
  
  // Collect unique tags
  const tags = new Set();
  posts.forEach(post => {
    const postTags = post.dataset.tags ? post.dataset.tags.split(',') : [];
    postTags.forEach(tag => { if (tag.trim()) tags.add(tag.trim()); });
  });
  
  // Populate tag filters
  [...tags].sort().forEach(tag => {
    const button = document.createElement('button');
    button.className = 'filter-tag';
    button.dataset.tag = tag;
    button.textContent = tag;
    tagFilters.appendChild(button);
  });
  
  // Filter function
  function filterPosts() {
    const activeTag = document.querySelector('#blog-tag-filters .filter-tag.active')?.dataset.tag || '';
    
    posts.forEach(post => {
      const postTags = post.dataset.tags ? post.dataset.tags.split(',') : [];
      const matchesTag = !activeTag || postTags.includes(activeTag);
      post.style.display = matchesTag ? '' : 'none';
    });
  }
  
  tagFilters.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-tag')) {
      document.querySelectorAll('#blog-tag-filters .filter-tag').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      filterPosts();
    }
  });
});
</script>
