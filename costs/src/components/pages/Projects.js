import {useLocation} from 'react-router-dom'
import React from "react"
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
function Projects(){
    
    const location = useLocation()
    let message = ''
    if(location.state){
message = location.state.message
    }

    return(
    <div className={styles.project_container}>
        <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        </div>
{message && <Message type="success" msg= {message}/>}
<Container customClass='start'>
<p>projetos...</p>
</Container>
    </div>

    )
}

export default Projects