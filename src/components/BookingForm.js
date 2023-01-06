import {useState} from "react";

function BookingForm(props) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    function handleDate(e) {
        e.preventDefault();
        setDate(e.target.value);
        props.setAvailableTimes(e.target.value);
    }

    function handleTime(e) {
        e.preventDefault();
        setTime(e.target.value);
    }

    function handleGuests(e) {
        e.preventDefault();
        setGuests(e.target.value);
    }

    function handleOccasion(e) {
        e.preventDefault();
        setOccasion(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        props.submitForm(formData);
    }

    return (
        <>
            <h2>Reserve a table now!</h2>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDate}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={handleTime}>
                    {props.availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" min="1" max="10" id="guests" value={guests} onChange={handleGuests}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasion}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;