'use client';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Github, Twitter } from 'lucide-react';

// 型定義
interface TimelineItem {
	date: string;
	title: string;
	description: string;
}

interface Skill {
	name: string;
	level: number;
	description: string;
	years: number;
}

interface Work {
	title: string;
	description: string;
	image: string;
	tags: string[];
	url: string;
}

interface News {
	date: string;
	title: string;
	image: string;
	url: string;
}

// データ定義
const timelineData: TimelineItem[] = [
	{
		date: '2020.4 -',
		title: '芝浦工業大学 入学',
		description: '',
	},
	{
		date: '2023.5 - 2024.2',
		title: '株式会社リクルート',
		description: 'フロントエンド開発 (10か月)',
	},
	{
		date: '2023.11 - 2024.1',
		title: '株式会社MichibikuGroup',
		description: 'フロントエンド開発 (2か月)',
	},
	{
		date: '2024.3 - 2025.3',
		title: 'TechNova創設 代表',
		description: 'プログラミングサークルの設立',
	},
	{
		date: '2024.4 - 2024.7',
		title: '株式会社ハウテレビジョン',
		description: 'フロントエンド開発 (3か月)',
	},
	{
		date: '2024.9',
		title: '株式会社LayerX',
		description: 'フルスタック開発 (2週間)',
	},
	{
		date: '2024.12',
		title: '株式会社メドレー',
		description: 'フルスタック開発 (2週間)',
	},
	{
		date: '2025.1',
		title: '株式会社NOT A HOTEL',
		description: '新規機能開発 (2週間)',
	},
	{
		date: '2025.2',
		title: 'しばよこの設立（TechNovaからの統合）代表',
		description: 'エンジニアデザイナーサークルの設立',
	},
	{
		date: '2025.3 - 2025.4',
		title: '株式会社Nulogic',
		description: '新規機能開発 (2ヶ月)',
	},
];

const skillsData: Skill[] = [
	{
		name: 'TypeScript',
		level: 90,
		description: '主要な開発言語として使用',
		years: 3,
	},
	{
		name: 'React',
		level: 85,
		description: 'フロントエンド開発のメインフレームワーク',
		years: 3,
	},
	{
		name: 'Next.js',
		level: 80,
		description: 'Webアプリケーション開発に使用',
		years: 2,
	},
	{
		name: 'Node.js',
		level: 75,
		description: 'バックエンド開発に使用',
		years: 2,
	},
	{
		name: 'TailwindCSS',
		level: 85,
		description: 'スタイリングに使用',
		years: 2,
	},
	{
		name: 'Golang',
		level: 70,
		description: 'バックエンド開発に使用',
		years: 1,
	},
];

const worksData: Work[] = [
	{
		title: 'Artofolio',
		description:
			'Artofolio is a portfolio service for engineers that beautifully showcases your projects, technical skills, and social media links—just like an art museum.',
		image: '/artofolio.png',
		tags: ['Next.js', 'React', 'TypeScript', 'Three.js'],
		url: 'https://artofolio.vercel.app',
	},
	{
		title: 'Protfolio',
		description: 'This is a portfolio website that I made for myself',
		image: '/portfolio.png',
		tags: ['Next.js', 'React', 'TypeScript', 'Framer Motion'],
		url: 'https://soma-takata.vercel.app',
	},
	{
		title: 'サブスク自動解約',
		description: 'This is a service that automatically cancels subscriptions',
		image: '/subscription.png',
		tags: ['Next.js', 'React', 'TypeScript', 'Browser use', 'PlayWrite'],
		url: 'https://x.com/ysk_en/status/1902151281042714654',
	},
];

const newsData: News[] = [
	{
		date: '2024.7.26',
		title: 'ハウテレビジョンでの3ヶ月のエンジニアインターン体験記投稿しました！',
		image: '/news1.png',
		url: 'https://howtv.hatenablog.com/entry/2024/07/26/174358',
	},
	{
		date: '2024.9.17',
		title: 'LayerXサマーインターン体験記を投稿しました！',
		image: '/news2.png',
		url: 'https://zenn.dev/soma_takata/articles/3a5ad127b57e04',
	},
];

