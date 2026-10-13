
# ME Technologies Website — Project Plan

## 1. Project Overview
The purpose of this project is to build a professional website for ME Technologies. The website will present the company's consulting services, training program, and contact information.

## 2. Sitemap
- Home
- About Us
- Services
- Training
- Contact Us

## 3. Home Page Wireframe
1. Header with company logo and navigation
2. Hero section with a heading and call-to-action button
3. Introduction to ME Technologies
4. Consulting services section
5. Training program section
6. Why choose us section
7. Contact information and inquiry form
8. Footer with contact details and social links

## 4. Consulting Services
- Strategy and Management Consulting
- Financial Consulting
- Marketing and Sales Consulting
- Human Resources Consulting
- Technology and IT Consulting
- Operations Consulting

## 5. Database Schema (Initial Plan)

### ContactInquiry
- id: unique identifier
- name: visitor name
- email: visitor email
- phone: visitor phone number
- subject: inquiry subject
- message: inquiry message
- createdAt: submission date and time

### TrainingProgram
- id: unique identifier
- title: program title
- description: program description
- duration: program duration
- createdAt: creation date and time

## 6. API Endpoint List (Initial Plan)
- GET /api/health — check whether the server is running
- GET /api/services — retrieve consulting services
- GET /api/training — retrieve training programs
- POST /api/contact — submit a contact inquiry

## 7. Technology Stack
- Frontend: React with Vite
- Styling: Tailwind CSS
- Backend: Node.js and Express
- Database: to be confirmed according to the project requirements

## 8. Design Notes
- Use the official ME Technologies logo.
- Use colors sampled from the company logo.
- Make the website responsive for mobile, tablet, and desktop.
- Keep the layout simple, professional, and easy to navigate.
- Use clear buttons and readable typography.

## 9. Pending Information
- Confirm official company introduction and training details.
- Confirm the database choice.
- Verify all contact and social media information.
