# @cs-store/isomorphic-lib

Shared types, schemas, and utilities for the CS Store application.

## Overview

This package contains shared TypeScript types and Zod schemas that are used across both the frontend (Next.js) and backend (Hono) applications. It ensures type safety and consistency throughout the entire application.

## Installation

This package is automatically linked via workspace dependencies. It's already included in both the server and web applications.

## Usage

### Auth Types and Schemas

```typescript
import { 
  UserRole, 
  User, 
  signUpDto, 
  signInDto, 
  updateUserDto 
} from "@cs-store/isomorphic-lib/auth";

// Use in validation
const signUpData = signUpDto.parse(formData);

// Use as types
const user: User = {
  id: "123",
  name: "John Doe",
  email: "john@example.com",
  emailVerified: true,
  image: null,
  role: "customer",
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

### Product Types and Schemas

```typescript
import { 
  Product, 
  ProductCategory, 
  createProductDto, 
  updateProductDto,
  productQueryDto 
} from "@cs-store/isomorphic-lib/products";

// Use in validation
const productData = createProductDto.parse(formData);
const queryParams = productQueryDto.parse(req.query);
```

### Common API Types

```typescript
import { 
  ApiResponse, 
  ApiSuccessResponse, 
  ApiErrorResponse,
  PaginatedResponse 
} from "@cs-store/isomorphic-lib/common";

// Use for API responses
const response: ApiResponse<User> = {
  success: true,
  data: user,
  message: "User created successfully"
};

const paginatedUsers: PaginatedResponse<User> = {
  data: users,
  meta: {
    page: 1,
    limit: 10,
    total: 100,
    totalPages: 10,
    hasNext: true,
    hasPrev: false
  }
};
```

## Available Modules

### Auth Module (`@cs-store/isomorphic-lib/auth`)
- `UserRole` - User role enum type
- `User` - User entity type
- `Session` - Session entity type
- `Account` - Account entity type
- `signUpDto` - Sign up validation schema
- `signInDto` - Sign in validation schema
- `updateUserDto` - Update user validation schema

### Products Module (`@cs-store/isomorphic-lib/products`)
- `Product` - Product entity type
- `ProductCategory` - Product category enum type
- `ProductStatus` - Product status enum type
- `createProductDto` - Create product validation schema
- `updateProductDto` - Update product validation schema
- `productQueryDto` - Product query parameters schema

### Common Module (`@cs-store/isomorphic-lib/common`)
- `ApiResponse` - Generic API response type
- `ApiSuccessResponse` - Success response type
- `ApiErrorResponse` - Error response type
- `PaginatedResponse` - Paginated response type
- `PaginationMeta` - Pagination metadata type
- `BasePaginationQuery` - Base pagination query type

## Development

To build the package:

```bash
npm run build:shared
```

To watch for changes during development:

```bash
npm run dev:shared
```

## Best Practices

1. **Always use schemas for validation**: Use the provided Zod schemas to validate data on both frontend and backend
2. **Type safety**: Import types from this package instead of defining them locally
3. **Consistent DTOs**: Use the predefined DTOs for API communication
4. **Error handling**: Use the common API response types for consistent error handling 