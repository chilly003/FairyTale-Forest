import { useState } from "react";
import { useNavigate } from "react-router-dom";

import mainpage from "../assets/images/mainpage/mainpage.webp";
import BackButton from "../components/commons/BackButton";
import RightButton from "../assets/buttons/rightbutton.webp";
import RecAlert from "../assets/images/settingpage/recalert.webp";
import Mother from "../assets/images/settingpage/mother.webp";
import Father from "../assets/images/settingpage/father.webp";
import YetMother from "../assets/images/settingpage/yetmother.webp";
import YetFather from "../assets/images/settingpage/yetfather.webp";

// 목소리 선택 안하고 넘어가면 목소리 선택하라고 뜨기

function StartSettings() {
  const navigate = useNavigate();
  const [selectedParent, setSelectedParent] = useState<'mother' | 'father' | null>(null);

  const handleMotherClick = () => {
    setSelectedParent('mother');
  };

  const handleFatherClick = () => {
    setSelectedParent('father');
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${mainpage})` }}
    >
      <BackButton to="/recinfo" />

      <div>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center w-[95vw] max-w-[1800px] lg:w-[60vw] md:mt-[3vw]">
          <div className="relative w-full">
            <img src={RecAlert} alt="경고안내문" className="w-full h-auto" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-[8vh] font-bazzi text-center text-outline-ss mt-4">
                녹음하는 사람은 누구인가요?
              </h1>
              
              <div className="flex justify-center items-center gap-5">
                <button 
                  className="hover:scale-105 transition-transform"
                  onClick={handleMotherClick}
                >
                  <img
                    src={selectedParent === 'mother' ? Mother : YetMother}
                    alt="엄마"
                    className="xl:w-[20vw] xl:max-w-[400px] tablet2560:w-[25vw] tablet2560:max-w-[600px] w-[25vw] h-auto"
                  />
                </button>
                <button 
                  className="hover:scale-105 transition-transform"
                  onClick={handleFatherClick}
                >
                  <img
                    src={selectedParent === 'father' ? Father : YetFather}
                    alt="아빠"
                    className="xl:w-[20vw] xl:max-w-[400px] tablet2560:w-[25vw] tablet2560:max-w-[600px] w-[25vw] h-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 다음 버튼 */}
      <div className="absolute w-[15vw] max-w-[300px] right-0 mr-[10vh] top-[40vh]">
        <button onClick={() => navigate("/voicerec")}>
          <img src={RightButton} alt="넘어가기" />
        </button>
      </div>
    </div>
  );
}

export default StartSettings;
