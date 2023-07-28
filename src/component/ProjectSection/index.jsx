import { projects } from "../../data/projects";
const TechSection = () => {
    return (
        <div className="allProjects" >
            <div className="aall">
                <div className="h1Box">
                    <h1 className="h1projects">Projetos</h1>    
                </div>
                    <div className="all">
                        <div className="ProjectsList">
                            <div className="listBox"> 
                                <ul className="ulProducts">
                                    {projects.map((project) => (
                                    <li className="liProducts" key={project.id}>
                                        <div className="aP">
                                            <div className="h3Img">
                                                <h3 className="h3Products">{project.name}</h3>
                                                <img className="imgProducts" src="src\assets\git-icon.png" alt="" />
                                            </div>
                                            <div className="pB">
                                                <p className="pProducts">{project.description}</p>
                                                <a href="http://" className="buttonProducts">Saiba mais</a>
                                            </div>  
                                        </div>                                                                      
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>           
            </div>
        </div>                   
    );
}

export default TechSection;