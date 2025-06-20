import AuthLayout from "@/modules/auth/components/layout";
import SignInForm from "@/modules/auth/components/sign-in-form";

export default function LoginPage() {
	return (
		<AuthLayout>
			<SignInForm />
		</AuthLayout>
	);
}
