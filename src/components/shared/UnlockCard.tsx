import { Link } from "react-router";

interface ListItem {
  icon: string;
  text: string;
}

export interface UnlockCardProps {
  title: string;
  lockIcon: string;
  listItems: ListItem[];
  buttonText: string;
  buttonIcon: string;
  buttonLink: string;
}

const UnlockCard = ({
  title,
  lockIcon,
  listItems,
  buttonText,
  buttonIcon,
  buttonLink,
}: UnlockCardProps) => {
  return (
    <div className="unlock__card unlock__card--shadow w-full h-auto p-[2px] rounded-[30px]">
      <div className="w-full h-full bg-custom-white rounded-[30px] p-3">
        <div className="unlock__card w-full h-full p-[1px] rounded-[20px]">
          <div className="w-full h-full bg-custom-white rounded-[20px] py-[26px] px-6">
            {/* Header Section */}
            <div className="flex items-center gap-4">
              <img className="w-[50px] h-auto" src={lockIcon} alt="lock" />
              <h3 className="font--18">{title}</h3>
            </div>

            {/* List Section */}
            <ul className="ml-3 mt-[26px] space-y-5 md:space-y-[38px]">
              {listItems.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-5">
                    <img className="w-5 h-5" src={item.icon} alt={item.text} />
                    <p className="font--16">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Button Section */}
            <Link
              to={buttonLink}
              className="custom__btn custom__btn--secondary w-full mt-[27px]"
            >
              <img
                className="w-fit h-[18px]"
                src={buttonIcon}
                alt="button icon"
              />
              <span>{buttonText}</span>
              <img
                className="w-5 h-5"
                src="/images/arrow2-right.svg"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockCard;
