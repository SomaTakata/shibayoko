import ViewAll from "./ViewAll";
import WorkCard from "./WorkCard";

const workItems = [
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
  { title: 'フロントエンド', year: '2023', projectName: 'NginLink' },
];

const WorkSection = () => (
  <section className="flex flex-col gap-8 border-t-[3px] border-black px-5 py-14 sm:gap-12 sm:px-10 md:px-14 md:py-32 lg:gap-16">
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
      <h2 className="font-roboto text-4xl sm:text-5xl font-black tracking-widest text-white text-stroke">WORK</h2>

      {/* WorkCardを動的に描画 */}
      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {workItems.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            year={work.year}
            projectName={work.projectName}
          />
        ))}
      </div>
      </div>
      <ViewAll text="VIEW ALL" position="center" />

  </section>
);

export default WorkSection;
