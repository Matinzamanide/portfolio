// Contact.jsx
import { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    toast.success('پیام شما با موفقیت ارسال شد!');
    setFormData({ name: '', email: '', message: '' });
  };

  const sendMessage=()=>{
    axios.post('https://portfolio.sarirniroo.ir/apis/api.php',formData);
  }
  return (
    <section className="py-12 px-4 bg-gray-900" id='contact'>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">تماس با من</h2>
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-blue-500" />
            <div>
              <p className="text-white">ایمیل:</p>
              <a href="mailto:matinzamanide@gmail.com" className="text-blue-500 hover:underline">
                matinzamanide@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-white">تلفن:</p>
              <a href="tel:+989911048097" className="text-green-500 hover:underline">
                8097 104 0991
              </a>
            </div>
          </div>
         
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 border border-gray-700 p-5 rounded-md">
          <div>
            <label className="block mb-2 ">نام</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">ایمیل</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">پیام</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            onClick={sendMessage}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            ارسال پیام
          </button>
        </form>
      </div>

<div className="flex justify-center mt-10 lg:justify-start space-x-6">
            <motion.a
              href="https://www.instagram.com/matinzamanioffical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-pink-600 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram size={30} />
            </motion.a>
              
            <motion.a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
              
            <motion.a
              href="https://github.com/matinzamanide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-black transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub size={30} />
            </motion.a>

            <motion.a
              href="https://t.me/Matinde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaTelegram size={30} />
            </motion.a>
          </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
}







