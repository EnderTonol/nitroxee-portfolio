/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fihover': ['FIHover-Display', 'sans-serif'],
        'Xwide': ['Xwide-3','sans-serif'],
        'poppins': ["Poppins", "sans-serif"],
        'poppins-bold': ["Poppins-Bold", "sans-serif"],
      },
      colors: {
        'transparent': 'transparent',
        'customgreen': '#62ec2b',
        'black': '#000000',
        'white': '#ffffff',
        'blue': '#007bff',
        'indigo': '#6610f2',
        'purple': '#6f42c1',
        'pink': '#e83e8c',
        'red': '#dc3545', 
       'orange': '#fd7e14',
       'yellow': '#ffc107',
       'green': '#28a745',
       'greenyellow': '#B2EC2B',
       'teal': '#20c997',
       'cyan': '#17a2b8',
       'gray': '#6c757d',
       'gray-dark': '#343a40',
       'primary': '#007bff',
       'secondary': '#6c757d',
      'success': '#28a745',
      'info': '#17a2b8',
      'warning': '#ffc107',
      'danger': '#dc3545',
      'light': '#f8f9fa',
      'dark': '#343a40',
      'gray-light': '#e9ecef',
      'gray-lighter': '#dee2e6',
      'gray-dark': '#343a40',
      'gray-darker': '#212529',  
      }
    },
  },
  plugins: [],
}

