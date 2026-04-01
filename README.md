# Codezilla AI Web Dev Workshop & Website Building Competition

Welcome to the official repository for the Codezilla tech club's upcoming event!

## Tech Stack
- **HTML5**: semantic structure
- **Tailwind CSS (via CDN)**: modern utility-first CSS styling
- **Vanilla JavaScript**: for mobile navbar toggling
- **No Build Tools**: easy to clone and start coding immediately in the browser

## Project Structure
- `index.html`: The main page containing the navbar and skeleton layouts for the `#hero`, `#about`, `#timeline`, `#faq` and `footer`.
- `style.css`: Used for basic custom rules (like smooth scrolling).
- `script.js`: Handles interactivity, specifically the mobile hamburger menu.

---

## How to Contribute (Beginner's Guide)

We use a standard Open Source contribution flow (Fork & Pull model). Follow these steps to submit your code:

### 1. Fork the Repository
Click the **"Fork"** button at the top right of this repository page to create a copy of the repository in your personal GitHub account.

### 2. Clone Locally
Open your terminal (or Command Prompt / Git Bash) and run:
```bash
git clone https://github.com/YOUR-USERNAME/codezilla-website.git
cd codezilla-website
```

### 3. Create a New Branch
Instead of working on `main`, always create a new branch for your feature:
```bash
git checkout -b feature-my-name
```

### 4. Make Changes
Open `index.html` in your favorite editor (like VS Code). Look for the `<!-- STUDENT TASK -->` comments inside each `<section>`. Write the HTML and Tailwind classes below the comments to complete the sections.

*Tip: You can view your changes by simply opening `index.html` in your web browser!*

### 5. Commit Your Changes
Once you are ready to submit your work, stage and commit the files:
```bash
git add .
git commit -m "feat: added my UI implementations for the sections"
```

### 6. Push to Your Fork
Push your local branch to your GitHub fork:
```bash
git push origin feature-my-name
```

### 7. Open a Pull Request
Go to the original repository on GitHub, and you'll see a prompt to **"Compare & pull request"**. Click it, write a brief description of what you did, and submit it for review!
