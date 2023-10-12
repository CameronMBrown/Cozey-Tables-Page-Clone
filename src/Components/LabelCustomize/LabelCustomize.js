import "./LabelCustomize.css"

function LabelCustomize() {
   return ( 
      <span className="product__customize">
      Customize
      <svg 
         className="product__customize--arrow" 
         viewBox="0 0 32 32" 
         width="32" 
         height="32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
            <path 
               d="M18.5 6L17.07 7.393L24.65 15H4.5V17H24.65L17.07 24.573L18.5 26L28.5 16L18.5 6Z"
               fill="#69A2FF"
            ></path>
      </svg>
   </span>
   );
}

export default LabelCustomize;