import { z } from "zod/v4";

// Role enum schema
export const roleSchema = z.enum(["customer", "admin"]);
export type UserRole = z.infer<typeof roleSchema>;

// User schema
export const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.email(),
	emailVerified: z.boolean(),
	image: z.url().nullable().optional(),
	role: roleSchema,
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

// Session schema
export const sessionSchema = z.object({
	id: z.string(),
	expiresAt: z.date(),
	token: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	ipAddress: z.string().nullable(),
	userAgent: z.string().nullable(),
	userId: z.string(),
});

export type Session = z.infer<typeof sessionSchema>;

// Account schema
export const accountSchema = z.object({
	id: z.string(),
	accountId: z.string(),
	providerId: z.string(),
	userId: z.string(),
	accessToken: z.string().nullable(),
	refreshToken: z.string().nullable(),
	idToken: z.string().nullable(),
	accessTokenExpiresAt: z.date().nullable(),
	refreshTokenExpiresAt: z.date().nullable(),
	scope: z.string().nullable(),
	password: z.string().nullable(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type Account = z.infer<typeof accountSchema>;

// Auth DTOs
export const signUpDto = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpDto = z.infer<typeof signUpDto>;

export const signInDto = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

export type SignInDto = z.infer<typeof signInDto>;

export const updateUserDto = z.object({
	name: z.string().min(2, "Name must be at least 2 characters").optional(),
	email: z.email("Invalid email address").optional(),
	role: roleSchema.optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserDto>;
