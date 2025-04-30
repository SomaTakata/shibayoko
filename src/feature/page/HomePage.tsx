import { Card } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import { ArrowRight, Github, Twitter, XIcon } from 'lucide-react';

const HomePage = () => {
	return (
		<div className="h-screen flex items-center p-3  bg-red-500 justify-center">
			<div className="w-full h-full bg-black border-2 border-black">
				<div className="flex items-center justify-between h-1/6">
					<div className="flex w-1/4 items-center justify-center  bg-white h-full">
						<div className="text-3xl font-bold flex">Soma Takata</div>
					</div>
					<div className="w-1/2 flex justify-center text-white items-center h-full text-2xl font-bold">
						<div className="flex items-center justify-center border-2 border-white ">
							<div className="w-1/2 h-full flex justify-center items-center p-2 px-4 border-white  bg-white text-black border-r-2">
								LIGHT
							</div>
							<div className="w-1/2 h-full flex justify-center items-center p-2 px-4 border-r-2 border-black">DARK</div>
						</div>
					</div>
					<div className="flex w-1/4 h-full bg-white">
						<div className="flex items-center w-1/2 justify-center p-12 border-r-2 border-black ">
							<Github className="w-10 h-10" />
						</div>
						<div className="flex items-center w-1/2 justify-center  p-12">
							<Twitter className="w-10 h-10" />
						</div>
					</div>
				</div>
				<div className="flex items-center justify-start h-2/6 ">
					<div className="w-1/4 flex justify-center text-white items-center h-full text-2xl font-bold">
						<div className="flex items-center justify-center border-2 border-white ">
							<div className="w-1/2 h-full flex justify-center items-center p-2 px-4 border-white  bg-white text-black border-r-2">
								JP
							</div>
							<div className="w-1/2 h-full flex justify-center items-center p-2 px-4 border-r-2 border-black">EN</div>
						</div>
					</div>
					<div className="flex items-center h-full w-1/2 justify-between  bg-white ">
						<div className="text-4xl font-bold h-full w-1/3 flex justify-center items-center border-r-2 border-black">
							WORK
						</div>
						<div className="flex flex-col items-center h-full w-2/3 justify-between ">
							<div className="w-full h-1/2 flex items-center p-6 gap-5 border-b-2 border-black">
								<div className="w-1/2 h-full flex items-center justify-center ">
									<img src="news1.png" alt="" className="w-full h-full border-2 border-black" />
								</div>
								<div className="w-1/2 h-full flex flex-col justify-center gap-2 ">
									<h1 className="text-2xl font-bold">Artfolio</h1>
									<p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
								</div>
							</div>
							<div className="w-full h-1/2 flex items-center justify-end p-6 gap-3">
								<p className="text-2xl font-bold">View All</p>
								<ArrowRight className="w-10 h-10" />
							</div>
						</div>
					</div>
					<div className="w-1/4 flex justify-center text-white items-center h-full text-2xl font-bold">
						<div className="w-1/2 h-1/2 flex justify-center items-center">
							<img src="/avatar.png" alt="" className="w-full h-full rounded-lg border-2 border-white object-cover" />
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between h-1/6">
					<div className="flex w-1/4 items-center justify-center  bg-white h-full">
						<div className="text-5xl font-bold flex">👀</div>
					</div>
					<div className="w-1/2 flex justify-center text-white  items-center h-full text-3xl font-bold">
						ーーーーーー PROTFOLIO ーーーー
						<ArrowRight className="w-10 h-10" />
					</div>
					<div className="flex w-1/4 items-center justify-center  bg-white h-full">
						<div className="text-3xl font-bold flex gap-5">
							from
							<span className="underline ">Here</span>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-start h-2/6 ">
					<div className="w-1/4 flex justify-center text-white items-center h-full text-7xl font-bold">NEWS</div>
					<div className="flex flex-col items-center h-full w-1/2 justify-between  bg-white ">
						<div className="w-full h-1/2 flex items-center p-6 gap-5 border-b-2 border-black">
							<div className="w-1/3 h-full flex items-center justify-center ">
								<img src="news1.png" alt="" className="w-full h-full border-2 border-black" />
							</div>
							<div className="w-1/2 h-full flex flex-col justify-center gap-2 ">
								<h1 className="text-2xl font-bold">Artfolio</h1>
								<p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
							</div>
						</div>

						<div className="w-full h-1/2 flex items-center p-6 gap-5 ">
							<div className="w-1/3 h-full flex items-center justify-center ">
								<img src="news1.png" alt="" className="w-full h-full border-2 border-black" />
							</div>
							<div className="w-1/2 h-full flex flex-col justify-center gap-2 ">
								<h1 className="text-2xl font-bold">Artfolio</h1>
								<p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
							</div>
						</div>
					</div>
					<div className="w-1/4 flex justify-center text-white items-center h-full text-2xl font-bold">
						<div className="w-full h-1/2 flex items-center justify-center p-6 gap-3">
							<p className="text-4xl font-bold">View All</p>
							<ArrowRight className="w-10 h-10" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
