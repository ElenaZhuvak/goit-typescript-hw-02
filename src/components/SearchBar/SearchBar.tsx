import { Field, Form, Formik, FormikHelpers } from "formik"
import css from './SearchBar.module.css'
import { FC } from "react";

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar : FC<SearchBarProps> = ({onSubmit}) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
        onSubmit(values.query)
        actions.resetForm()
    }

  return (
    <div className={css.searchContainer}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <Field className={css.input} name='query' placeholder='Search images and photos'></Field>
                <button className={css.btn} type='submit'>Search</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SearchBar