'use client'
import { 
    IconMailFilled,
    IconBrandLinkedin
} from '@tabler/icons-react'

export default function Contact() {

    return (
        <section id='Contact'>
            <p className="section--text-p1">Ponte en contacto</p>
            <h1 className="title">Contáctame</h1>
            <div className="contact--info-container">
                <div className="contact--info">
                    <IconMailFilled 
                        className='contact--icon'
                        width={32}
                        height={32}
                    />
                    <a href='mailto:bernacheamartin@outlook.com'>bernacheamartin@outlook.com</a>
                </div>
                <div className='contact--info'>
                    <IconBrandLinkedin 
                        className='contact--icon'
                        width={32}
                        height={32}
                    />
                    <a href='https://www.linkedin.com/in/martin-bernachea/' target='_blank'>LinkedIn</a>
                </div>
            </div>
        </section>
    )
}

