import { UrlType } from './Intro';
import { useRef } from 'react';


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const Card = (props : UrlType) => {
    const link = useRef<HTMLParagraphElement>(null)
    const button = useRef<HTMLButtonElement>(null)
    const handler = async() => {
        if (link.current) {
            navigator.clipboard.writeText(link.current.innerHTML);
            if (button.current) {
                button.current.innerHTML = 'Copied!'
                button.current.style.backgroundColor = 'hsl(257, 27%, 26%)'
                await delay(2000)
                button.current.innerHTML = 'Copy'
                button.current.style.backgroundColor = 'hsl(180, 66%, 49%)'
            }
        }
    }
    return (
        <div className='url-card'>
            <p className='long'>{props['original_link']}</p>
            <span>
            <p ref={link} className='short'>{props['full_short_link']}</p>
            <button ref={button} className='btn btn-primary btn-small' onClick={handler}>Copy</button>
            </span>
        </div>
    )
}

export default Card