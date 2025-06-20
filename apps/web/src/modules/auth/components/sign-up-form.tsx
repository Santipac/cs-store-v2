"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signUpDto } from "@cs-store/isomorphic-lib";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/loader";
import Link from "next/link";

export default function SignUpForm() {
	const router = useRouter();
	const { isPending } = authClient.useSession();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					email: value.email,
					password: value.password,
					name: value.name,
				},
				{
					onSuccess: () => {
						router.push("/");
						toast.success("Sign up successful");
					},
					onError: (error) => {
						toast.error(error.error.message);
					},
				},
			);
		},
		validators: {
			onSubmit: signUpDto,
		},
	});

	if (isPending) {
		return <Loader />;
	}

	return (
		<section className="mx-auto mt-10 w-full space-y-4">
			<section className="flex w-full flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Create an account</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Enter your email below to create an account
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
					<form.Field name="name">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Name</Label>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</section>
				<section>
					<form.Field name="email">
						{(field) => (
							<section className="space-y-3">
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
							<section className="space-y-3">
								<section className="flex items-center">
									<Label htmlFor={field.name}>Password</Label>
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
							{state.isSubmitting ? "Submitting..." : "Sign Up"}
						</Button>
					)}
				</form.Subscribe>
			</form>
			<section className="mt-4 text-center">
				<section className="text-center text-sm">
					Already have an account?{" "}
					<Link href="/auth/sign-in" className="underline underline-offset-4">
						Sign in
					</Link>
				</section>
			</section>
		</section>
	);
}
