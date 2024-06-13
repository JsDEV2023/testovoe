/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'logo': '#0056b3',
        'yellow': '#ffdf80',
        'cyan': '#007bff',
        'body': '#fafafa',
        'custom-grey': '#6c757d',
        'custom-grey-link': '#868e96',
        'custom-blue-link': '#1262b3',
        'custom-ldark': '#212529',
        'custom-dgreen': '#0c5460',
        'custom-lgreen': '#d1ecf1',
        'border-grey': '#ced4da',
        'input-text': '#495057',
        'focus': '#80bdff'
      },
      borderColor: {
        'grey': 'rgba(0, 0, 0, .07)',
      },
      maxWidth: {
        'container': '1140px',
      }, 
      borderWidth: {
        '1': '1px'
      },
      boxShadow: {
        'input': '0 0 0 .2rem rgb(0 123 255 / .25)'
      }, 
      height: {
        'full125' : '125%'
      },
      screens: {
        'sssm': '280px',
        'ssm': '420px'
      }
    },
  },
  plugins: [],
}

