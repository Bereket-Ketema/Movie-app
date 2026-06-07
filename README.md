```markdown
# 🎬 Movie App

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, responsive movie discovery web application that allows users to search for movies, view popular releases, and discover trending films using The Movie Database (TMDB) API.

## ✨ Live Demo

🔴 **Live Application:** [movie-app-blue-kappa.vercel.app](https://movie-app-blue-kappa.vercel.app/)

## 📸 Screenshots

| Homepage | Search Results |
|----------|----------------|
| ![Homepage Screenshot](./public/home.png) | ![Search Screenshot](./public/search.png) |

*Add your screenshots in the `screenshots` folder*

## ✨ Features

| Feature | Status |
|---------|--------|
| 🔍 Search movies by title | ✅ Complete |
| 🎬 View popular movies | ✅ Complete |
| 📈 Trending movies section | ✅ Complete |
| ⏳ Loading state with spinner | ✅ Complete |
| ❌ Error handling with user messages | ✅ Complete |
| 📱 Fully responsive design | ✅ Complete |
| 🎯 Debounced search (reduces API calls) | ✅ Complete |
| 📊 Appwrite analytics integration | ✅ Complete |
| 🎞️ Movie details page | 🔜 Coming soon |

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Styling and responsive design |
| **TMDB API** | Movie data source |
| **Appwrite** | Backend for trending movies analytics |
| **Vercel** | Hosting and deployment |

## 📁 Project Structure

```
movie-app/
├── public/
│   └── hero.png
├── src/
│   ├── components/
│   │   ├── Search.jsx
│   │   ├── MovieCard.jsx
│   │   └── Spinner.jsx
│   ├── appwrite.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .npmrc
├── vercel.json
├── index.html
├── package.json
├── README.md
└── screenshots/
    ├── homepage.png
    └── search.png
```

*Add your actual project structure above*

## 🏃‍♂️ Run Locally

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- TMDB API key
- Appwrite project (optional)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bereket-Ketema/Movie-app.git
   cd Movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_TMDB` | ✅ Yes | TMDB API Bearer Token |
| `VITE_APPWRITE_ENDPOINT` | ❌ No | Appwrite endpoint (for trending) |
| `VITE_APPWRITE_PROJECT_ID` | ❌ No | Appwrite project ID |

## 📚 What I Learned

- **API Integration** - Fetching data from external APIs, handling responses, and managing API keys securely
- **React Hooks** - `useState`, `useEffect`, and creating custom hooks like `useDebounce`
- **Debouncing** - Limiting API calls to improve performance and respect rate limits
- **Component Architecture** - Breaking UI into reusable, maintainable components
- **Error Handling** - Graceful error handling with user-friendly messages
- **Environment Variables** - Securing sensitive data in `.env` files
- **Deployment** - Deploying to Vercel and configuring environment variables
- **Backend Integration** - Using Appwrite for data persistence

## 🐛 Challenges Faced & Solutions

| Challenge | Solution |
|-----------|----------|
| API key exposure | Used environment variables with `VITE_` prefix |
| Too many API calls on every keystroke | Implemented custom `useDebounce` hook (1 second delay) |
| `react-use` package incompatible with React 19 | Created custom debounce hook instead of external dependency |
| 401 Unauthorized error | Fixed API key variable naming |
| Build failing on Vercel | Added `.npmrc` with `legacy-peer-deps=true` |
| 404 on page refresh | Added `vercel.json` with rewrite rules |

## 📈 Future Improvements

- [ ] **Movie Details Page** - Click on any movie to see detailed information
- [ ] **Pagination** - Load more movies instead of infinite scroll
- [ ] **User Authentication** - Sign up/login with Appwrite
- [ ] **Watchlist** - Save favorite movies to watch later
- [ ] **Movie Trailers** - Embed YouTube trailers for each movie
- [ ] **Advanced Filters** - Filter by genre, year, rating
- [ ] **Dark/Light Mode** - Theme toggle
- [ ] **Performance Optimization** - Implement `React.memo` and lazy loading
- [ ] **Unit Tests** - Add testing with Vitest or Jest

## 🎯 Goal

The ultimate goal is to make this app **fully competitive with Netflix** - a complete movie streaming experience with user accounts, watchlists, recommendations, and more.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [Appwrite](https://appwrite.io/) for backend services
- [Vercel](https://vercel.com/) for hosting
- React community for excellent documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developed By

**Bereket Ketema**

- GitHub: [@Bereket-Ketema](https://github.com/Bereket-Ketema)

---

⭐ If you found this project helpful, please give it a star on GitHub!
```