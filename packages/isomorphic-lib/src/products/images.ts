import { z } from "zod/v4";

export const deleteProductImageSchema = z.object({
	fileKey: z.string(),
});

export const uploadProductImageSchema = z.object({
	file: z.file(),
});

export type DeleteProductImageSchema = z.infer<typeof deleteProductImageSchema>;
export type UploadProductImageSchema = z.infer<typeof uploadProductImageSchema>;
