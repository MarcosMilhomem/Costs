import { useState } from "react"

import style from "./ProjectForm.module.css"
import Input from "../forms/Input"
import Select from "../forms/Select"
import SubmitButton from "../forms/SubmitButton"
import { useEffect } from "react"

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch ( "http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
        
        }).then((res)=>res.json())
        .then((data)=>{setCategories(data)})
    })
    

    return (
        <form className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="Number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total" />

            <Select name="category_id" text="Selecione a categoria" />
            {JSON.stringify(categories)}
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm