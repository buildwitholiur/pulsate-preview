const NotificationType = () => {
  return (
    <div className="bg-custom-gray-150 w-full 2xl:max-w-[404px] rounded-[20px] p-5">
      <div className="flex items-center justify-center text-center md:text-left gap-2 bg-custom-gray-25 py-[5px] px-4 rounded-[50px]">
        <img
          className="w-6 h-6"
          src="/images/notification-type.svg"
          alt="notification type"
        />

        <p className="text-custom-black inline-block max-w-[150px] md:max-w-full">
          Your most successful notification type
        </p>
      </div>

      <div className="mt-[15px] space-y-[13.5px]">
        {/* Single Item */}
        <div className="flex items-center gap-[10px]">
          <p className="w-full max-w-[120px] md:max-w-[189px]">In-App</p>

          <div className="flex-1">
            <div className="relative bg-custom-gray-950 w-full h-12 rounded-[10px]">
              <p className="font-semibold text-custom-white/80 absolute top-1/2 -translate-y-1/2 left-[6px]">
                50%
              </p>

              <div className="w-[50%] h-full bg-custom-blue-700 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="flex items-center gap-[10px]">
          <p className="w-full max-w-[120px] md:max-w-[189px]">Feed</p>

          <div className="flex-1">
            <div className="relative bg-custom-gray-950 w-full h-12 rounded-[10px]">
              <p className="font-semibold text-custom-white/80 absolute top-1/2 -translate-y-1/2 left-[6px]">
                26%
              </p>

              <div className="w-[26%] h-full bg-custom-brand-800 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="flex items-center gap-[10px]">
          <p className="w-full max-w-[120px] md:max-w-[189px]">Push + Feed</p>

          <div className="flex-1">
            <div className="relative bg-custom-gray-950 w-[7px] h-12 rounded-[10px]">
              <p className="font-semibold text-custom-gray-850 absolute top-1/2 -translate-y-1/2 left-[15px]">
                0%
              </p>

              <div className="w-[0%] h-full bg-custom-brand-800 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="flex items-center gap-[10px]">
          <p className="w-full max-w-[120px] md:max-w-[189px]">In-App + Feed</p>

          <div className="flex-1">
            <div className="relative bg-custom-gray-950 w-[7px] h-12 rounded-[10px]">
              <p className="font-semibold text-custom-gray-850 absolute top-1/2 -translate-y-1/2 left-[15px]">
                0%
              </p>

              <div className="w-[0%] h-full bg-custom-brand-800 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="flex items-center gap-[10px]">
          <p className="w-full max-w-[120px] md:max-w-[189px]">Push</p>

          <div className="flex-1">
            <div className="relative bg-custom-gray-950 w-[7px] h-12 rounded-[10px]">
              <p className="font-semibold text-custom-gray-850 absolute top-1/2 -translate-y-1/2 left-[15px]">
                0%
              </p>

              <div className="w-[0%] h-full bg-custom-brand-800 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        {/* Single Item */}
      </div>
    </div>
  );
};

export default NotificationType;
