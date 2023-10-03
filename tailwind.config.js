/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], 
  theme: {
    extend: {
      boxShadow:{
        '4xl': ' 0px 5px 15px rgba(0, 0, 0, 0.35)'
      },
      fontFamily:{
        mullish:["Mulish","sans-serif"]
      },
      colors:{
        deepBlue: "#02042a",
        greishBlue: "#181c2e",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenlight:"#61cea6",
        greenText:"#818597",
        lightGray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray2:"#525a76",
        cyan_green:"#61cea6"
      }
    },
  },
  plugins: [],
}

