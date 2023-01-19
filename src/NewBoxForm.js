import React, {useState} from "react";

const NewBoxForm =({addBox})=> {
    const initialState = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialState)


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const{width, height, color} = formData;
        addBox(width, height, color);
        setFormData(initialState);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
                <input 
                name = "width"
                id="width"
                type="text" 
                placeholder="width" 
                value={formData.width} 
                onChange={handleChange} 
            />
            <label htmlFor="height">Height</label>
                <input 
                name = "height"
                id="height" 
                type="text" 
                placeholder="height" 
                value={formData.height} 
                onChange={handleChange} 
            />
            <label htmlFor="color">Color</label>
                <input 
                name = "color"
                id="color" 
                type="text" 
                placeholder="color" 
                value={formData.color} 
                onChange={handleChange} 
            />
            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;