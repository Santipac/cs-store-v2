import {
	type ApiSuccessResponse,
	deleteProductImageSchema,
	uploadProductImageSchema,
} from "@cs-store/isomorphic-lib";
import { UTApi } from "uploadthing/server";
import { adminProcedure, router } from "~/lib/trpc";

const utapi = new UTApi({
	token: process.env.UPLOADTHING_TOKEN,
});

export const imagesProductRouter = router({
	deleteProductImage: adminProcedure
		.input(deleteProductImageSchema)
		.mutation(async ({ input }): Promise<ApiSuccessResponse> => {
			await utapi.deleteFiles(input.fileKey);
			return {
				success: true,
				data: null,
				message: "Image deleted successfully",
			};
		}),
	uploadProductImage: adminProcedure
		.input(uploadProductImageSchema)
		.mutation(async ({ input }): Promise<ApiSuccessResponse> => {
			const file = input.file;
			const result = await utapi.uploadFiles(file);
			return {
				success: true,
				data: {
					ufsUrl: result.data?.ufsUrl,
					key: result.data?.key,
				},
				message: "Image uploaded successfully",
			};
		}),
});