export const HomePage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [chaosState, setChaosState] = useState(0);
	const [quantumState, setQuantumState] = useState(0);
	const [dimensionalShift, setDimensionalShift] = useState(false);
	const [timelineCollapse, setTimelineCollapse] = useState(false);
	const [heroHovered, setHeroHovered] = useState(false);
	const [colorMode, setColorMode] = useState<'purple' | 'cyan' | 'yellow'>('purple');
	const [glitchActive, setGlitchActive] = useState(false);
	const [expandedWork, setExpandedWork] = useState<number | null>(null);
	const [workRotation, setWorkRotation] = useState({ x: 0, y: 0 });
	const [profileMode, setProfileMode] = useState<'normal' | 'binary' | 'quantum'>('normal');
	const [newsExpanded, setNewsExpanded] = useState<number | null>(null);
	const [newsScrambled, setNewsScrambled] = useState(false);
	const [footerMode, setFooterMode] = useState<'contact' | 'terminal'>('contact');
	const [terminalText, setTerminalText] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [messageInput, setMessageInput] = useState('');

	// Replace skills array with a single selectedSkill state
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

	// Function to toggle skill selection
	const toggleSkillSelection = (skillName: string) => {
		setSelectedSkill((current) => (current === skillName ? null : skillName));
	};

	// 量子重ね合わせ状態のスクロール効果
	const quantumScroll = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[
			'perspective(1000px) rotateX(0deg) scale(1)',
			'perspective(2000px) rotateX(180deg) scale(1.5) translateZ(500px)',
			'perspective(1000px) rotateX(360deg) scale(1)',
		],
	);

	// 時空間歪曲効果 - useSpringの結果をquantumScrollに適用
	useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useEffect(() => {
		const handleGlobalMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			// 量子状態の更新
			if (Math.random() > 0.95) {
				setQuantumState(Math.random());
				setDimensionalShift((prev) => !prev);
			}
		};

		const chaosInterval = setInterval(() => {
			setChaosState(Math.random());
			// 時空間の崩壊をランダムにトリガー
			if (Math.random() > 0.9) {
				setTimelineCollapse(true);
				setTimeout(() => setTimelineCollapse(false), 1000);
			}
		}, 100);

		// 量子もつれ効果の生成
		const quantumEntanglement = setInterval(() => {
			const entangledState = Math.random();
			setQuantumState(entangledState);
			// 次元間干渉
			if (entangledState > 0.8) {
				setDimensionalShift(true);
				setTimeout(() => setDimensionalShift(false), 500);
			}
		}, 2000);

		// ランダムなグリッチ効果
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.95) {
				setGlitchActive(true);
				setTimeout(() => setGlitchActive(false), 200);
			}
		}, 3000);

		window.addEventListener('mousemove', handleGlobalMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleGlobalMouseMove);
			clearInterval(chaosInterval);
			clearInterval(quantumEntanglement);
			clearInterval(glitchInterval);
		};
	}, []);

	return (
		<div
			className="relative min-h-screen overflow-hidden bg-black"
			ref={containerRef}
			style={{
				perspective: '2000px',
				transformStyle: 'preserve-3d',
			}}
		>
			{/* 量子干渉パターン */}
			<motion.div
				className="fixed inset-0 z-[1]"
				animate={{
					background: Array(20)
						.fill(0)
						.map(() => {
							const x = Math.random() * 100;
							const y = Math.random() * 100;
							const hue = Math.random() * 360;
							return `
								radial-gradient(
									circle at ${x}% ${y}%,
									hsl(${hue}, 70%, 50%, ${quantumState * 0.3}),
									transparent ${Math.random() * 50 + 50}%
								)
							`;
						})
						.join(','),
					filter: dimensionalShift ? 'blur(20px) hue-rotate(90deg)' : 'blur(0px)',
				}}
				transition={{ duration: 0.1, repeat: Infinity }}
			/>

			{/* 時空間歪曲レイヤー */}
			<motion.div
				className="fixed inset-0 z-[2] mix-blend-difference"
				style={{
					background: `conic-gradient(
						from ${chaosState * 360}deg at 50% 50%,
						rgba(255,0,255,${quantumState}),
						rgba(0,255,255,${1 - quantumState}),
						rgba(255,255,0,${chaosState})
					)`,
					transform: quantumScroll,
				}}
			/>

			{/* 非ユークリッド空間グリッド */}
			<motion.div
				className="fixed inset-0 z-[3] pointer-events-none"
				animate={{
					background: `
						repeating-linear-gradient(
							${chaosState * 360}deg,
							transparent 0%,
							rgba(255,255,255,${quantumState * 0.2}) 1px,
							transparent 2px,
							transparent ${10 + chaosState * 20}px
						),
						repeating-linear-gradient(
							${(1 - chaosState) * 360}deg,
							transparent 0%,
							rgba(0,255,255,${(1 - quantumState) * 0.2}) 1px,
							transparent 2px,
							transparent ${10 + (1 - chaosState) * 20}px
						)
					`,
					clipPath: dimensionalShift ? 'polygon(0 0, 100% 0, 50% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				}}
				transition={{ duration: 0.5 }}
			/>

			{/* メインコンテンツ */}
			<div className="relative z-10">
				{/* ヒーローセクション - 量子重ね合わせ的表現 */}
				<motion.section
					id="hero"
					className="h-screen flex items-center justify-center relative overflow-hidden"
					style={{
						perspective: '2000px',
						transformStyle: 'preserve-3d',
					}}
					onMouseEnter={() => setHeroHovered(true)}
					onMouseLeave={() => setHeroHovered(false)}
					onClick={() => {
						// 色変更
						setColorMode((prev) => (prev === 'purple' ? 'cyan' : prev === 'cyan' ? 'yellow' : 'purple'));
						// グリッチ効果を短時間適用
						setGlitchActive(true);
						setTimeout(() => setGlitchActive(false), 300);
					}}
				>
					{/* 量子的な背景レイヤー */}
					<AnimatePresence>
						{Array(5)
							.fill(0)
							.map((_, i) => (
								<motion.div
									key={i}
									className="absolute inset-0"
									initial={{ opacity: 0, scale: 0 }}
									animate={{
										opacity: [0.3, 0.7, 0.3],
										scale: heroHovered ? [1, 1.5, 1] : [1, 1.2, 1],
										rotateX: [0, 180, 360],
										rotateY: [0, -180, -360],
										background: [
											`radial-gradient(circle at ${50 + Math.sin(i) * 30}% ${50 + Math.cos(i) * 30}%, 
										hsla(${colorMode === 'purple' ? 300 : colorMode === 'cyan' ? 180 : 60}, 70%, 50%, 0.3),
										transparent)`,
											`radial-gradient(circle at ${50 - Math.sin(i) * 30}% ${50 - Math.cos(i) * 30}%, 
										hsla(${colorMode === 'purple' ? 300 : colorMode === 'cyan' ? 180 : 60}, 70%, 50%, 0.3),
										transparent)`,
										],
										filter: glitchActive
											? `blur(${i * 20}px) hue-rotate(${Math.random() * 360}deg)`
											: dimensionalShift
												? `blur(${i * 10}px) hue-rotate(${quantumState * 360}deg)`
												: `blur(${i * 5}px)`,
										transform: `translateZ(${i * -100 + (dimensionalShift ? 200 : 0)}px)`,
									}}
									transition={{
										duration: 5 + i,
										repeat: Infinity,
										repeatType: 'reverse',
										ease: 'linear',
									}}
								/>
							))}
					</AnimatePresence>

					{/* インタラクティブ指示 */}
					<motion.div
						className="absolute top-10 text-white/50 text-center text-sm"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 3, repeat: Infinity }}
					>
						クリックして量子モードを切り替え
					</motion.div>

					{/* メインタイトル - 量子重ね合わせ状態 */}
					<div className="relative" style={{ transformStyle: 'preserve-3d' }}>
						<AnimatePresence>
							{Array(3)
								.fill(0)
								.map((_, i) => (
									<motion.h1
										key={i}
										className="absolute left-0 right-0 text-[15vw] font-black text-center"
										style={{
											color: 'transparent',
											WebkitTextStroke: `1px hsla(${quantumState * 360}, 70%, 50%, 0.5)`,
											transform: `translateZ(${i * -100}px)`,
											filter: dimensionalShift ? `blur(${i * 5}px) hue-rotate(${i * 120}deg)` : `blur(${i * 2}px)`,
										}}
										animate={{
											transform: [
												`translateZ(${i * -100}px) rotateX(0deg)`,
												`translateZ(${i * -150}px) rotateX(180deg)`,
												`translateZ(${i * -100}px) rotateX(360deg)`,
											],
											opacity: [0.5, 1, 0.5],
											textShadow: [
												'0 0 20px rgba(255,0,255,0.5)',
												'0 0 40px rgba(0,255,255,0.5)',
												'0 0 20px rgba(255,255,0,0.5)',
											],
										}}
										transition={{
											duration: 10,
											repeat: Infinity,
											repeatType: 'reverse',
											delay: i * 0.2,
										}}
									>
										{timelineCollapse ? 'ERROR_404' : 'SOMA TAKATA'}
									</motion.h1>
								))}
						</AnimatePresence>

						{/* 役割テキスト - 量子グリッチ効果 */}
						<motion.p
							className="text-2xl text-white/80 text-center mt-12 relative"
							style={{ mixBlendMode: 'difference' }}
						>
							{['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'].map((char, i) => (
								<motion.span
									key={i}
									className="inline-block"
									animate={{
										y: [0, Math.random() * -30 * quantumState, 0],
										x: [0, Math.random() * 30 * chaosState, 0],
										scale: dimensionalShift ? [1, 2, 1] : [1, 1.2, 1],
										color: [
											`hsla(${quantumState * 360}, 70%, 50%, 0.8)`,
											`hsla(${(1 - quantumState) * 360}, 70%, 50%, 0.8)`,
											`hsla(${chaosState * 360}, 70%, 50%, 0.8)`,
										],
										textShadow: [
											'0 0 0px rgba(255,255,255,0)',
											`0 0 20px hsla(${quantumState * 360}, 70%, 50%, 0.8)`,
											'0 0 0px rgba(255,255,255,0)',
										],
									}}
									transition={{
										duration: 2 + Math.random(),
										repeat: Infinity,
										repeatType: 'reverse',
										delay: i * 0.1,
									}}
								>
									{timelineCollapse ? '#' : char}
								</motion.span>
							))}
						</motion.p>
					</div>
				</motion.section>

				{/* 作品セクション - 非ユークリッド空間的表現 */}
				<motion.section
					id="works"
					className="min-h-screen py-20 px-4 relative overflow-hidden"
					style={{ perspective: '2000px' }}
				>
					<motion.h2
						className="text-8xl font-black text-center text-white mb-20"
						animate={{
							textShadow: [
								'0 0 20px rgba(255,0,255,0.5)',
								'0 0 40px rgba(0,255,255,0.5)',
								'0 0 20px rgba(255,255,0,0.5)',
							],
						}}
						transition={{ duration: 2, repeat: Infinity }}
					>
						WORKS::
					</motion.h2>

					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
						{worksData.map((work, index) => (
							<motion.div
								key={work.title}
								className="relative group"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								animate={
									expandedWork === index
										? {
												zIndex: 10,
												y: [-10, 0, -5, 0],
												transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
											}
										: {
												zIndex: 1,
												transition: { duration: 0.5 },
											}
								}
								whileHover={{
									scale: 1.05,
									rotateY: workRotation.y,
									rotateX: workRotation.x,
									transition: { duration: 0.4 },
								}}
								style={{ transformStyle: 'preserve-3d' }}
								onClick={(e) => {
									const target = e.target as HTMLElement;
									// Check if the click was on a button or link
									if (
										target.tagName === 'BUTTON' ||
										target.tagName === 'A' ||
										target.closest('button') ||
										target.closest('a')
									) {
										return;
									}
									setExpandedWork(expandedWork === index ? null : index);
								}}
								onMouseMove={(e) => {
									// 3Dホバー効果
									const rect = e.currentTarget.getBoundingClientRect();
									const centerX = rect.left + rect.width / 2;
									const centerY = rect.top + rect.height / 2;

									// マウス位置と中心からの距離で回転量を計算
									const rotateY = ((e.clientX - centerX) / rect.width) * 30;
									const rotateX = ((centerY - e.clientY) / rect.height) * 30;

									setWorkRotation({ x: rotateX, y: rotateY });
								}}
							>
								{/* 量子的な背景エフェクト */}
								<motion.div
									className="absolute inset-0"
									animate={{
										background: [
											`conic-gradient(from ${chaosState * 360}deg at 50% 50%, 
												rgba(255,0,255,0.2), 
												rgba(0,255,255,0.2), 
												rgba(255,255,0,0.2), 
												rgba(255,0,255,0.2))`,
										],
										filter:
											expandedWork === index
												? ['blur(5px)', 'blur(15px)', 'blur(5px)']
												: ['blur(10px)', 'blur(20px)', 'blur(10px)'],
									}}
									transition={{ duration: 5, repeat: Infinity }}
								/>

								{/* インタラクションヒント */}
								<motion.div
									className="absolute -top-5 left-0 right-0 text-center text-white/50 text-xs"
									initial={{ opacity: 0 }}
									animate={{ opacity: expandedWork === index ? 0 : 1 }}
								>
									クリックで拡大
								</motion.div>

								{/* カード表面 */}
								<div
									className={`relative bg-black/30 backdrop-blur-xl p-8 h-full
										[transform-style:preserve-3d] backface-hidden
										[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
										${expandedWork === index ? 'border border-white/30' : ''}`}
								>
									<motion.h3
										className="text-2xl font-bold text-white mb-4"
										animate={
											expandedWork === index
												? {
														fontSize: '2rem',
														color: ['rgba(255,255,255,1)', 'rgba(255,0,255,1)', 'rgba(0,255,255,1)'],
													}
												: {
														color: ['rgba(255,255,255,1)', 'rgba(255,0,255,1)', 'rgba(0,255,255,1)'],
													}
										}
										transition={{ duration: 3, repeat: Infinity }}
									>
										{work.title}
									</motion.h3>
									<p className="text-white/80 mb-6">{work.description}</p>
									<div className="flex flex-wrap gap-2">
										{work.tags.map((tag) => (
											<motion.span
												key={tag}
												className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm"
												whileHover={{
													scale: 1.1,
													color: '#fff',
													backgroundColor: 'rgba(255,255,255,0.2)',
												}}
											>
												{tag}
											</motion.span>
										))}
									</div>

									{/* 拡大時のみ表示される追加情報 */}
									{expandedWork === index && (
										<motion.div
											className="mt-6 border-t border-white/20 pt-4 relative z-20"
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											transition={{ duration: 0.3 }}
										>
											<div className="w-full h-48 overflow-hidden relative">
												<div
													className="w-full h-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm"
													style={{
														backgroundImage: `url(${work.image})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
													}}
												/>
											</div>
											<div className="mt-4 flex justify-between items-center">
												<motion.button
													className="px-4 py-2 z-50 bg-white/10 text-white/80 rounded-md text-sm"
													whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
													onClick={(e) => {
														e.stopPropagation();
														setExpandedWork(null);
													}}
												>
													閉じる
												</motion.button>
												<motion.button
													className="px-4 py-2 z-50 bg-purple-500/30 text-white/90 rounded-md text-sm flex items-center relative"
													whileHover={{ backgroundColor: 'rgba(168,85,247,0.5)' }}
													onClick={(e) => {
														e.stopPropagation();
														window.open(work.url, '_blank', 'noopener,noreferrer');
													}}
												>
													<span>サイトを見る</span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4 ml-1"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
														/>
													</svg>
												</motion.button>
											</div>
										</motion.div>
									)}

									{/* 量子的なエネルギーライン */}
									<motion.div
										className="absolute bottom-0 left-0 w-full h-1"
										style={{
											background: `linear-gradient(90deg, 
												transparent, 
												rgba(255,0,255,${chaosState}), 
												rgba(0,255,255,${1 - chaosState}), 
												transparent
											)`,
										}}
										animate={{
											x: ['-100%', '100%'],
										}}
										transition={{ duration: 2, repeat: Infinity }}
									/>
								</div>

								{/* カード裏面 */}
								<div
									className="absolute inset-0 bg-black/30 backdrop-blur-xl p-8 pointer-events-none
										[transform:rotateY(180deg)] backface-hidden
										[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]"
								>
									<div className="h-full flex flex-col justify-center items-center text-white/80">
										<motion.div className="mt-4 grid grid-cols-4 gap-2">
											{Array(16)
												.fill(0)
												.map((_, i) => (
													<motion.div
														key={i}
														className="aspect-square bg-white/10 rounded-sm"
														animate={{
															opacity: [0.2, 1, 0.2],
															scale: [1, 1.2, 1],
														}}
														transition={{
															duration: 1 + Math.random() * 2,
															repeat: Infinity,
															delay: i * 0.1,
														}}
													/>
												))}
										</motion.div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* プロフィールセクション - 量子コンピューティング的表現 */}
				<motion.section
					id="profile"
					className="min-h-screen py-20 px-4 relative overflow-hidden"
					style={{
						perspective: '2000px',
					}}
				>
					{/* 量子重ね合わせ状態の背景 */}
					<motion.div
						className="absolute inset-0"
						animate={{
							background: [
								'radial-gradient(circle at 0% 0%, rgba(255,0,255,0.2) 0%, transparent 50%)',
								'radial-gradient(circle at 100% 100%, rgba(0,255,255,0.2) 0%, transparent 50%)',
								'radial-gradient(circle at 50% 50%, rgba(255,255,0,0.2) 0%, transparent 50%)',
							],
							filter: ['blur(10px) hue-rotate(0deg)', 'blur(20px) hue-rotate(180deg)', 'blur(10px) hue-rotate(360deg)'],
						}}
						transition={{ duration: 10, repeat: Infinity }}
					/>

					{/* モード切替ボタン */}
					<div className="absolute top-10 right-10 z-10 flex space-x-2">
						<motion.button
							className={`px-3 py-1 rounded-md text-sm ${profileMode === 'normal' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'}`}
							onClick={() => setProfileMode('normal')}
							whileHover={{ scale: 1.05 }}
						>
							Normal
						</motion.button>
						<motion.button
							className={`px-3 py-1 rounded-md text-sm ${profileMode === 'binary' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'}`}
							onClick={() => setProfileMode('binary')}
							whileHover={{ scale: 1.05 }}
						>
							Binary
						</motion.button>
						<motion.button
							className={`px-3 py-1 rounded-md text-sm ${profileMode === 'quantum' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'}`}
							onClick={() => setProfileMode('quantum')}
							whileHover={{ scale: 1.05 }}
						>
							Quantum
						</motion.button>
					</div>

					<div className="max-w-7xl mx-auto relative">
						{/* プロフィールカード - 4次元的表現 */}
						<motion.div
							className="relative group cursor-pointer"
							whileHover={{
								rotateY: 180,
								rotateX: 45,
								scale: 1.1,
								transition: { duration: 0.8 },
							}}
							style={{ transformStyle: 'preserve-3d' }}
						>
							{/* カード表面 - 非ユークリッド的形状 */}
							<div
								className="relative bg-black/30 backdrop-blur-xl p-8
									[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
									backface-hidden"
							>
								<motion.h2
									className="text-4xl font-bold text-white mb-4"
									animate={{
										textShadow: [
											'0 0 20px rgba(255,0,255,0.8)',
											'0 0 40px rgba(0,255,255,0.8)',
											'0 0 20px rgba(255,255,0,0.8)',
										],
										filter: [
											'hue-rotate(0deg) brightness(1)',
											'hue-rotate(180deg) brightness(1.5)',
											'hue-rotate(360deg) brightness(1)',
										],
									}}
									transition={{ duration: 3, repeat: Infinity }}
								>
									PROFILE::
								</motion.h2>
								<motion.p
									className="text-white/80 leading-relaxed mix-blend-difference"
									style={{
										textShadow: `${chaosState * 10}px ${chaosState * 10}px ${chaosState * 20}px rgba(255,255,255,0.5)`,
									}}
								>
									{profileMode === 'normal' &&
										'モノづくりが大好きです。自分のあたまの中にあるアイデアを形にすることが出来る。プログラミングは最高の趣味だ。'}
									{profileMode === 'binary' &&
										'01001101 01101111 01101110 01101111 01100100 01110101 01101011 01110101 01110010 01101001 00100000 01100111 01100001 00100000 01100100 01100001 01101001 01110011 01110101 01101011 01101001 00100000 01100100 01100101 01110011 01110101'}
									{profileMode === 'quantum' && '|ψ⟩ = α|創造性⟩ + β|技術力⟩ + γ|情熱⟩ where |α|² + |β|² + |γ|² = 1'}
								</motion.p>
							</div>

							{/* カード裏面 - 量子的データ表現 */}
							<div
								className="absolute inset-0 bg-black/30 backdrop-blur-xl p-8 pointer-events-none
									[transform:rotateY(180deg)] backface-hidden
									[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]"
							>
								<div className="text-white/80 space-y-4 font-mono">
									<motion.p
										animate={{
											opacity: [1, 0.5, 1],
											filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
										}}
										transition={{ duration: 2, repeat: Infinity }}
									>
										QUANTUM_STATE: |ψ⟩ = α|0⟩ + β|1⟩
									</motion.p>
									<motion.div className="grid grid-cols-4 gap-2">
										{Array(16)
											.fill(0)
											.map((_, i) => (
												<motion.div
													key={i}
													className="aspect-square bg-white/10 rounded-sm"
													animate={{
														opacity: [0.2, 1, 0.2],
														scale: [1, 1.2, 1],
													}}
													transition={{
														duration: 1 + Math.random() * 2,
														repeat: Infinity,
														delay: i * 0.1,
													}}
												/>
											))}
									</motion.div>
								</div>
							</div>
						</motion.div>

						{/* スキルセクション - インタラクティブな量子表現 */}
						<div className="mt-24 mb-16">
							<motion.h3
								className="text-2xl font-bold text-white mb-8 text-center"
								animate={{
									textShadow: ['0 0 10px rgba(255,0,255,0.5)', '0 0 20px rgba(0,255,255,0.5)'],
								}}
								transition={{ duration: 2, repeat: Infinity }}
							>
								SKILLS::
							</motion.h3>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{skillsData.map((skill) => (
									<motion.div
										key={skill.name}
										className={`relative p-6 backdrop-blur-sm border border-white/10 rounded-lg 
											cursor-pointer transition-all duration-300
											${selectedSkill === skill.name ? 'bg-white/20' : 'bg-black/40'}`}
										whileHover={{
											scale: 1.05,
											backgroundColor: 'rgba(255,255,255,0.15)',
										}}
										onClick={() => toggleSkillSelection(skill.name)}
									>
										<motion.div
											className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
											style={{ width: `${skill.level}%` }}
											animate={{
												width: selectedSkill === skill.name ? '100%' : `${skill.level}%`,
												height: selectedSkill === skill.name ? '2px' : '1px',
											}}
											transition={{ duration: 0.5 }}
										/>

										<div className="flex justify-between items-center mb-2">
											<h4 className="text-xl font-bold text-white">{skill.name}</h4>
											<span className="text-white/70 text-sm">{skill.years} years</span>
										</div>

										{/* スキルレベル - 量子的表現 */}
										<div className="flex items-center mb-3">
											{Array(10)
												.fill(0)
												.map((_, i) => (
													<motion.div
														key={i}
														className={`h-1 mr-0.5 rounded-full ${i < skill.level / 10 ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : 'bg-white/20'}`}
														style={{ width: '8px' }}
														animate={
															selectedSkill === skill.name
																? {
																		height: [1, 10, 1],
																		opacity: i < skill.level / 10 ? [0.8, 1, 0.8] : [0.2, 0.4, 0.2],
																	}
																: {}
														}
														transition={{
															duration: 1 + i * 0.1,
															repeat: Infinity,
															repeatType: 'reverse',
														}}
													/>
												))}
											<span className="ml-2 text-white/60 text-sm">{skill.level}%</span>
										</div>

										<p className="text-white/70 text-sm">{skill.description}</p>

										{/* 選択時の追加情報 */}
										{selectedSkill === skill.name && (
											<motion.div
												className="mt-4 pt-4 border-t border-white/10"
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												transition={{ duration: 0.3 }}
											>
												<p className="text-white/60 text-sm mb-2">
													{skill.years > 2
														? `${skill.name}を${skill.years}年間使用した深い経験があります。`
														: skill.years <= 1
															? `${skill.name}は個人開発で使用してきました。`
															: `${skill.name}で${skill.years}年間実務経験を積んできました。`}
												</p>
												<motion.div className="grid grid-cols-5 gap-1">
													{Array(10)
														.fill(0)
														.map((_, i) => (
															<motion.div
																key={i}
																className="h-1 bg-white/30 rounded-full"
																animate={{
																	height: [1, 20, 1],
																	backgroundColor:
																		i % 2 === 0
																			? ['rgba(255,0,255,0.3)', 'rgba(0,255,255,0.3)']
																			: ['rgba(0,255,255,0.3)', 'rgba(255,0,255,0.3)'],
																}}
																transition={{
																	duration: 1 + i * 0.2,
																	repeat: Infinity,
																}}
															/>
														))}
												</motion.div>
											</motion.div>
										)}
									</motion.div>
								))}
							</div>
						</div>

						{/* タイムライン - 非線形時間表現 */}
						<div className="mt-20 space-y-8">
							{timelineData.map((item, index) => (
								<motion.div
									key={index}
									className="relative"
									initial={{ opacity: 0, x: -50 }}
									whileInView={{ opacity: 1, x: 0 }}
									whileHover={{
										scale: 1.05,
										rotateX: 15,
										rotateY: 15,
									}}
								>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
										style={{
											clipPath: `polygon(
												${50 + Math.sin(chaosState * Math.PI * 2) * 10}% 0%,
												${100 - Math.cos(chaosState * Math.PI * 2) * 10}% ${50 + Math.sin(chaosState * Math.PI * 2) * 10}%,
												${50 - Math.sin(chaosState * Math.PI * 2) * 10}% 100%,
												0% ${50 - Math.cos(chaosState * Math.PI * 2) * 10}%
											)`,
										}}
									/>
									<div className="relative p-6 backdrop-blur-sm">
										<motion.time
											className="text-white/60 font-mono block"
											animate={{
												color: ['rgba(255,0,255,0.6)', 'rgba(0,255,255,0.6)'],
												textShadow: ['0 0 5px rgba(255,0,255,0.5)', '0 0 10px rgba(0,255,255,0.5)'],
											}}
											transition={{ duration: 2, repeat: Infinity }}
										>
											{item.date}
										</motion.time>
										<motion.h3
											className="text-xl font-bold text-white mt-2"
											style={{
												filter: `hue-rotate(${chaosState * 360}deg)`,
											}}
										>
											{item.title}
										</motion.h3>
										<p className="text-white/80">{item.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				{/* ニュースセクション - 量子もつれ的表現 */}
				<motion.section
					id="news"
					className="min-h-screen py-20 px-4 relative overflow-hidden"
					style={{ perspective: '2000px' }}
				>
					<motion.div
						className="absolute inset-0"
						animate={{
							background: [
								'linear-gradient(45deg, rgba(255,0,255,0.2) 0%, transparent 70%)',
								'linear-gradient(45deg, rgba(0,255,255,0.2) 0%, transparent 70%)',
							],
							filter: ['blur(20px)', 'blur(10px)'],
						}}
						transition={{ duration: 5, repeat: Infinity }}
					/>

					<div className="max-w-7xl mx-auto relative">
						<div className="flex items-center justify-center mb-12">
							<motion.h2
								className="text-8xl font-black text-center text-white"
								style={{
									textShadow: `${Math.sin(chaosState * Math.PI * 2) * 10}px ${
										Math.cos(chaosState * Math.PI * 2) * 10
									}px 20px rgba(255,255,255,0.2)`,
								}}
							>
								NEWS::
							</motion.h2>

							{/* スクランブルボタン */}
							<motion.button
								className="ml-6 p-3 bg-white/10 rounded-full text-white/80"
								whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,0,255,0.2)' }}
								onClick={() => {
									setNewsScrambled(!newsScrambled);
									// 一時的なグリッチ効果
									setGlitchActive(true);
									setTimeout(() => setGlitchActive(false), 300);
								}}
								title={newsScrambled ? '復号化' : '量子暗号化'}
							>
								{newsScrambled ? '🔓' : '🔒'}
							</motion.button>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{newsData.map((news, index) => (
								<motion.article
									key={news.title}
									className="relative"
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									whileHover={{
										rotateX: 15,
										rotateY: 15,
										scale: 1.05,
										transition: { duration: 0.4 },
									}}
									animate={
										newsExpanded === index
											? {
													zIndex: 10,
													y: [-10, 0, -5, 0],
													transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
												}
											: {}
									}
									onClick={(e) => {
										const target = e.target as HTMLElement;
										// Check if the click was on a button or link
										if (
											target.tagName === 'BUTTON' ||
											target.tagName === 'A' ||
											target.closest('button') ||
											target.closest('a')
										) {
											return;
										}
										setNewsExpanded(newsExpanded === index ? null : index);
									}}
								>
									{/* 量子もつれエフェクト */}
									<motion.div
										className="absolute inset-0"
										animate={{
											background: [
												`radial-gradient(circle at ${Math.random() * 100}% ${
													Math.random() * 100
												}%, rgba(255,0,255,0.3), transparent)`,
												`radial-gradient(circle at ${Math.random() * 100}% ${
													Math.random() * 100
												}%, rgba(0,255,255,0.3), transparent)`,
											],
										}}
										transition={{ duration: 2, repeat: Infinity }}
									/>

									<div
										className="relative bg-black/30 backdrop-blur-xl p-6 border border-white/10
											[clip-path:polygon(0_5%,5%_0,95%_0,100%_5%,100%_95%,95%_100%,5%_100%,0_95%)]"
										onClick={() => setNewsExpanded(newsExpanded === index ? null : index)}
									>
										<motion.time
											className="text-white/60 font-mono block"
											animate={{
												color: ['rgba(255,0,255,0.6)', 'rgba(0,255,255,0.6)', 'rgba(255,255,0,0.6)'],
											}}
											transition={{ duration: 3, repeat: Infinity }}
										>
											{newsScrambled
												? news.date
														.split('')
														.map((c) => (c === '.' ? '.' : Math.floor(Math.random() * 10).toString()))
														.join('')
												: news.date}
										</motion.time>
										<motion.h3
											className="text-xl font-bold text-white mt-2"
											style={{
												filter: `hue-rotate(${chaosState * 360}deg) brightness(${1 + chaosState * 0.5})`,
											}}
										>
											{newsScrambled
												? news.title
														.split('')
														.map((c) => (c === ' ' ? ' ' : String.fromCharCode(Math.floor(Math.random() * 26) + 65)))
														.join('')
												: news.title}
										</motion.h3>

										{/* 展開時のみ表示されるコンテンツ */}
										{newsExpanded === index && (
											<motion.div
												className="mt-4 pt-4 border-t border-white/10 relative z-20"
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												transition={{ duration: 0.3 }}
											>
												<div className="w-full h-48 overflow-hidden relative rounded-md mb-4">
													<div
														className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm"
														style={{
															backgroundImage: `url(${news.image})`,
															backgroundSize: 'cover',
															backgroundPosition: 'center',
														}}
													/>
													<div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300" />
												</div>

												{/* インタラクティブな量子データビジュアライゼーション */}
												<div className="flex items-center justify-center py-2">
													{Array(8)
														.fill(0)
														.map((_, i) => (
															<motion.div
																key={i}
																className="h-10 w-1 mx-0.5 bg-white/30 rounded-full"
																animate={{
																	height: [10, 30 + Math.random() * 20, 10],
																	backgroundColor: [
																		`rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`,
																		`rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`,
																		`rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`,
																	],
																}}
																transition={{
																	duration: 1 + i * 0.1,
																	repeat: Infinity,
																	repeatType: 'reverse',
																}}
															/>
														))}
												</div>

												<div className="flex justify-between items-center mt-4">
													<motion.button
														className="px-3 py-1 bg-white/10 text-white/80 rounded text-sm"
														whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
														onClick={(e) => {
															e.stopPropagation();
															setNewsExpanded(null);
														}}
													>
														閉じる
													</motion.button>

													<motion.button
														className="px-3 py-1 z-50 bg-cyan-500/30 text-white/90 rounded text-sm flex items-center relative"
														whileHover={{ backgroundColor: 'rgba(6,182,212,0.5)' }}
														onClick={(e) => {
															e.stopPropagation();
															window.open(news.url, '_blank', 'noopener,noreferrer');
														}}
													>
														<span>記事を読む</span>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 ml-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
															/>
														</svg>
													</motion.button>
												</div>
											</motion.div>
										)}

										{/* データストリーム */}
										<motion.div
											className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"
											animate={{
												scaleX: [1, 1.5, 1],
												opacity: [0.5, 1, 0.5],
											}}
											transition={{ duration: 2, repeat: Infinity }}
										/>

										{/* デコードヒント */}
										{newsScrambled && (
											<motion.div
												className="absolute top-2 right-2 text-xs text-white/50"
												animate={{ opacity: [0.5, 1, 0.5] }}
												transition={{ duration: 1.5, repeat: Infinity }}
											>
												量子暗号化中...
											</motion.div>
										)}
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</motion.section>
			</div>

			{/* フッターセクション */}
			<motion.section
				id="contact"
				className="min-h-screen py-20 px-4 z-10 relative overflow-hidden"
				style={{ perspective: '2000px' }}
			>
				<div
					className="absolute inset-0"
					style={{
						background:
							'radial-gradient(circle at 70% 30%, rgba(255,0,255,0.1), transparent 70%), radial-gradient(circle at 30% 70%, rgba(0,255,255,0.1), transparent 70%)',
						filter: 'blur(15px)',
					}}
				/>

				<div className="max-w-4xl mx-auto mt-20">
					<h2 className="text-6xl font-black text-center text-white mb-12">CONTACT::</h2>

					<div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-lg hover:scale-[1.01] transition-transform duration-300">
						<div className="flex justify-center gap-6 mb-6 relative z-50">
							<button
								className={`px-4 py-2 rounded-md text-sm ${footerMode === 'contact' ? 'bg-white/20 text-white' : 'bg-black/40 text-white/60'} hover:bg-white/15 transition-colors`}
								onClick={() => setFooterMode('contact')}
								aria-pressed={footerMode === 'contact'}
							>
								CONTACT_FORM
							</button>
							<button
								className={`px-4 py-2 rounded-md text-sm ${footerMode === 'terminal' ? 'bg-white/20 text-white' : 'bg-black/40 text-white/60'} hover:bg-white/15 transition-colors`}
								onClick={() => setFooterMode('terminal')}
								aria-pressed={footerMode === 'terminal'}
							>
								TERMINAL
							</button>
						</div>

						{footerMode === 'contact' && (
							<div className="relative z-50">
								<h3 className="text-2xl font-bold text-center text-white mb-6 glitch-text" data-text="MESSAGE::">
									MESSAGE::
								</h3>

								<form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
									<div className="relative group">
										<label
											htmlFor="name-input"
											className="text-white/70 text-sm mb-1 block transform transition-all group-hover:text-purple-400 group-hover:translate-x-2"
										>
											Your Name
										</label>
										<div className="relative overflow-hidden">
											<input
												id="name-input"
												type="text"
												placeholder="Enter your name"
												className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 
												[clip-path:polygon(0_5%,5%_0,95%_0,100%_5%,100%_95%,95%_100%,5%_100%,0_95%)]
												group-hover:[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
												transition-all duration-500"
												value={nameInput}
												onChange={(e) => setNameInput(e.target.value)}
												tabIndex={1}
												autoComplete="name"
											/>
											<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-700" />
											<div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
											<div className="absolute -bottom-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
										</div>
									</div>

									<div className="relative group">
										<label
											htmlFor="email-input"
											className="text-white/70 text-sm mb-1 block transform transition-all group-hover:text-cyan-400 group-hover:translate-x-2"
										>
											Your Email
										</label>
										<div className="relative overflow-hidden">
											<input
												id="email-input"
												type="email"
												placeholder="Enter your email"
												className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30
												[clip-path:polygon(0_5%,5%_0,95%_0,100%_5%,100%_95%,95%_100%,5%_100%,0_95%)]
												group-hover:[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
												transition-all duration-500"
												value={emailInput}
												onChange={(e) => setEmailInput(e.target.value)}
												tabIndex={2}
												autoComplete="email"
											/>
											<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700" />
											<div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
											<div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
										</div>
									</div>

									<div className="relative group">
										<label
											htmlFor="message-input"
											className="text-white/70 text-sm mb-1 block transform transition-all group-hover:text-yellow-400 group-hover:translate-x-2"
										>
											Your Message
										</label>
										<div className="relative overflow-hidden">
											<textarea
												id="message-input"
												placeholder="Enter your message"
												rows={4}
												className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/30
												[clip-path:polygon(0_5%,5%_0,95%_0,100%_5%,100%_95%,95%_100%,5%_100%,0_95%)]
												group-hover:[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
												transition-all duration-500"
												value={messageInput}
												onChange={(e) => setMessageInput(e.target.value)}
												tabIndex={3}
											/>
											<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-yellow-500 w-0 group-hover:w-full transition-all duration-700" />
											<div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
											<div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
										</div>
									</div>

									<button
										type="submit"
										className="w-full py-4 relative group overflow-hidden
										[clip-path:polygon(0_15%,15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%)]
										bg-black/50 border border-white/10 text-white
										hover:border-purple-500/50 transition-all duration-300"
										onClick={(e) => {
											e.preventDefault();
											// 一時的なグリッチ効果
											setGlitchActive(true);
											setTimeout(() => setGlitchActive(false), 500);
											// フォーム送信ロジック
											console.log('Form submitted:', { nameInput, emailInput, messageInput });

											// 送信アニメーション
											setColorMode((prev) => (prev === 'purple' ? 'cyan' : prev === 'cyan' ? 'yellow' : 'purple'));

											setTimeout(() => {
												alert('TRANSMISSION COMPLETE: QUANTUM STATE ENTANGLED');
												// フォームをリセット
												setNameInput('');
												setEmailInput('');
												setMessageInput('');
											}, 800);
										}}
										tabIndex={4}
									>
										<span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
										<span className="absolute inset-0 flex items-center justify-center">
											<span>SEND_MESSAGE()</span>
											<span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												[▲]
											</span>
										</span>
										<span className="absolute top-0 left-0 w-full h-full">
											{Array(5)
												.fill(0)
												.map((_, i) => (
													<span
														key={i}
														className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-700"
														style={{
															transitionDelay: `${i * 100}ms`,
															transform: `translateY(${i * 10}px) scaleX(${1 - i * 0.2})`,
														}}
													/>
												))}
										</span>
									</button>
								</form>
							</div>
						)}

						{footerMode === 'terminal' && (
							<div className="text-green-400 font-mono p-4 bg-black/70 rounded-md border border-green-500/20 relative z-50">
								<div className="mb-2 flex items-center">
									<span className="text-green-500 mr-2">soma:~$</span>
									<span className="animate-pulse">▌</span>
								</div>

								<div className="h-40 overflow-auto">
									<p className="mb-2">Welcome to Terminal v1.0.1</p>
									<p className="mb-2">Type 'help' for available commands.</p>

									{terminalText && (
										<div className="mt-4">
											<p>$ {terminalText}</p>
											{terminalText.toLowerCase() === 'help' && (
												<div className="mt-2 text-xs">
													<p>Available commands:</p>
													<p className="ml-2">about - About Soma Takata</p>
													<p className="ml-2">skills - List technical skills</p>
													<p className="ml-2">projects - View projects</p>
													<p className="ml-2">contact - Contact information</p>
													<p className="ml-2">clear - Clear terminal</p>
												</div>
											)}

											{terminalText.toLowerCase() === 'about' && (
												<div className="mt-2 text-xs">
													<p>Soma Takata - Software Engineer</p>
													<p>Currently developing next-generation web experiences using bleeding-edge technology.</p>
													<p>Passionate about creating beautiful and interactive interfaces.</p>
												</div>
											)}

											{terminalText.toLowerCase() === 'skills' && (
												<div className="mt-2 text-xs">
													<p>Technical Skills:</p>
													{skillsData.map((skill) => (
														<p key={skill.name} className="ml-2">
															- {skill.name}: {skill.level}% - {skill.years} years - {skill.description}
														</p>
													))}
												</div>
											)}

											{terminalText.toLowerCase() === 'projects' && (
												<div className="mt-2 text-xs">
													<p>Recent Projects:</p>
													{worksData.map((work) => (
														<p key={work.title} className="ml-2">
															- {work.title}: {work.description}
														</p>
													))}
												</div>
											)}

											{terminalText.toLowerCase() === 'contact' && (
												<div className="mt-2 text-xs">
													<p>Contact Information:</p>
													<p className="ml-2">GitHub: github.com/SomaTakata</p>
													<p className="ml-2">Twitter: @soma_takata_en</p>
												</div>
											)}

											{terminalText.toLowerCase() === 'clear' && <p>Terminal cleared.</p>}
										</div>
									)}
								</div>

								<div className="mt-4 flex">
									<span className="text-green-500 mr-2">soma:~$</span>
									<input
										type="text"
										className="flex-1 bg-transparent border-none outline-none text-green-400"
										value={terminalText}
										onChange={(e) => setTerminalText(e.target.value)}
										onKeyDown={(e) => {
											if (e.key === 'Enter') {
												// コマンド実行エフェクト
												setGlitchActive(true);
												setTimeout(() => setGlitchActive(false), 200);

												// CLEARコマンド
												if (terminalText.toLowerCase() === 'clear') {
													setTerminalText('');
												}
											}
										}}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</motion.section>

			{/* SNSリンク - より動的なアニメーション */}
			<div className="fixed bottom-8 right-8 flex gap-4 z-50">
				<a
					href="https://github.com/SomaTakata"
					target="_blank"
					rel="noopener noreferrer"
					className="p-4 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12"
				>
					<Github className="w-6 h-6 text-white" />
				</a>
				<a
					href="https://x.com/soma_takata_en"
					target="_blank"
					rel="noopener noreferrer"
					className="p-4 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12"
				>
					<Twitter className="w-6 h-6 text-white" />
				</a>
			</div>

			{/* 量子カーソル */}
			<div
				className="fixed w-20 h-20 pointer-events-none z-40"
				style={{
					transform: `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px)`,
					opacity: quantumState,
					transition: 'transform 0.1s linear',
				}}
			>
				<div
					className="w-full h-full rounded-full"
					style={{
						background: `
							radial-gradient(
								circle at center,
								hsla(${quantumState * 360}, 70%, 50%, 0.5),
								transparent
							)
						`,
						boxShadow: `
							0 0 20px hsla(${quantumState * 360}, 70%, 50%, 0.5),
							0 0 40px hsla(${(1 - quantumState) * 360}, 70%, 50%, 0.3)
						`,
						filter: dimensionalShift ? 'blur(10px)' : 'none',
					}}
				/>
			</div>

			{/* グローバルグリッチエフェクト */}
			{glitchActive && (
				<div
					className="fixed inset-0 z-[999] mix-blend-difference pointer-events-none"
					style={{
						opacity: 1,
						background: `repeating-linear-gradient(
							${Math.random() * 360}deg,
							rgba(255,0,255,0.2),
							rgba(0,255,255,0.2) 10%,
							rgba(255,255,0,0.2) 20%
						)`,
					}}
				/>
			)}

			{/* 3Dテキストレイヤー */}
			<div className="relative perspective-[1000px]">
				{[...Array(3)].map((_, i) => (
					<div
						key={i}
						className="absolute text-[12vw] font-black text-white/30"
						style={{
							transform: `translateZ(${i * -50}px) rotateX(${Math.sin(i) * 10}deg) rotateY(${Math.cos(i) * 15}deg)`,
							filter: `blur(${i * 2}px)`,
							animation: `float${i + 1} 8s infinite ease-in-out`,
						}}
					>
						SOMA TAKATA
					</div>
				))}
			</div>

			<style jsx global>{`
				@keyframes float1 {
					0%,
					100% {
						transform: translateZ(-0px) rotateX(0deg) rotateY(0deg);
					}
					50% {
						transform: translateZ(-0px) rotateX(10deg) rotateY(-15deg);
					}
				}
				@keyframes float2 {
					0%,
					100% {
						transform: translateZ(-50px) rotateX(0deg) rotateY(0deg);
					}
					50% {
						transform: translateZ(-50px) rotateX(-10deg) rotateY(15deg);
					}
				}
				@keyframes float3 {
					0%,
					100% {
						transform: translateZ(-100px) rotateX(0deg) rotateY(0deg);
					}
					50% {
						transform: translateZ(-100px) rotateX(10deg) rotateY(-15deg);
					}
				}

				.glitch-text {
					position: relative;
					animation: glitch 2s infinite;
				}

				.glitch-text::before,
				.glitch-text::after {
					content: attr(data-text);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				.glitch-text::before {
					left: 2px;
					text-shadow: -2px 0 #ff00ff;
					animation: glitch-anim 2s infinite;
					clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
				}

				.glitch-text::after {
					left: -2px;
					text-shadow: 2px 0 #00ffff;
					animation: glitch-anim2 2s infinite;
					clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
				}

				@keyframes glitch-anim {
					0% {
						top: 0;
					}
					20% {
						top: -1px;
					}
					40% {
						top: 1px;
					}
					60% {
						top: -1px;
					}
					80% {
						top: 2px;
					}
					100% {
						top: 0;
					}
				}

				@keyframes glitch-anim2 {
					0% {
						top: 0;
					}
					20% {
						top: 2px;
					}
					40% {
						top: -2px;
					}
					60% {
						top: 1px;
					}
					80% {
						top: -1px;
					}
					100% {
						top: 0;
					}
				}

				@keyframes glitch {
					0% {
						text-shadow:
							0.05em 0 0 #ff00ff,
							-0.05em -0.025em 0 #00ffff;
					}
					14% {
						text-shadow:
							0.05em 0 0 #ff00ff,
							-0.05em -0.025em 0 #00ffff;
					}
					15% {
						text-shadow:
							-0.05em -0.025em 0 #ff00ff,
							0.025em 0.025em 0 #00ffff;
					}
					49% {
						text-shadow:
							-0.05em -0.025em 0 #ff00ff,
							0.025em 0.025em 0 #00ffff;
					}
					50% {
						text-shadow:
							0.025em 0.05em 0 #ff00ff,
							0.05em 0 0 #00ffff;
					}
					99% {
						text-shadow:
							0.025em 0.05em 0 #ff00ff,
							0.05em 0 0 #00ffff;
					}
					100% {
						text-shadow:
							-0.025em 0 0 #ff00ff,
							-0.025em -0.025em 0 #00ffff;
					}
				}
			`}</style>
		</div>
	);
};

export default HomePage;
