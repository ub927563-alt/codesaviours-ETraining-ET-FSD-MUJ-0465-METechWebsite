# ME Technologies Website — Project Plan

## 1. Project Overview

**Project Name:** ME Technologies Website  
**Project Type:** Company website with training information and admin management  
**Frontend:** React with Vite  
**Backend:** Node.js with Express  
**Database:** MongoDB  
**Styling:** Tailwind CSS  
**Development Environment:** Localhost

The purpose of this project is to develop a professional website for ME Technologies to present its engineering services, training programs, projects, and company information. Visitors will be able to submit contact inquiries and quote requests. An administrator will be able to manage website content through a protected admin area.

## 2. Sitemap

1. Home
2. About Us
3. Services
4. EV Charging
5. Training
6. Projects
7. Blog
8. Contact Us
9. Get a Quote
10. Admin Login
11. Admin Dashboard

## 3. Main Engineering Service Areas

- Electrical Engineering
- Solar PV
- Battery Energy Storage Systems (BESS)
- EV Charging
- Architecture and Building Design
- Civil and Structural Engineering

## 4. Homepage Wireframe

### Header
- ME Technologies logo
- Navigation menu
- Contact or Get a Quote button

### Hero Section
- Main company introduction
- Short description of services
- Get a Quote and Explore Services buttons

### Company Introduction
- Brief introduction to ME Technologies
- Company expertise and professional approach

### Services Section
- Cards for the six main engineering service areas

### Training Section
- Featured courses and training programs
- Link to explore available training

### Projects Section
- Selected projects and project descriptions

### Why Choose Us
- Engineering expertise
- Professional service
- Practical training opportunities

### Contact Section
- Contact form
- Contact information

### Footer
- Important page links
- Social media links
- Company information

## 5. Database Collections

The planned MongoDB collections are:

- **users:** Admin accounts and user information
- **services:** Engineering services
- **courses:** Training course information
- **batches:** Training schedules and batches
- **enrollments:** Student enrollment records
- **projects:** Company project information
- **posts:** Blog posts
- **leads:** Contact inquiries and quote requests

## 6. Planned API Endpoints

### General
- `GET /api/health` — Check whether the server is running

### Services
- `GET /api/services` — Retrieve services
- `GET /api/services/:id` — Retrieve a single service
- `POST /api/services` — Create a service
- `PUT /api/services/:id` — Update a service
- `DELETE /api/services/:id` — Delete a service

### Courses and Batches
- `GET /api/courses` — Retrieve courses
- `POST /api/courses` — Create a course
- `PUT /api/courses/:id` — Update a course
- `DELETE /api/courses/:id` — Delete a course
- `GET /api/batches` — Retrieve training batches
- `POST /api/batches` — Create a batch

### Authentication
- `POST /api/auth/login` — Admin login
- `GET /api/auth/me` — Retrieve the authenticated user's information

### Enrollments, Projects, and Blog
- `GET /api/enrollments` — Retrieve enrollments
- `POST /api/enrollments` — Create an enrollment
- `GET /api/projects` — Retrieve projects
- `POST /api/projects` — Create a project
- `GET /api/posts` — Retrieve blog posts
- `POST /api/posts` — Create a blog post

### Contact and Quotes
- `POST /api/leads` — Submit a contact or quote inquiry
- `GET /api/leads` — Retrieve inquiries for the administrator

Protected administrative endpoints will require authentication and suitable authorization.

## 7. Project Structure

```text
ME-Technologies-Website/
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── package.json
├── docs/
│   ├── plan.md
│   ├── company-content.txt
│   ├── brand-colors.txt
│   └── me-technologies-logo.jpg
├── .env.example
├── .gitignore
└── README.md
```

## 8. Security and Configuration

- Keep secrets in a local `.env` file.
- Commit `.env.example`, not the actual `.env` file.
- Ignore `node_modules` and generated build files.
- Protect administrative routes.
- Use password hashing and JWT-based authentication.
- Validate incoming form data on the server.

## 9. Development Plan

### Monday — Planning and Setup
- Review the project brief and company information.
- Collect the logo, brand colors, and company content.
- Prepare the sitemap, database plan, API plan, and homepage wireframe.
- Set up the project folders and Git repository.
- Configure the frontend and backend development environments.
- Configure Tailwind CSS, ESLint, `.gitignore`, and `.env.example`.

### Tuesday — Backend and Authentication
- Set up Express and MongoDB.
- Create database models.
- Implement administrator authentication.
- Develop service, course, and batch APIs.
- Test the endpoints.

### Wednesday — Main Website Pages
- Develop the shared layout and navigation.
- Build the Home, About, Services, EV Charging, and Training pages.

### Thursday — Additional Features
- Build Projects, Blog, Contact, and Get a Quote pages.
- Connect the forms and frontend to the backend.

### Friday — Admin and Assigned Module
- Develop the admin dashboard and content management features.
- Implement the additional module assigned by the instructor.

### Saturday — Testing and Delivery
- Test the frontend and backend.
- Fix errors and improve responsive layouts.
- Update documentation and prepare the final demonstration.

## 10. Current Status

- Initial React/Vite frontend created.
- Project documentation and brand assets added.
- `.gitignore` and `.env.example` created.
- Initial Git commit made and pushed to GitHub.
- Remaining setup and development tasks will be completed progressively.

**Note:** This document records the planned structure and features. Items listed as planned are not considered implemented until they have been developed and tested.
