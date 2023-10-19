import { useState } from "react"

export default function(){
    const [assignments, setAssignments] = useState([]);
    const [assignmentValue, setAssginmentValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setAssignments([...assignments, assignmentValue]); 
        setAssginmentValue("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={assignmentValue} onChange={(e) => setAssginmentValue(e.target.value)}/>
                <button>Add</button>
            </form>
            <ul>
                {
                    assignments.map((assignment) => (
                        <li key ={assignment}>{assignment}</li>
                    ))
                }
            </ul>
        </div>
    )
}