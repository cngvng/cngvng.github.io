---
layout: default
title: "Contact & Office Hours"
---

<div class="page-header">
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p class="page-description">Get in touch or schedule a meeting.</p>
  </div>
</div>

<div class="container">
  <section class="section">
    <h2>Contact Information</h2>
    <ul class="contact-list">
      {% for contact in site.data.contacts %}
      <li>
        <strong>{{ contact.label }}:</strong>
        <a href="{{ contact.url }}" {% if contact.url contains 'http' %}target="_blank" rel="noopener noreferrer"{% endif %}>
          {{ contact.url | remove: 'https://' | remove: 'http://' | remove: 'mailto:' }}
        </a>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="section section-gray" style="margin-left: -1.5rem; margin-right: -1.5rem; padding-left: 1.5rem; padding-right: 1.5rem;">
    <div class="office-hours">
      <h2>Office Hours</h2>
      <p><strong>Monday – Friday:</strong> 14:00 – 16:00 (GMT+7)</p>
      <p>I'm available for academic discussions, research collaborations, and student consultations during these hours.</p>
      <p>For meetings outside these hours or for quick online discussions, please use the button below to schedule a Google Meet.</p>
    </div>

    <!-- Google Calendar Appointment Scheduling -->
    <div class="calendar-booking" style="margin-top: 2rem;">
      <h3 style="text-align: center; margin-bottom: 1rem;">Schedule a Meeting</h3>
      
      <!-- Replace the src URL below with your Google Calendar appointment scheduling link -->
      <!-- To get this link: -->
      <!-- 1. Go to Google Calendar settings > Appointment schedules -->
      <!-- 2. Create a new appointment schedule -->
      <!-- 3. Get the embed code and replace the src URL below -->
      <div style="text-align: center;">
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ28DEjWCAu7-eHLaRMeWHE9t8dfVp8IcYneAaGXu8X45Q65_AORvpjBZroWfMucUPVLc_cOxkJW?gv=true" 
          style="border: 0; width: 100%; max-width: 800px; height: 600px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" 
          frameborder="0">
        </iframe>
      </div>
      
      <!-- Fallback button if iframe doesn't work -->
      <div class="text-center" style="margin-top: 1rem;">
        <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
          Can't see the calendar? <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2FER7VWeR4Cc6Kh_y5XzNE5EbwP-WkNbhSJlM" target="_blank" rel="noopener noreferrer">Click here to book directly</a>
        </p>
        <a href="https://meet.google.com/new" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="font-size: 1rem; padding: 0.75rem 1.5rem;">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
          Or Create Instant Meeting
        </a>
      </div>
    </div>
  </section>

  <section class="section">
    <h2>Collaboration Opportunities</h2>
    <p>I am actively seeking:</p>
    <ul style="padding-left: 2rem; margin-bottom: 1.5rem;">
      <li><strong>PhD positions</strong> in AI, Machine Learning, and related fields</li>
      <li><strong>Research collaborations</strong> on projects involving computer vision, NLP, or explainable AI</li>
      <li><strong>Industry partnerships</strong> for applied AI research</li>
      <li><strong>Speaking opportunities</strong> at conferences, workshops, and seminars</li>
    </ul>
    <p>If you have opportunities or ideas for collaboration, please don't hesitate to reach out via email or schedule a meeting.</p>
  </section>
</div>
