import ahbap from "../assets/ahbap.png";

const Home = () => {
  return (
    <>
      <header className="h-[589px] bg-black text-white flex flex-col items-center justify-center text-center">
        <img src={ahbap} alt="" />

        <h1 className="text-2xl font-semibold mt-11 max-w-7xl">
          Türkiye büyük depremlerle sarsılıyor. 10.000 bina yıkıldı. Göcük
          altında 50.000 kişi var. 13 milyon insan yardım bekliyor. Aşağıdaki
          kriptopara cüzdan adresleri üzerinden yardımlarınızı iletebilirsiniz.
        </h1>

        <h2 className="text-xl mt-8 max-w-4xl">
          Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için
          Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para ile
          destek olmak için aşağıdaki adresleri kullanabiliriz.
        </h2>
      </header>
    </>
  );
};

export default Home;
