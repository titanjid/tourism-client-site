import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTicket.css';

const AddTicket = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allTicket', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully added');
                    reset();
                }
            })
    }

    return (
          <div className="add-Ticket">
              <h1>Please Add a Ticket Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })} placeholder="Location" />
                <input type="number" {...register("price")} placeholder="price" />
                <input  {...register("time")} placeholder="Time" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTicket;