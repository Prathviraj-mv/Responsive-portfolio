# Prathvi Raj MV - Portfolio

A responsive personal portfolio for **Prathvi Raj MV**, focused on robotics, embedded firmware, machine learning, and AI.

## Live site

[prathvirajmv.netlify.app](https://prathvirajmv.netlify.app/)

## Highlights

- Premium editorial black-and-white visual style with CAD wireframe backgrounds
- Resume-based About, Education, Western Digital internship, achievements, patents, and publication sections
- Organised hackathon wins, patent applications, publication, and BIRAC E-YUVA Fellowship
- Twelve GitHub-based project cards with local image thumbnails
- Clickable project case-study popup with two project images, README-based project details, and a direct GitHub README link
- Mobile-friendly navigation, scrolling animations, counter statistics, and responsive layouts

## Project structure

```text
.
├── index.html          # Portfolio markup
├── css/
│   └── styles.css      # Layout, responsive styling, and project modal
├── js/
│   └── script.js       # Navigation, animations, projects, and modal behaviour
└── images/
    ├── *.png           # CAD wireframe backgrounds
    └── <project>/      # Project thumbnails and detail images
```

## Run locally

This is a static website. Clone or download the repository, then open `index.html` in a browser.

For local development with live reload, serve the project directory with any static server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Adding project images

Add images to the relevant folder inside `images/`, then update the `projectImages` map in `js/script.js` if required. The first image becomes the project-card thumbnail; both images appear in the project detail popup.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

## Contact

- [GitHub](https://github.com/Prathviraj-mv)
- [LinkedIn](https://www.linkedin.com/in/prathvi-raj-mv-a81477243/)
