import { Child } from "hono/jsx";

interface Props {
	children: Child | undefined;
}

export default function Layout({ children }: Props) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<script src="https://cdn.tailwindcss.com" />
			</head>
			<title>快点AI绘图</title>
			<body>{children}</body>
		</html>
	);
}
