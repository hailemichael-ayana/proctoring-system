interface ButtonType{
    text:string
    className?: string
    onClick?:()=>void | Promise<void>
    disabled?:boolean
}
const Button:React.FC<ButtonType> = ({text,className,onClick, disabled}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${className} flex items-center justify-center px-15 py-3 rounded-lg cursor-pointer hover:opacity-80 `}>{text}</button>
  )
}

export default Button