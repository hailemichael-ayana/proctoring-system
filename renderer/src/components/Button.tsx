interface ButtonType{
    text:string
    className?: string
    onClick?:()=>void | Promise<void>
}
const Button:React.FC<ButtonType> = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} flex items-center justify-center px-15 py-3 rounded-lg cursor-pointer `}>{text}</button>
  )
}

export default Button