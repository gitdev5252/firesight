export default function StartSessionPage() {
  const subData = [
    {
      icon: "/images/icons/green-pin.svg",
      title: "Pin to Toolbar",
    },
    {
      icon: "/images/icons/green-pin.svg",
      title: "Pin to Startbar",
    },
    {
      icon: "/images/icons/green-download.svg",
      title: "Save as Desktop App",
    },
  ];
  return (
    <div className="w-full flex relative md:px-14 px-4 flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="green-shine-session-mobile md:hidden block"></div>
        <div className="green-shine-session md:block hidden"></div>
        <div className="green-shine-session-small md:block hidden"></div>
        <div className="green-shine-session-2nd-small md:block hidden"></div>
        <div className="green-shine-session-3rd-small md:block hidden"></div>
      </div>
      <div className="flex flex-wrap p-[50px] -top-[20px] text-white items-center justify-between border bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] w-full relative">
        <div className="md:w-5/9 w-full pt-[30px] pr-[100px]">
          <h2 className="uppercase text-[35px] font-bold">
            smarter calls,{" "}
            <span className="bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent">
              faster decisions
            </span>
          </h2>
          <p className="text-[16px] pt-[40px]">
            Sessions is an AI-Native browser-based video conferencing platform
            and your real-time decision co-pilot. Move from discussion to
            decision faster with Firesight | Sessions.
          </p>
          <div className="flex flex-wrap mt-[50px] gap-4">
            <button
              className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold"
              style={{
                border: "1px solid rgba(15, 251, 73, 0.59)",
                borderRadius: "55px",
                background:
                  "linear-gradient(88deg, rgba(3, 139, 152, 0.06) 5.46%, rgba(15, 251, 73, 0.06) 71.42%)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
            >
              <img
                src="/images/icons/camera.svg"
                alt="New Session"
                className="pr-2"
              />
              New Session
            </button>
            <button
              className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold"
              style={{
                border: "1px solid #262933",
                borderRadius: "55px",
                background: "rgba(8, 11, 22, 0.50)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
            >
              <img
                src="/images/icons/link.svg"
                alt="New Session"
                className="pr-2"
              />
              Enter Session Link
            </button>
          </div>
          <div className="border border-b-[1px] border-[rgba(255,255,255,0.1)] mt-[45px] w-full"></div>
          <div className="flex flex-wrap mt-[50px] gap-4">
            {subData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 ">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
                <span className="text-[14px]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0.1)] px-[30px] pt-[30px] pb-[10px] md:w-4/9 w-full rounded-[20px]"></div>
      </div>
      <div
        style={{
          background: 'url("/images/mobile/sessions-show-mobile.svg")',
          backgroundSize: "contain",
        }}
        className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
      ></div>
    </div>
  );
}
