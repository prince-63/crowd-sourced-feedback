### Crowd-Sourced Feedback API

A collaborative RESTful API where users can propose products, share feedback, and vote on ideas, with role-based moderation for managing the community.

### Features
- User authentication (JWT-based)
- Role-based access control (USER / ADMIN)
- Product management
- Commenting and pinning
- Voting system
- User blocking and moderation

### Tech Stack
- Express.js – API framework
- TypeScript – type safety
- Prisma ORM – database modeling
- MongoDB – data storage
- JWT – authentication
- Swagger – API documentation

### Installation
```bash
git clone https://github.com/yourusername/crowd-sourced-feedback.git
cd crowd-sourced-feedback
npm install
npm run start
````

### Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_jwt_secret
PORT=5000
```

## 📖 API Documentation

Once the server is running, API documentation is available at:

```
http://localhost:5000/api-docs
```

> Some features are still under development and may not be fully implemented.
