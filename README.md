# MERN Product Store - E-commerce Product Catalog

A production-ready full-stack e-commerce web application demonstrating modern frontend architecture, API integration, state management, responsive design, and cloud deployment practices.

## 🎯 Project Overview

This capstone project showcases professional web development practices including:
- Modern React.js frontend with Vite
- RESTful API backend with Node.js/Express
- MongoDB database
- Responsive UI/UX design with Tailwind CSS
- State management with Redux Toolkit
- Cloud deployment (Vercel & Render)
- Performance optimization & SEO

## 🌟 Features

### Core Features
- ✅ Dynamic product listing with API integration
- ✅ Advanced filtering (category, price, rating)
- ✅ Search functionality
- ✅ Shopping cart management
- ✅ Wishlist system
- ✅ Product details page
- ✅ Dark/Light mode toggle
- ✅ Responsive mobile-first design

### Advanced Features (Bonus)
- ✅ User authentication (JWT)
- ✅ Order management
- ✅ Product reviews & ratings
- ✅ Admin dashboard
- ✅ Payment gateway integration (Stripe)
- ✅ Pagination & infinite scroll
- ✅ PWA support
- ✅ Analytics dashboard

## 🏗️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **React Query** - Data fetching & caching

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Stripe** - Payment processing

### Deployment
- **Frontend**: Vercel
- **Backend**: Render

## 📂 Project Structure

```
mern-product-store/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── ProductCard/
│   │   │   ├── FilterSidebar/
│   │   │   ├── Cart/
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ProductListing.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── store/ (Redux)
│   │   ├── services/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB account (Atlas or local)

### Installation

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 📋 Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page |
| `/products` | ProductListing | Product catalog |
| `/products/:id` | ProductDetails | Individual product |
| `/cart` | Cart | Shopping cart |
| `/wishlist` | Wishlist | Saved items |
| `/about` | About | About page |
| `/contact` | Contact | Contact form |
| `*` | NotFound | 404 page |

## 📊 State Management

Using Redux Toolkit for:
- `cartSlice` - Cart state
- `wishlistSlice` - Wishlist state
- `productSlice` - Products data
- `authSlice` - User authentication
- `uiSlice` - UI preferences (theme, filters)

Data persisted to localStorage for session persistence.

## 🎨 Design System

- **Colors**: Modern color palette with dark/light modes
- **Typography**: Responsive font scaling
- **Spacing**: 8px base unit grid
- **Breakpoints**: Mobile (320px), Tablet (768px), Desktop (1024px)
- **Components**: Reusable, modular component architecture

## ⚡ Performance Optimization

- Code splitting with React.lazy() & Suspense
- Image lazy loading & optimization
- Minified production builds
- Efficient state updates & memoization
- API response caching with React Query
- Lighthouse score target: 90+

## 🔐 Security

- JWT-based authentication
- Protected API routes
- Input validation & sanitization
- CORS configuration
- Environment variables for sensitive data

## 📱 Responsive Design

- Mobile-first approach
- CSS Grid & Flexbox layouts
- Responsive breakpoints
- Touch-friendly UI
- Optimized for all device sizes

## 🌐 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (Render)
- Connect GitHub repository
- Set environment variables
- Deploy from main branch

## 📈 Performance Metrics

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## 🤝 API Documentation

API endpoints are documented in `backend/API_DOCS.md`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 📄 License

MIT License - Feel free to use this project for learning purposes.

## 🙏 Contributing

Contributions are welcome! Please follow:
1. Create feature branch
2. Commit with descriptive messages
3. Push to GitHub
4. Create Pull Request

## 👨‍💻 Author

**Sushant Cloud**
- GitHub: [@sushant-cloud](https://github.com/sushant-cloud)

## 🎓 Project Status

Currently in **Active Development** ✨

---

**Last Updated**: May 2026
