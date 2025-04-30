import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/buttons/backicon.webp";

interface BackButtonProps {
  to?: string;
  onClick?: () => void;
}

function BackButton({ to, onClick }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button 
      className="absolute z-10 top-[5vh] left-[5vh]" 
      onClick={handleClick}
    >
      <img src={BackIcon} alt="뒤로가기" className="w-[17vh] h-[20vh]" />
    </button>
  );
}

export default BackButton;
