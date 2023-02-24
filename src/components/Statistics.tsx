import React from 'react';
import brand from '../images/icon-brand-recognition.svg'
import details from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

const cards = [ 
    { icon: brand, title: 'Brand Recognition', content: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'},
    { icon: details,title: 'Detailed Records', content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'},
    { icon: fully, title: 'Fully Customizable', content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
]
function Statistcs() {
    return (
        <div className='stats'>
            <div className='content'>
                <h1 className='title'>Advanced Statistics</h1>
                <p className='desc'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className='cards'>
                { cards.map ( item => { 
                    return (
                        <div className='card' key={item.title}>
                            <img src={item.icon} className='card-icon' alt='icon'/>
                            <p className='card-title'>{item.title}</p>
                            <p className='card-body'>{item.content}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )

}

export default Statistcs