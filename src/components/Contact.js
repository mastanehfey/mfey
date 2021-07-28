import React from 'react'

export default function Contact() {
    function validate(target, pattern){

        if(target.value.trim() === ''){
            showErrorBox(target)
            target.nextElementSibling.textContent = 'This field is required';
        }
        else if(target.value.trim() !== '' && pattern === 'email'){
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(target.value)){
                removeErrorBox(target)
            }else{
                target.nextElementSibling.textContent = 'Provide a valid email address';
                showErrorBox(target)
            }
        }
        else{
            removeErrorBox(target)
        }
    }

    function showErrorBox(target){
        target.classList.add('error-field');
        target.nextElementSibling.classList.remove('hidden');
    }
    function removeErrorBox(target){
        target.classList.remove('error-field');
        target.nextElementSibling.classList.add('hidden');
    }

    window.addEventListener('DOMContentLoaded',()=>{        
        const submitBtn = document.querySelector('.send-btn')
        submitBtn.addEventListener('click', (e)=> submitForm(e))
        submitBtn.addEventListener('keydown', (e)=> submitForm(e))
    })
    function submitForm(e){
        e.preventDefault()
        let toValidateInputs = document.querySelectorAll('.shouldValidate')
        toValidateInputs.forEach(item =>{
            let pattern = item.getAttribute('data-pattern')
            validate(item,pattern)
        })
        let errors = document.querySelectorAll('.error-field')
        //no errors - submit form
        if(errors.length === 0){
            alert('Form has submitted!')
        }
    }
    //action="contactForm.php"
    return (
        <section id="contact" aria-label="contact section"> 
        <div className="container">
            <span className="bold">Contact</span>
            <div className="inner-education">
                <h2>Let’s work together</h2>
                <form className="contact-form" method="post" name="contactform" noValidate>
                    <div className="input-group">
                        <input type="text" name="name" autoComplete="name" id="name" placeholder="Name" aria-label="enter name"/>
                    </div>
                    <div className="input-group">
                        <input type="email" data-pattern="email" name="email" id="email" autoComplete="email" placeholder="E-mail*" aria-label="enter email" required aria-required="true" onBlur={(e)=> validate(e.target,'email')} className="shouldValidate"/>
                        <div className="error-msg hidden"></div>
                    </div>
                    {/* <div className="input-group">
                        <input type="text" name="subject" id="subject" placeholder="Subject" aria-label="enter subject"/>
                    </div>
                    <div className="input-group">
                        <input type="text" name="heard" id="heard" placeholder="How did you hear about me?" aria-label="How did you hear about me?"/>
                    </div> */}
                    <div className="input-group strech">
                        <textarea data-pattern={null} type="text" name="message" id="message" placeholder="Message*" rows="5" required aria-required="true" aria-label="enter message" onBlur={(e)=> validate(e.target, null)} className="shouldValidate"/>
                        <div className="error-msg hidden"></div>
                    </div>
                    <div className="input-group">
                        <button className="btn send-btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}
