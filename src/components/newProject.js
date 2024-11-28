import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

export const NewProject = () => {
    const navigate = useNavigate();
    const [mergedFiles, setMergedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const handleFormData = async (values) => {  

        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('author', values.author);
        formData.append('date', values.date);
        formData.append('domain', values.domain);
        formData.append('techStack', values.techStack);
        formData.append('desc', values.desc);
        formData.append('giturl', values.giturl);
        formData.append('weburl', values.weburl);
        values.images.forEach((image)=>{
            formData.append('images', image);
        });

        try {
            
            const response = await fetch('http://localhost:5000/api/project/new', {
                method: 'POST',
                credentials: 'include',
                body: formData
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.error('Response is not ok: ', errorText);
            }

            const data = await response.json();
            alert(data.message);

            navigate('/home');


        } catch (error) {
            console.log('Error occured in catch part of NewProject Component: ', error);
        }
    }

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100' style={{ marginTop: "250px" }}>
            <div className='card p-4 shadow' style={{ width: '150%', maxWidth: '600px' }}>

                <h2 className='text-center mb-4'>Project Details</h2>

                <Formik
                    initialValues={{
                        title: '',
                        author: '',
                        date: '',
                        domain: '',
                        techStack: '',
                        desc: '',
                        giturl: '',
                        weburl: '',
                        images: []
                    }}

                    validationSchema={yup.object({
                        title: yup.string().required('Title is required'),
                        author: yup.string().required('Author is required'),
                        date: yup.string().required('Date is required'),
                        domain: yup.string().required('Domain is required'),
                        // techStack: yup.string().required('Tech Stack is required'),
                        desc: yup.string().required('Description is required'),
                        giturl: yup.string().matches(
                            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                            'Enter correct url!'
                        ).required('GitHub URL is required'),
                    })}

                    onSubmit={handleFormData}
                >
                    {({ setFieldValue }) => {

                        const removeSelectedFile = (index) => {

                            const newMergedFiles = mergedFiles.filter((_, i) => i !== index);
                            const newFileNames = fileNames.filter((_, i) => i !== index);
                            setMergedFiles(newMergedFiles);
                            setFileNames(newFileNames);
                            setFieldValue('images', newMergedFiles);
                        };

                        return (

                            <Form encType='multipart/form-data'>
                                <div className='mb-3'>
                                    <label htmlFor='title' className='form-label'>Title*</label>
                                    <Field name='title' id='title' type='text' className='form-control' placeholder='Enter project title' />
                                    <ErrorMessage name='title' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='author' className='form-label'>Author*</label>
                                    <Field name='author' id='author' type='text' className='form-control' placeholder='Enter author name' />
                                    <ErrorMessage name='author' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='date' className='form-label'>Adding On*</label>
                                    <Field name='date' id='date' type='date' className='form-control' placeholder="Enter today's date" />
                                    <ErrorMessage name='date' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='domain' className='form-label'>Domain*</label>
                                    <Field name='domain' id='domain' as='select' className='form-control'>
                                        <option value='' label='-select a domain-'></option>
                                        <option value='web' label='Web Development'></option>
                                        <option value='ml' label='Machine Learning'></option>
                                        <option value='app' label='App Development'></option>
                                        <option value='iot' label='IOT'></option>
                                        <option value='ai' label='Artificial Intelligence'></option>
                                        <option value='blockchain' label='Blockchain'></option>
                                        <option value='cyber' label='Cyber Security'></option>
                                        <option value='other' label='Other'></option>
                                    </Field>
                                    <ErrorMessage name='domain' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='techStack' className='form-label'>Tech used</label>
                                    <Field name='techStack' id='techStack' type='text' className='form-control' placeholder='Enter tech stack used' />
                                    <ErrorMessage name='techStack' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='desc' className='form-label'>Description*</label>
                                    <Field name='desc' id='desc' as='textarea' className='form-control' rows='4' placeholder='Enter project description here...' />
                                    <ErrorMessage name='desc' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='giturl' className='form-label'>GitHub URL*</label>
                                    <Field name='giturl' id='giturl' type='text' className='form-control' rows='4' placeholder='Enter GitHub link' />
                                    <ErrorMessage name='giturl' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='weburl' className='form-label'>Website URL</label>
                                    <Field name='weburl' id='weburl' type='text' className='form-control' rows='4' placeholder='Enter Live website link' />
                                    <ErrorMessage name='weburl' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='images' className='form-label'>Upload Images: </label>
                                    <input name='images' id='images' type='file' className='form-control' multiple
                                        style={{display: 'none'}}
                                        onChange={(event) => {
                                            const files = Array.from(event.currentTarget.files);
                                            setMergedFiles((prevFiles) => [...prevFiles, ...files]);
                                            setFileNames((prevNames) => [...prevNames, ...files.map((file) => file.name)])
                                            setFieldValue('images', [...mergedFiles, ...files]);
                                        }}
                                    />
                                    <button type='button' className='btn btn-primary' style={{marginLeft: '5px'}} onClick={ () => document.getElementById('images').click() }>Choose Files</button>
                                    <ErrorMessage name='images' component='div' className='text-danger'></ErrorMessage>
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor='files' className='form-label'>Selected files:</label>

                                    <ul>
                                        {
                                            fileNames.map((name, index) => (
                                                <li key={index} style={{marginTop: '6px'}}>{name} <button type='button' style={{ fontSize: '13px', marginLeft: '5px', borderRadius: '4px' }} 
                                                    onClick={() => removeSelectedFile(index)}>Remove</button> </li>
                                            ))
                                        }
                                    </ul>

                                </div>

                                <button type="submit" className="btn btn-success w-100 mb-3">Upload</button>


                            </Form>
                        )

                    }}
                </Formik>
            </div>
        </div>
    )
};
