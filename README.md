# 🏠 Airbnb Clone

A full-stack web application that replicates the core functionality of Airbnb, allowing users to discover, book, and list properties for short-term rentals.

![Airbnb Clone Screenshot](https://via.placeholder.com/800x400/0EA5E9/FFFFFF?text=Airbnb+Clone+Screenshot)

## ✨ Features

### 🔐 Authentication & User Management
- User registration and login
- JWT-based authentication
- Social authentication (Google, GitHub)
- User profile management
- Email verification

### 🏡 Property Management
- Browse available properties
- Detailed property listings with photos
- Advanced search and filtering
- Property categories (Apartments, Houses, Villas, etc.)
- Interactive map integration
- Property availability calendar

### 📅 Booking System
- Real-time availability checking
- Secure booking process
- Payment integration (Stripe/PayPal)
- Booking confirmation and management
- Guest and host communication

### 🎨 User Experience
- Responsive design for all devices
- Modern UI with smooth animations
- Image galleries with carousel
- Reviews and ratings system
- Wishlist/favorites functionality

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js
- **Language:** JavaScript
- **Styling:** CSS / Styled Components
- **State Management:** React Context API / useState
- **HTTP Client:** Axios
- **Routing:** React Router DOM

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary
- **Payment:** Stripe API (if implemented)

### DevOps & Tools
- **Version Control:** Git & GitHub
- **Package Manager:** npm
- **Development:** Nodemon
- **API Testing:** Postman / Thunder Client
- **Image Management:** Cloudinary
- **Code Quality:** ESLint

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/aryan-Patel-web/Airbnb_Clone.git
cd Airbnb_Clone
```

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 3. Environment Variables

Create `.env` files:

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/airbnb_clone
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

### 4. Database Setup

#### MongoDB Local
```bash
# Start MongoDB service (Windows)
net start MongoDB

# Start MongoDB service (macOS/Linux)
sudo systemctl start mongod
# or
brew services start mongodb/brew/mongodb-community
```

#### MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

### 5. Cloudinary Setup
1. Create account at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret from dashboard
3. Update the environment variables in `.env` files

### 6. Start the Application

#### Start Backend Server
```bash
cd backend
npm run dev
# Server will start on http://localhost:5000
```

#### Start Frontend Application
```bash
cd frontend
npm start
# Application will start on http://localhost:3000
```

## 📁 Project Structure

```
Airbnb_Clone/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── auth/
│   │   │   ├── listings/
│   │   │   └── booking/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
├── uploads/ (if using local storage)
├── .gitignore
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create new property (host only)
- `PUT /api/properties/:id` - Update property (host only)
- `DELETE /api/properties/:id` - Delete property (host only)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Reviews
- `GET /api/reviews/:propertyId` - Get property reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
# Build the React app
cd frontend
npm run build

# For Netlify
# Upload the 'build' folder to Netlify

# For Vercel
npm i -g vercel
vercel --prod
```

### Backend (Railway/Render)
```bash
# For Railway
npm i -g @railway/cli
railway login
railway init
railway up

# For Render
# Connect your GitHub repo and deploy
```

### Database
- **MongoDB Atlas:** Free cloud MongoDB hosting
- **Railway MongoDB:** Integrated database solution

## 📱 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/600x300/0EA5E9/FFFFFF?text=Home+Page)

### Property Listing
![Property Listing](https://via.placeholder.com/600x300/0EA5E9/FFFFFF?text=Property+Listing)

### Booking Process
![Booking Process](https://via.placeholder.com/600x300/0EA5E9/FFFFFF?text=Booking+Process)

### User Dashboard
![User Dashboard](https://via.placeholder.com/600x300/0EA5E9/FFFFFF?text=User+Dashboard)

## 🧪 Testing

### Run Tests
```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# E2E tests
npm run test:e2e
```

### Test Coverage
```bash
npm run test:coverage
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Use meaningful commit messages

## 🐛 Known Issues

- [ ] Fix mobile responsiveness on property detail page
- [ ] Implement real-time chat functionality
- [ ] Add advanced search filters
- [ ] Optimize image loading performance

## 📋 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] AI-powered property recommendations
- [ ] Virtual property tours
- [ ] Blockchain-based payments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aryan Patel**
- GitHub: [@aryan-Patel-web](https://github.com/aryan-Patel-web)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from [Airbnb](https://airbnb.com)
- Icons from [Lucide React](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Maps integration with [Google Maps API](https://developers.google.com/maps)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/aryan-Patel-web/Airbnb_Clone?style=social)
![GitHub forks](https://img.shields.io/github/forks/aryan-Patel-web/Airbnb_Clone?style=social)
![GitHub issues](https://img.shields.io/github/issues/aryan-Patel-web/Airbnb_Clone)
![GitHub license](https://img.shields.io/github/license/aryan-Patel-web/Airbnb_Clone)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
