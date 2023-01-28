import { Formik, Form, Field  ,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  image: Yup.string().required('Required'),

});
export default function Index() {

  const URL = "http://localhost:4000/news"

  async function add (values){
    toast.dismiss()
    toast("Please wait")
    let response = await axios.post(URL,values)
    toast.dismiss()
    toast(`News  "${values.title} " added successfully `)

  }


  return (
    <section className="add">
       <ToastContainer />
      <div className="container">
        <Formik
          initialValues={{
            title: '',
            date: '',
            image: '',
          }}
          validationSchema={schema}
          onSubmit={values => {
            add(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-group">
                <Field name="title" placeholder="Title" />
                <ErrorMessage name="title" />
              </div>

              <div className="input-group">
                <Field name="date" placeholder="Date" />
                <ErrorMessage name="date" />
              </div>

              <div className="input-group">
                <Field name="image"  placeholder="Image URL " />
                <ErrorMessage name="image" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>

    </section>
  )
}
