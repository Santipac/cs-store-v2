"use client";
import { createProductSchema } from "@cs-store/isomorphic-lib";
import { useForm } from "@tanstack/react-form";
import { Loader2Icon, UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function CreateProductPage() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm({
		defaultValues: {
			name: "",
			weaponName: "",
			skinName: "",
			weaponType: "",
			condition: "",
			rarity: "",
			price: 0,
			floatValue: 0,
			isStatTrak: false,
			isSouvenir: false,
			patternIndex: 0,
			patternName: "",
			imageUrl: "",
			inspectUrl: "",
			quantity: 1,
			status: "",
			tradeLockUntil: new Date(),
			collection: "",
			caseOrigin: "",
			nametag: "",
			stickers: "",
			description: "",
			tags: "",
			soldAt: new Date(),
		},
		validators: {
			onSubmit: createProductSchema,
		},
		onSubmit: async ({ value }) => {
			setIsSubmitting(true);
			console.log(value);
			setIsSubmitting(false);
		},
	});

	return (
		<section className="space-y-6 px-4 lg:px-6">
			<article>
				<h1 className="font-semibold text-2xl">Create New Product</h1>
				<p className="text-muted-foreground">
					Add a new product to your inventory
				</p>
			</article>
			<form
				className="space-y-6"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<Tabs defaultValue="account">
					<TabsList>
						<TabsTrigger value="required">Essential</TabsTrigger>
						<TabsTrigger value="optional">Optional</TabsTrigger>
					</TabsList>
					<TabsContent value="required">
						<Card>
							<CardHeader>
								<CardTitle>Essential Information</CardTitle>
								<CardDescription>
									Enter the essential details of the product
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<form.Field name="name">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>Product Name</Label>
											<Input
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="e.g., AK-47 | Redline"
											/>
											{field.state.meta.errors.length > 0 && (
												<p className="text-red-500 text-sm">
													{field.state.meta.errors[0]?.message}
												</p>
											)}
										</div>
									)}
								</form.Field>
								<div className="grid grid-cols-2 gap-4">
									<form.Field name="weaponName">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Weapon Name</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="e.g., AK-47"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="skinName">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Skin Name</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="e.g., Redline"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
								</div>
								<div className="grid grid-cols-4 gap-4">
									<form.Field name="weaponType">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Weapon Type</Label>
												<Select
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select type" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="rifle">Rifle</SelectItem>
														<SelectItem value="pistol">Pistol</SelectItem>
														<SelectItem value="sniper">Sniper</SelectItem>
														<SelectItem value="shotgun">Shotgun</SelectItem>
														<SelectItem value="submachine_gun">SMG</SelectItem>
														<SelectItem value="machine_gun">
															Machine Gun
														</SelectItem>
														<SelectItem value="knife">Knife</SelectItem>
														<SelectItem value="gloves">Gloves</SelectItem>
													</SelectContent>
												</Select>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="condition">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Condition</Label>
												<Select
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select condition" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="factory_new">
															Factory New
														</SelectItem>
														<SelectItem value="minimal_wear">
															Minimal Wear
														</SelectItem>
														<SelectItem value="field_tested">
															Field Tested
														</SelectItem>
														<SelectItem value="well_worn">Well Worn</SelectItem>
														<SelectItem value="battle_scarred">
															Battle Scarred
														</SelectItem>
													</SelectContent>
												</Select>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="rarity">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Rarity</Label>
												<Select
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select rarity" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="consumer_grade">
															Consumer Grade
														</SelectItem>
														<SelectItem value="industrial_grade">
															Industrial Grade
														</SelectItem>
														<SelectItem value="mil_spec">Mil-Spec</SelectItem>
														<SelectItem value="restricted">
															Restricted
														</SelectItem>
														<SelectItem value="classified">
															Classified
														</SelectItem>
														<SelectItem value="covert">Covert</SelectItem>
														<SelectItem value="contraband">
															Contraband
														</SelectItem>
													</SelectContent>
												</Select>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="status">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Status</Label>
												<Select
													value={field.state.value}
													onValueChange={(value) => field.handleChange(value)}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select status" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="available">Available</SelectItem>
														<SelectItem value="sold">Sold</SelectItem>
														<SelectItem value="reserved">Reserved</SelectItem>
														<SelectItem value="pending">Pending</SelectItem>
														<SelectItem value="trade_locked">
															Trade Locked
														</SelectItem>
													</SelectContent>
												</Select>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="price">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Price ($)</Label>
												<Input
													id={field.name}
													name={field.name}
													type="number"
													step="0.01"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(Number(e.target.value))
													}
													placeholder="0.00"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="floatValue">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Float Value</Label>
												<Input
													id={field.name}
													name={field.name}
													type="number"
													step="0.001"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(Number(e.target.value))
													}
													placeholder="0.000"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="quantity">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Quantity</Label>
												<Input
													id={field.name}
													name={field.name}
													type="number"
													min="1"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(Number(e.target.value))
													}
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="tradeLockUntil">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Trade Lock Until</Label>
												<Input
													id={field.name}
													name={field.name}
													type="datetime-local"
													value={field.state.value.toISOString().slice(0, 16)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(new Date(e.target.value))
													}
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
								</div>
								<div className="flex gap-6">
									<form.Field name="isStatTrak">
										{(field) => (
											<div className="flex items-center space-x-2">
												<Checkbox
													id={field.name}
													checked={field.state.value}
													onCheckedChange={(checked) =>
														field.handleChange(!!checked)
													}
												/>
												<Label htmlFor={field.name}>StatTrak™</Label>
											</div>
										)}
									</form.Field>

									<form.Field name="isSouvenir">
										{(field) => (
											<div className="flex items-center space-x-2">
												<Checkbox
													id={field.name}
													checked={field.state.value}
													onCheckedChange={(checked) =>
														field.handleChange(!!checked)
													}
												/>
												<Label htmlFor={field.name}>Souvenir</Label>
											</div>
										)}
									</form.Field>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="optional">
						<Card>
							<CardHeader>
								<CardTitle>Additional Information</CardTitle>
								<CardDescription>Optional details and metadata</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid grid-cols-4 gap-4">
									<form.Field name="collection">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Collection</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="e.g., Phoenix Collection"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="caseOrigin">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Case Origin</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="e.g., Phoenix Case"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="nametag">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Name Tag</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="Custom name tag"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="stickers">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Stickers</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="Applied stickers"
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="inspectUrl">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Inspect URL</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="https://example.com/inspect/..."
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>

									<form.Field name="tradeLockUntil">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Trade Lock Until</Label>
												<Input
													id={field.name}
													name={field.name}
													type="datetime-local"
													value={field.state.value.toISOString().slice(0, 16)}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(new Date(e.target.value))
													}
												/>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
									<form.Field name="tags">
										{(field) => (
											<div className="space-y-2">
												<Label htmlFor={field.name}>Tags</Label>
												<Input
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) => field.handleChange(e.target.value)}
													placeholder="tag1,tag2,tag3"
												/>
												<p className="text-muted-foreground text-sm">
													Separate tags with commas
												</p>
												{field.state.meta.errors.length > 0 && (
													<p className="text-red-500 text-sm">
														{field.state.meta.errors[0]?.message}
													</p>
												)}
											</div>
										)}
									</form.Field>
								</div>
								<form.Field name="description">
									{(field) => (
										<div className="space-y-2">
											<Label htmlFor={field.name}>Description</Label>
											<Textarea
												id={field.name}
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder="Product description..."
												rows={3}
											/>
											{field.state.meta.errors.length > 0 && (
												<p className="text-red-500 text-sm">
													{field.state.meta.errors[0]?.message}
												</p>
											)}
										</div>
									)}
								</form.Field>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				{/* Form Actions */}
				<div className="flex justify-end gap-4">
					<Button
						type="button"
						variant="outline"
						onClick={() => router.back()}
						disabled={isSubmitting}
					>
						Cancel
					</Button>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
								Creating Product...
							</>
						) : (
							<>
								<UploadIcon className="mr-2 h-4 w-4" />
								Create Product
							</>
						)}
					</Button>
				</div>
			</form>
		</section>
	);
}
