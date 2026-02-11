import { useEffect, useState } from "react";

const GITHUB_USERNAME = "DomoArrigatoMrRoboto";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork) // remove forked repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-5">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center py-5 text-danger">{error}</p>;
  }

  return (
    <section id="projects" className="py-5">
      <div className="container ">
        <h2 className="text-center mb-5">Projects</h2>

        <div className="row">
          {repos.map((repo) => (
            <div key={repo.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{repo.name}</h5>
                  <p className="card-text flex-grow-1">
                    {repo.description || "No description provided."}
                  </p>

                  <p className="text-muted mb-2">⭐ {repo.stargazers_count}</p>

                  <div className="d-flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark btn-sm"
                    >
                      GitHub
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
