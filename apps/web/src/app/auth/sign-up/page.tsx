import AuthLayout from "@/modules/auth/components/layout";
import SignUpForm from "@/modules/auth/components/sign-up-form";

export default function SignUpPage() {
	return (
		<AuthLayout>
			<SignUpForm />
		</AuthLayout>
	);
}
