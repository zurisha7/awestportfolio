 import React, { useState } from 'react';
import ModalProject from '../ModalProject';



const ProjectList = ({ sections }) => {
    const[currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ projects ] = useState([
        {
            name: 'Meet-Friends',
            description: 'An app to make new friends in your city',
            url: 'https://meet-friends-bootcamp.herokuapp.com/'
            
            
        },
        {
            name: 'Musitory',
            description: 'A music app to search for artists, albums, songs, lyrics.',
            url: 'https://macpat83.github.io/Musitory/'
          

        },
        {
            name: 'RunBuddy',
            description: 'A basic html and CSS app, that lets you see personal trainers and contact them for training sessions.',
            url: 'http://zurisha7.github.io/run-buddy/'
        },
        {
            name: 'Work-Day Scheduler',
            description: 'A place to schedule your workday!',
            url: 'https://zurisha7.github.io/WorkDay-scheduler/'
        },
        {
            name: 'NoteTaker',
            description: 'A nodeJS application that lets the user write, save, and delete notes.',
            url: 'https://intense-brook-26087.herokuapp.com/notes'

        }
    ]);
  
    
    const toggleModal = ( image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }
    

    return (
        <div>
            {isModalOpen && (
                <ModalProject onClose={toggleModal} currentProject={currentProject} />
            )}
        <h2>Portfolio</h2>
        <div className="flex-row">
            {projects.map(( project, index) => (
                 <img
                 src={require(`../../assets/images/${index}.jpg`)}
                  alt={project.name}
                 className="img-thumbnail"
                  onClick={() => toggleModal(project, index)}
                  key={project.name}
            />
            ))}
        </div>
    </div>
    );
};

export default ProjectList;