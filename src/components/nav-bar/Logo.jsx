import { Navbar } from "react-bootstrap"
import { FcPhone } from "react-icons/fc"
import { NavLink } from "react-router-dom"

export const Logo = () => {
    return (
        <Navbar.Brand to="/" as={NavLink}>
            <FcPhone size="42"/>
            {' '}
            Phonebook
        </Navbar.Brand >
    )
}