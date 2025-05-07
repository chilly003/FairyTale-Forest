import bookintrobackground from "../assets/images/bookintro/bookintrobackground.webp";

const BookLoading = () => {

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bookintrobackground})` }}
    >
      <div className="text-[9vh] font-bazzi text-outline-sm text-center xl:mt-24">
        <h1 className="">동화숲에서 동화를 가져오고 있어요.</h1>
        <h1 className="">5~10분 정도 걸리니 기다려 주세요!</h1>
      </div>

      <div className="flex justify-center items-center mt-[4vw] relative animate-bounce-infinite3 ">

      </div>

      {/* <div className="flex justify-center items-center">
        <img
          src={kidbook}
          alt="kidbook"
          className="w-[20vw] animate-fly"
        />
      </div> */}
    </div>
  );
};

export default BookLoading;
