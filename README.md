# ANSRAUCT

## Description

This project is a responsive web application built to showcase ANSRSource's past projects for clients. It features five dynamic sections: Home, Videos, Resources, Courses, and Testimonials. Each section demonstrates ANSRSource's expertise through interactive and visually appealing components. The website is designed for client engagement, featuring smooth animations, responsive design, and dynamic content.

---

## Features

### 1. **Home**

- Interactive self-swiping carousel using **Framer Motion**.
- Supports drag-and-swipe functionality for images.
- Each image includes text linking to different sections.
- Auto-swipes at regular intervals and resets to its original state.
- Fully responsive for all screen sizes.
- Data dynamically fetched from `carouselData.js`.

### 2. **Videos**

- Dynamic cards displaying:
  - Video poster
  - Title and description
  - A "Watch Now" button that opens a pop-up modal.
- Modal functionality:
  - Close via semi-transparent overlay click, cross icon, or scrolling to another section.
- Cards include hover states for an interactive user experience.
- Data dynamically fetched from `videosData.js`.

### 3. **Resources**

- Horizontal cards showcasing PDF resources.
- Displays:
  - PDF icon
  - Title
  - Short description
  - A button to download/view the PDF.
- Dynamic and fully responsive design.
- Data dynamically fetched from `resourcesData.js`.

### 4. **Courses**

- Layout with left-side course poster and right-side content.
- Displays:
  - Course title and description
  - Dynamic button linking to the course {opens in a new tab}.
- Data sourced from `coursesData.js`.
- Handles dynamic text without content overflow, maintaining responsiveness.

### 5. **Testimonials**

- Masonry grid layout for testimonials.
- Cards include:
  - Person's picture
  - Name, position, and organization
  - LinkedIn icon linking to their profile
  - Quoted feedback paragraph.
- Dynamically managed for seamless responsiveness.
- Data dynamically fetched from `testinonialsData.js`.

### 6. **Global Features**

- **Header/Navbar**:
  - Includes a hamburger menu for mobile.
  - Animated nav links for smooth transitions on large screens.
  - All section names are fetched from `sectionsData.js`
- **Footer**:
  - Displays ANSRSource's and the client's logo from same reusable component.
  - Includes dynamic social links and text.

---

## Folder Structure

```
ANSRAUCT/
├── dist/               # Build files
├── node_modules/       # Project dependencies
├── public/             # Static assets
├── src/
│   ├── assets/
│   │   ├── carousel/   # Carousel images
│   │   ├── courses/    # Course images
│   │   ├── logos/      # Logos for branding
│   │   ├── testimonials/ # Testimonial images
│   │   ├── videos/     # Video and their posters
│   ├── components/     # Reusable UI components
│   ├── data/           # Dynamic data for sections
│   │   ├── carouselData.js
│   │   ├── coursesData.js
│   │   ├── videosData.js
│   │   ├── sectionsData.js
│   │   ├── ResourcesData.js
│   │   ├── testimonialsData.js
│   ├── hooks/
│   ├── sections/       # Section components for Home, Videos, etc.
│   ├── utils/          # Constants
│   ├── App.jsx
│   ├── index.css       # Global styles
│   ├── main.jsx        # Application entry point
```

---

## Tech Stack

- **React.js**: Frontend framework for building UI components.
- **Vite.js**: Fast build tool and development server.
- **Motion{Framer Motion}**: Smooth animations for carousel and modals.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React-Icons**: Icon library for consistent visuals.
- Other supporting libraries.

---

## Installation & Usage

### Prerequisites

- Node.js and Git{if cloning from GitHub} installed on your system.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/thekiranmahajan/ansrauct.git
   cd ANSRAUCT
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser:
   ```bash
   http://localhost:5173
   ```
5. Assets:

   - Add new images or videos in `src/assets` following folder/file conventions.
   - also export them them from respective index.js file in order to import them in our data files.

6. Dynamic Data:

   - Update content in `src/data` for Videos, Courses, Resources, etc.
   - Import newly added assets and save

7. Changing color palate according to client:
   - Go to `tailwind.config.js` file and change the primary and secondary custom colors with new hex codes under colors object.

### Build for Production

To generate a production-ready build:

```bash
npm run build
```

### Deployment

Serve the `dist/` folder on a static hosting platform of your choice (e.g. demo server using FTP client like FileZilla Netlify, Vercel).

---

## Collaborators

- [Kiran Mahajan](https://github.com/thekiranmahajan) - Junior Develper Intern {e-Learning Production}

- [Sakshi Jaiswal](https://github.com/thesakshijaiswal) - Junior Develper Intern {e-Learning Production}

---

## Scope for Improvements

- Improve Hamburger menu design and animation for a smoother UI/UX.
- Improved masonry grid for Testimonial cards.
- Adding some elements to the white plain background.
- Improving SEO and accessibilty.
- Abstracting and optimising the code.

## Acknowledgments

Special thanks to **Rajath K S** for the opportunity and support to create this amazing project!
