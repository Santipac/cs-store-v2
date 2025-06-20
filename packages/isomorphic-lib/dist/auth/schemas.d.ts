import { z } from "zod/v4";
export declare const roleSchema: z.ZodEnum<{
	customer: "customer";
	admin: "admin";
}>;
export type UserRole = z.infer<typeof roleSchema>;
export declare const userSchema: z.ZodObject<
	{
		id: z.ZodString;
		name: z.ZodString;
		email: z.ZodEmail;
		emailVerified: z.ZodBoolean;
		image: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
		role: z.ZodEnum<{
			customer: "customer";
			admin: "admin";
		}>;
		createdAt: z.ZodDate;
		updatedAt: z.ZodDate;
	},
	z.core.$strip
>;
export type User = z.infer<typeof userSchema>;
export declare const sessionSchema: z.ZodObject<
	{
		id: z.ZodString;
		expiresAt: z.ZodDate;
		token: z.ZodString;
		createdAt: z.ZodDate;
		updatedAt: z.ZodDate;
		ipAddress: z.ZodNullable<z.ZodString>;
		userAgent: z.ZodNullable<z.ZodString>;
		userId: z.ZodString;
	},
	z.core.$strip
>;
export type Session = z.infer<typeof sessionSchema>;
export declare const accountSchema: z.ZodObject<
	{
		id: z.ZodString;
		accountId: z.ZodString;
		providerId: z.ZodString;
		userId: z.ZodString;
		accessToken: z.ZodNullable<z.ZodString>;
		refreshToken: z.ZodNullable<z.ZodString>;
		idToken: z.ZodNullable<z.ZodString>;
		accessTokenExpiresAt: z.ZodNullable<z.ZodDate>;
		refreshTokenExpiresAt: z.ZodNullable<z.ZodDate>;
		scope: z.ZodNullable<z.ZodString>;
		password: z.ZodNullable<z.ZodString>;
		createdAt: z.ZodDate;
		updatedAt: z.ZodDate;
	},
	z.core.$strip
>;
export type Account = z.infer<typeof accountSchema>;
export declare const signUpDto: z.ZodObject<
	{
		name: z.ZodString;
		email: z.ZodEmail;
		password: z.ZodString;
	},
	z.core.$strip
>;
export type SignUpDto = z.infer<typeof signUpDto>;
export declare const signInDto: z.ZodObject<
	{
		email: z.ZodEmail;
		password: z.ZodString;
	},
	z.core.$strip
>;
export type SignInDto = z.infer<typeof signInDto>;
export declare const updateUserDto: z.ZodObject<
	{
		name: z.ZodOptional<z.ZodString>;
		email: z.ZodOptional<z.ZodEmail>;
		role: z.ZodOptional<
			z.ZodEnum<{
				customer: "customer";
				admin: "admin";
			}>
		>;
	},
	z.core.$strip
>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;
//# sourceMappingURL=schemas.d.ts.map
