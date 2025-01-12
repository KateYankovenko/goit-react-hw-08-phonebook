import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { getIsLoading, getItems } from 'redux/contacts/phonebook-selectors';
import { saveContact } from 'redux/contacts/phonebook-operations';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { StyledButton, StyledForm } from '../../FormsStyled';
import { toast } from 'react-toastify';
import { Message } from 'pages/auth-pages/AuthPages.styled';


const phonePattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const PhonebookForm = () => {
  const items = useSelector(getItems);
  const dispatch = useDispatch();
  const isAdding = useSelector(getIsLoading);
  const loggedIn = useSelector(getIsLoggedIn);

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    const contactNames = items.map(item => item.name);

    if (contactNames.includes(name)) {
      toast.error(`${name} is already in contacts`);
    } else {
      const newContact = { name, number };
      dispatch(saveContact(newContact));
    }
    resetForm();
  }

    return (
      <>
        {isAdding ? <Navigate to='/contacts' /> :
          <>
            {!loggedIn && <Message>To start <NavLink to="/login">Log in to your account</NavLink> or <NavLink to="register">Register</NavLink></Message>}
            <Formik
              initialValues={{ name: '', number: '' }}
              validationSchema={Yup.object({
                  name: Yup.string().matches(namePattern, 'Honestly, to add new contact u need to login😈').required('Required'),
                  number: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
              })
              } 
              onSubmit={onSubmitForm}
              >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                isInvalid,
              }) => (
                    <StyledForm noValidate onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formContactName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Samantha Johns"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                  
                        <Form.Group className="mb-3" controlId="formContactNumber">
                          <Form.Label>Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="number"
                            placeholder="152-65-76"
                            value={values.number}
                            onChange={handleChange}
                            isInvalid={!!errors.number}
                          />
                          <Form.Control.Feedback type="invalid">{errors.number}</Form.Control.Feedback>
                        </Form.Group>
                  
                        <StyledButton variant="primary" type="submit">
                          Add contact
                        </StyledButton>
                    </StyledForm>
                    )}
            </Formik>
          </>
        }
      </>
    )
}

PhonebookForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}