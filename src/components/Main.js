import HomePage from "../pages/HomePage";
import {Route, Routes} from "react-router-dom";
import BookingPage from "../pages/BookingPage";

export function Main() {
    return (
        <main className={'main-layout'}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </main>
    );
}

export default Main;