const samples = [
    {
        title: "Project 1",
        description: "This is my first project!",
        link: "github.com",
    },
    {
        title: "Project 2",
        description: "This is my second project!",
        link: "github.com",
    },
    {
        title: "Project 3",
        description: "This is my third project!",
        link: "github.com",
    },
    {
        title: "Project 4",
        description: "This is my fourth project!",
        link: "github.com",
    },
    {
        title: "Project 5",
        description: "This is my fifth project!",
        link: "github.com",
    },
];

const Projects = () => {
    return (
        <div className="project-page">
            <h1>Projects</h1>
            {samples.map((sample) => (
                <div className="project">
                    <h2>{sample.title}</h2>
                    <p>{sample.description}</p>
                    <a href={sample.link}>Link</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;