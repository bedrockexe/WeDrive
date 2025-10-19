import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import FormField from '../FormField.jsx'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import axios from "axios";
import { Link } from 'react-router-dom'

const formSchema = z
    .object({
        firstName: z.string().min(2, 'First name must be at least 2 characters'),
        lastName: z.string().min(2, 'Last name must be at least 2 characters'),
        email: z.string().email('Please enter a valid email address'),
        phone: z
            .string()
            .regex(/^\+?[0-9\s\-()]{8,}$/, 'Please enter a valid phone number'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onBlur',
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log(data)
        setIsSubmitting(false)
        try {
            const response = await axios.post('http://localhost:5000/register',data);
            const responseMessage = response.data.message;
            alert(responseMessage);
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                    label="First Name"
                    name="firstName"
                    register={register}
                    error={errors.firstName?.message}
                    type="text"
                    placeholder="John"
                />
                <FormField
                    label="Last Name"
                    name="lastName"
                    register={register}
                    error={errors.lastName?.message}
                    type="text"
                    placeholder="Doe"
                />
            </div>
            <FormField
                label="Email Address"
                name="email"
                register={register}
                error={errors.email?.message}
                type="email"
                placeholder="john.doe@example.com"
            />
            <FormField
                label="Phone Number"
                name="phone"
                register={register}
                error={errors.phone?.message}
                type="tel"
                placeholder="+1 (555) 123-4567"
            />
            <div className="relative">
                <FormField
                    label="Password"
                    name="password"
                    register={register}
                    error={errors.password?.message}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                />
                <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-400 hover:text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
            </div>
            <div className="relative">
                <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    register={register}
                    error={errors.confirmPassword?.message}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                />
                <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-400 hover:text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? (
                        <EyeOffIcon size={20} />
                    ) : (
                        <EyeIcon size={20} />
                    )}
                </button>
            </div>
            <div>
                <motion.button
                    whileHover={{
                        scale: 1.02,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? (
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    ) : null}
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </motion.button>
            </div>
            <div className="text-sm text-center">
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link
                        to="/"
                        className="font-medium text-green-600 hover:text-green-500"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    )
}

export default RegistrationForm
