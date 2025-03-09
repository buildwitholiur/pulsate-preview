interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 right-0 w-full lg:w-[calc(100%-249px)] bg-custom-white h-[46px] py-[7px] px-5 border-b border-custom-gray-100 flex items-center z-40`}
    >
      <div className="w-full flex items-center justify-between lg:justify-end relative">
        <button className="w-[34px] h-[34px] absolute top-[22px] left-[-38px] hidden lg:block">
          <img src="/images/sidebar-toggle.svg" alt="sidebar toggle" />
        </button>

        <button
          onClick={toggleSidebar}
          className="lg:hidden bg-custom-blue-100 w-8 h-8 rounded-[10px] flex--center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-custom-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <button className="w-8 h-8 bg-custom-blue-100 rounded-[10px] flex--center">
            <img className="w-4.5 h-4.5" src="/images/lamp.svg" alt="lamp" />
          </button>

          <button
            type="button"
            className="flex items-center gap-[10px] py-1 px-[5px]"
          >
            <img
              className="w-6 h-6"
              src="/images/nav-avatar.svg"
              alt="User avatar"
            />

            <p className="flex-1">Token 22</p>

            <img
              className="w-4 h-4"
              src="/images/down-arrow.svg"
              alt="down arrow"
            />
          </button>

          <button className="w-8 h-8">
            <img src="/images/setting.svg" alt="setting" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
