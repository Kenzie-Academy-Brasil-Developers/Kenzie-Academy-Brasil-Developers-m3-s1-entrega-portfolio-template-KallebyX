import { technologies } from '../../data/technologies';

const TechSection = () => {
    return (
        <div className="allTech">
            <div className='techH1'>
                <h1>Tecnologias</h1>
            </div>
            <div className='techUl'>
                <ul className='ul'>
                    {technologies.map((technology) => (
                        <li className='card' key={technology.name}>
                            <img className='imgUl' src={technology.img} alt={technology.name} />
                            <h3 className='h3Ul'>{technology.name}</h3>                           
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TechSection;