import SignInForm from "@/modules/auth/components/sign-in-form";
import AuthLayout from "@/modules/auth/components/layout";

export default function LoginPage() {
	return (
		<AuthLayout>
			<SignInForm />
		</AuthLayout>
	);
}
