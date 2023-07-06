import { useState } from "react";

// Formulario para adicionar e categorizar sua lista de trabalho

const TodoForm = ( {addTodo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return (
        <div className="todoForm">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Digite o Titulo" 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />

                <select value={category} onChange={(e) =>setCategory(e.target.value)} required>
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit" className="btn-criar">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm;