import {useState} from 'react';

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rol: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTakim(formData)
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
     <label>
          Rol:
          <input type="text" name="rol" value={formData.rol} onChange={handleChange} />
      </label>
     
      <input type="submit" value="Submit" />
    </form>
  )
}