import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {

  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  //need a function to handle form changes
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  //need a function to handle form submit
  function handleSubmit(event) {
    event.preventDefault()

    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
      //post request to send data to server
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newPokemon)
      })
      .then(res => res.json())
      .then(data => {
        onAddPokemon(data)
        //reset form data to empty
        setFormData({
          name: '',
          hp: '',
          frontUrl: '',
          backUrl: ''
        })
      })
  }





  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange} 
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp"
            value={formData.hp}
            onChange={handleChange} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
