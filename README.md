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
- **Framework:** React.js / Next.js
- **Styling:** Tailwind CSS / Styled Components
- **State Management:** Redux / Context API
- **UI Components:** Material-UI / Ant Design
- **Maps:** Google Maps API / Mapbox

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js / NestJS
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JWT / NextAuth.js
- **File Storage:** AWS S3 / Cloudinary
- **Payment:** Stripe API

### DevOps & Tools
- **Version Control:** Git
- **Deployment:** Vercel / Netlify / AWS
- **Database Hosting:** MongoDB Atlas / Supabase
- **API Testing:** Postman
- **Code Quality:** ESLint, Prettier

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB / PostgreSQL
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/aryan-Patel-web/Airbnb_Clone.git
cd Airbnb_Clone
```

### 2. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
# or
yarn install
```

#### Backend
```bash
cd backend
npm install
# or
yarn install
```

### 3. Environment Variables

Create `.env` files in both frontend and backend directories:

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

#### Backend (.env)
```env
PORT=8000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/airbnb_clone
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_s3_bucket_name
EMAIL_FROM=your_email
EMAIL_SERVER_HOST=your_smtp_host
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email_username
EMAIL_SERVER_PASSWORD=your_email_password
```

### 4. Database Setup

#### MongoDB
```bash
# Start MongoDB service
mongod

# Create database (optional - will be created automatically)
mongo
use airbnb_clone
```

#### PostgreSQL (if using)
```bash
# Create database
createdb airbnb_clone

# Run migrations
npm run migrate
```

### 5. Start the Application

#### Backend
```bash
cd backend
npm run dev
# Server will start on http://localhost:8000
```

#### Frontend
```bash
cd frontend
npm run dev
# Application will start on http://localhost:3000
```

## 📁 Project Structure

```
Airbnb_Clone/
├── frontend/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── listings/
│   │   └── booking/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── hooks/
│   └── store/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── config/
├── uploads/
├── docs/
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

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Backend (Railway/Heroku)
```bash
# For Railway
railway login
railway init
railway up

# For Heroku
heroku create your-app-name
git push heroku main
```

### Database
- **MongoDB Atlas:** Cloud MongoDB hosting
- **Supabase:** PostgreSQL with real-time features
- **PlanetScale:** MySQL with branching

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
