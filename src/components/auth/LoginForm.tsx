"use client";
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const RequiredIndicator = () => (
        <span className="text-primary ml-1">*</span>
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            try {
                setIsSubmitting(true);
                // Handle successful form submission here
                console.log('Form submitted:', formData);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (formData.rememberMe) {
                    localStorage.setItem('rememberedEmail', formData.email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                
            } catch (error) {
                console.error('Login error:', error);
                setErrors({
                    submit: 'Failed to login. Please try again.'
                });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold text-center ">Login</h2>
            <p className="text-sm text-fontColor-dark text-center mb-6">Welcome back!</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fontColor mb-1">
                        Email<RequiredIndicator />
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example.gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fontColor-dark ${
                            errors.email ? 'border-primary' : 'border-fontColor-light'
                        }`}
                        autoComplete="email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-primary">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-fontColor mb-1">
                        Password<RequiredIndicator />
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fontColor-dark ${
                                errors.password ? 'border-primary' : 'border-fontColor-light'
                            }`}
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-primary">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary focus:ring-fontColor-dark border-fontColor-light rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-fontColor-dark">
                            Remember me
                        </label>
                    </div>
                    <a
                        href="#"
                        className="text-sm text-fontColor-dark hover:text-primary-hover transition duration-200"
                    >
                        Forgot Password?
                    </a>
                </div>

                {errors.submit && (
                    <p className="text-sm text-primary text-center">{errors.submit}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-hover transition duration-200 mt-6 disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>

                <p className="text-sm text-center text-fontColor-dark mt-4">
                    Don&apos;t have an account?{' '}
                    <a href="/register" className="text-primary hover:text-primary-hover transition duration-200">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;