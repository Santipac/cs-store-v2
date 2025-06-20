import Link from "next/link";
import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link href="/" className="flex items-center gap-2 font-medium">
						<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
							<span className="font-bold text-primary-foreground text-sm">
								CS
							</span>
						</div>
						<span className="font-bold text-xl">SkinStore</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">{children}</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<img
					src="https://kzml380tpqdjgwyp3tkm.lite.vusercontent.net/placeholder.svg"
					alt="Background"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
