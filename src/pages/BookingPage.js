import BookingForm from "../components/BookingForm";

function BookingPage(props) {
    return (
        <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm}/>
    )
}

export default BookingPage;