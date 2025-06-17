# Tu Nguyen - Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript, featuring a config-driven architecture for easy customization.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-tunguyen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## ⚙️ Configuration

This portfolio is designed to be easily customizable through JSON configuration files located in the `src/config/` directory. You can modify any section of the website without touching the code.

### Available Configuration Files

| File | Description |
|------|-------------|
| `hero.json` | Header section with name, title, description, and buttons |
| `about.json` | About section with journey text and key highlights |
| `skills.json` | Technical skills organized by categories |
| `projects.json` | Featured projects with descriptions and links |
| `experiences.json` | Work experience and education |
| `qualifications.json` | Additional certifications and qualifications |
| `sections.json` | Section titles and labels |
| `navigation.json` | Navigation menu items |
| `contact.json` | Contact information and availability |

### How to Customize Sections

#### 1. Personal Information (Hero Section)
Edit `src/config/hero.json`:
```json
{
    "name": "Your Name",
    "title": "Your Title",
    "description": "Your description...",
    "avatar": "/your-avatar.png"
}
```

#### 2. About Section
Edit `src/config/about.json`:
- Update `journey` array with your personal story paragraphs
- Modify `highlights` to showcase your key strengths with colors and icons

#### 3. Skills
Edit `src/config/skills.json`:
- Add/remove skill categories
- Update skills within each category
- Choose from available colors: `blue`, `green`, `purple`, `orange`, `indigo`, `pink`

#### 4. Projects
Edit `src/config/projects.json`:
- Add your projects with title, description, technologies, and GitHub links
- Include impact metrics to highlight achievements

#### 5. Experience & Education
Edit `src/config/experiences.json`:
- Add work experience and education entries
- Include technologies, descriptions, and time periods

### Color Customization

The website uses a consistent color scheme. Available colors for highlights and skills:
- `blue` - Primary brand color
- `green` - Success/growth themes
- `purple` - Creative/innovation themes
- `orange` - Energy/management themes
- `indigo` - Technology themes
- `pink` - Design/creative themes

### Icon Options

Available icons for highlights and qualifications:
- `lightbulb` - Ideas/innovation
- `lightning` - Speed/efficiency
- `users` - Collaboration/people
- `chart` - Analytics/data
- `star` - Achievement/excellence
- `book` - Learning/education

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, About, Skills, etc.
│   │   └── ui/         # Reusable UI components
│   └── utils/          # Utility functions
├── config/             # JSON configuration files
└── public/             # Static assets
```

## 📝 Adding New Sections

To add a new section:
1. Create a new JSON config file in `src/config/`
2. Create a new component in `src/app/components/sections/`
3. Import and add the component to `src/app/page.tsx`

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

For other deployment options, run:
```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
