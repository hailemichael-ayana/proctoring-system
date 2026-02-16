import Button from "../components/Button"
import { useAuth } from "../context/AuthContext"

const Exam = () => {
  const{logout}= useAuth()
  return (
    <div>Exam

      <Button  onClick={logout} className="bg-[#1F7FCC]" text="Logout" />
    </div>
  )
}

export default Exam