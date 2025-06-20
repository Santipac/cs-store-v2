"use client";

import { signInDto } from "@cs-store/isomorphic-lib";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function SignInForm() {
	const router = useRouter();
	const { isPending } = authClient.useSession();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signIn.email(
				{
					email: value.email,
					password: value.password,
				},
				{
					onSuccess: () => {
						// Let AuthProvider handle the redirect based on user role
						toast.success("Sign in successful");
					},
					onError: (error) => {
						toast.error(error.error.message);
					},
				},
			);
		},
		validators: {
			onSubmit: signInDto,
		},
	});

	if (isPending) {
		return <Loader />;
	}

	return (
		<section className="mx-auto mt-10 w-full space-y-4">
			<section className="flex w-full flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Login to your account</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Enter your email below to login to your account
				</p>
			</section>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					void form.handleSubmit();
				}}
				className="grid gap-4"
			>
				<section>
					<form.Field name="email">
						{(field) => (
							<section className="space-y-2">
								<Label htmlFor={field.name}>Email</Label>
								<Input
									id={field.name}
									name={field.name}
									type="email"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</section>
						)}
					</form.Field>
				</section>

				<section>
					<form.Field name="password">
						{(field) => (
							<section className="space-y-2">
								<section className="flex items-center">
									<Label htmlFor={field.name}>Password</Label>
									<Link
										href="/auth/forgot-password"
										className="ml-auto text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</Link>
								</section>
								<Input
									id={field.name}
									name={field.name}
									type="password"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</section>
						)}
					</form.Field>
				</section>

				<form.Subscribe>
					{(state) => (
						<Button
							type="submit"
							className="w-full"
							disabled={!state.canSubmit || state.isSubmitting}
						>
							{state.isSubmitting ? "Submitting..." : "Sign In"}
						</Button>
					)}
				</form.Subscribe>
			</form>
			<section className="mt-4 text-center">
				<section className="text-center text-sm">
					Don&apos;t have an account?{" "}
					<Link href="/auth/sign-up" className="underline underline-offset-4">
						Sign up
					</Link>
				</section>
			</section>
		</section>
	);
}
