import React, {useState} from 'react';
import cn from "classnames";
import s from "./Form.module.css"


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form data submitted:", formData)
    }

    return (
        <form onSubmit={handleSubmit} className={cn(s.form)}>
            <div className={cn(s.div)}>
                <label className={cn(s.label)}>Имя *</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите свое имя"
                    required
                    className={cn(s.input)}
                />
            </div>
            <div className={cn(s.div)}>
                <label className={cn(s.label)}>Телефон *</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Добавьте номер телефона"
                    required
                    className={cn(s.input)}
                />
            </div>
            <div className={cn(s.div)}>
                <label className={cn(s.label)}>Эл. почта</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Добавьте эл. почту"
                    className={cn(s.input)}
                />
            </div>
            <div className={cn(s.div)}>
                <label className={cn(s.label)}>Сообщение</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Добавьте сообщение"
                    className={cn(s.textarea)}
                />
            </div>
            <div>
                <button type="submit" className={cn(s.button)}>Отправить</button>
            </div>
        </form>
    );
};

export default Form;