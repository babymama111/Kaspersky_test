import { useState } from 'react';
//тут очень сильно хотел добавить возможность добавления пользователей, но просто не успел.
// нам нужно сделать на бэкенде при помощи экспресса пост запрос, который будет обрабатывать наши данные , сделать валидацию там, думаю,
//  можно использовать какой-то стандартный мидлвейр и, только при прохождении функиции мидлвейра записывать данные в бд
function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    group: '',
    number: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Отменяю стандартное поведение формы

    // тут должна быть логика для валидации формы на фронтенде

    try {
      const response = await fetch('/блаблабла/form-submit-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label  htmlFor="name">Полное имя:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Почта:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="group">Группа:</label>
      <input
        id="group"
        name="group"
        type="text"
        value={formData.group}
        onChange={handleChange}
        required
      />

      <label htmlFor="number">Номер:</label>
      <input
        id="number"
        name="number"
        type="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <button className="buttoncp" type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;