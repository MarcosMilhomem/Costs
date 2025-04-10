
import { redirect, useNavigate } from "react-router-dom";

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject () {
    
    const navigate = useNavigate()
    
    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type' : 'application-json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
            const buttonRedirect = (redirect) => {
                navigate("/projects");
            }
        })
        .catch((err) => console.log(err))
    }

    
    return (
    
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <h1>AKSDFAJFDAS</h1>
            <ProjectForm handleSubmit={createPost} onClick={redirect} btnText="Criar Projeto"/>
        </div>
    )
}
export default NewProject 