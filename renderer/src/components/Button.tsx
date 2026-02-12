interface ButtonType{
    text:string
    className?: string
}
const Button:React.FC<ButtonType> = ({text,className}) => {
  return (
    <button className={`${className} flex items-center justify-center px-15 py-3 rounded-lg  `}>{text}</button>
  )
}

export default Button