import { projects } from "../constants"

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        我的
        <span className="blue-gradient_text font-semibold drop-shadow">
          项目们
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>在校期间鼓捣了一些小项目</p>
      </div>

      <div className="flex flex-wrap my-30 gap-16">
        {projects.map((project) => (
          <div
            key={project.name}
            className="lg:w-[400px] w-full"
          >
            <div>
              <div className={`btn-back rounded-xl ${project.theme}`}></div>
              <div>
                <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
