'use client'
import React from 'react'
import { motion } from 'framer-motion'
import RegistrationForm from './components/Register/RegistrationForm'
import { CarIcon } from 'lucide-react'
const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="flex justify-center">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center"
          >
            <CarIcon className="text-white" size={24} />
          </motion.div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our car rental service and get moving
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegistrationForm />
        </div>
      </motion.div>
    </div>
  )
}
export default RegisterPage