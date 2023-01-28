import { Formik, Form, Field  ,ErrorMessage} from 'formik';
import * as Yup from 'yup';


import './index.scss'


const schema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  image: Yup.string().required('Required'),

});
export default function Index() {

  async function add (){

  }


  return (
    <section className="add">
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
