import { ReactNode } from "react";

const UnlockCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="unlock__card unlock__card--shadow w-full h-auto p-[2px] rounded-[30px]">
      <div className="w-full h-full bg-custom-white rounded-[30px] p-3">
        <div className="unlock__card w-full h-full p-[1px] rounded-[20px]">
          <div className="w-full h-full bg-custom-white rounded-[20px] py-[26px] px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockCard;
