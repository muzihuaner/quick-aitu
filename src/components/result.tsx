interface Props {
	prompt: string;
	imageSrc: string;
}

export default function Result({ prompt, imageSrc }: Props) {
	return (
		<main class="mx-4 my-2 md:mx-24 lg:mx-48 grid gap-4">
			<a href="/">
				<p class="underline">返回首页</p>
			</a>
			<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
			生成结果
			</h1>
			<p>生成可能有点慢，请耐心等待...</p>
			<p>提示词: {prompt}</p>
			<img src={imageSrc} alt={prompt} />
		</main>
	);
}
