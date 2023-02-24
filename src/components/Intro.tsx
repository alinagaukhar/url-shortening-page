import { useEffect, useState, useRef } from 'react';
import heroimg from '../images/illustration-working.svg'
import { useFormik } from 'formik';
import shortenUrl from '../services/service'
import Card from './Card';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export interface UrlType {
    // "code": string;
    // "short_link": string;
    "full_short_link": string;
    // "short_link2": string;
    // "full_short_link2": string;
    // "short_link3": string;
    // "full_short_link3": string;
    // "share_link": string;
    // "full_share_link": string;
    "original_link": string;
}

function Intro() {
    const [links, setLinks] = useState<Array<UrlType>>([]);
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [instantError, setInstantError] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        fetchLinks();
    }, []);

    const notify = (msg : string) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    const validate = (url : string) => {
        
        const regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
        const inp = inputRef.current
        if (!url) {
          setErrorMessage("Url is required!")
          setInstantError(true)
          if (inp) {
                inp.style.border = "3px solid red"
          }
          return false
        } else if (!regex.test(url)) {
          setErrorMessage("Invalid Url!")
          setInstantError(true)
          if (inp) {
            inp.style.border = "3px solid red"
          }
          return false
        }
        
        setInstantError(false)
        if (inp) {
            inp.style.border = "none"
        }
        
        return true
    }

    const fetchLinks = async() => {
        const value = localStorage.getItem("links")
        if (value) {
            const links = JSON.parse(value)
            if (links) setLinks(links);
        }
        
    }

    const handleErrors = async(err : string) => {
        notify(err)
    }
    const handleSubmit = async(values: {url: string}) => {
        const response = await shortenUrl(values.url)
        
        if (!validate(values.url)){
            return
        }
        if (!(response.status === 200)) {
            handleErrors("Something went wrong")
            return
        }
        

        const { shortUrl, destination } = response.data
        
        const linkExists = links.find((link) => link.original_link === destination)

        if(linkExists) {
            setErrorMessage("This link already exists!")
            setInstantError(true)
            if (inputRef.current) {
                inputRef.current.style.border = "3px solid red"
            }
            return
        }
        const result = {
            full_short_link: shortUrl, 
            original_link: destination 
        }
        setLinks([result, ...links]);
        localStorage.setItem("links", JSON.stringify([result, ...links]))
        
    }

    const formik = useFormik({
        initialValues: {
          url: '',
        },
        onSubmit: handleSubmit,
    });
    return (
        <div className='intro'>
            <div className='content'>
                <h1 className='title'>More than just shorter links</h1>
                <p className='desc'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className='btn btn-primary'>Get started</button>
            </div>
            <span className='img-wrapper'>
                    <img src={heroimg} alt="" aria-hidden="true"/>
            </span>

            
            <form className='shorten-url-form' onSubmit={formik.handleSubmit} >
                <input
                        ref={inputRef}
                        id="url"
                        name="url"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={(e) => { 
                            formik.handleBlur(e.target.value)
                            validate(e.target.value) }}
                        value={formik.values.url}
                        placeholder='Shorten a link here...'
                    />
                    <ToastContainer />
                <button className='btn btn-primary' type='submit' >Shorten it!</button>
                {instantError ? <p className='error-message'>{errorMessage}</p> : <></>}
            </form> 
            <div className='url-cards'>
                {links.map( link => {
                    return (
                        <Card  {...link}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Intro 