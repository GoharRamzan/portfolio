import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form)
        emailjs.sendForm('service_581vcl8', 'template_1252sae', form, 'CBQ5HW2wSzIlYLcfY')
            .then((result) => {
                setFormStatus('Message sent successfully!');
                form.reset();
            }, (error) => {
                setFormStatus('Failed to send message. Please try again later.');
            });
    };
    return (
        <motion.section
            id="contact"
            className="bg-gray-900 text-white py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400">Contact Me</h2>
                <div className="flex justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                            />

                            
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-400 hover:bg-teal-500 text-white p-3 rounded-lg transition-colors duration-300"
                        >
                            Send Message
                        </button>
                        {formStatus && (
                            <p className="mt-4 text-center text-teal-400">{formStatus}</p>
                        )}
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;