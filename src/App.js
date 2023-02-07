import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import Home from "./pages/Home";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title:
          "Turkey is being effected by destructive earthquakes. 10,000 buildings were collapsed. There are 50,000 people under rubble. 13 million people are waiting for help. You can send your help via the following cryptocurrency wallet addresses.",
        subTitle:
          "Hello, we are collecting crypto donations through Ahbap to help earthquake victims in Turkey. You can use the addresses below to donate cryptocurrency to support this cause.",
        totalDonation: "Total Amount of Donation",
        donationAdresses: "Bağış Yapabileceğiniz Kripto Adresleri",
        donationAlert:
          "Transferi gerçekleştirmeden önce, mutlaka orjinal tweet üzerinden adresi kopyalayın. Başka cüzdan bilgilerine güvenmeyin.",
        donationTotalAlert: `Burada belirtilen USD ve TRY karşılıkları, toplamda 3 cüzdan adresi üzerindeki toplam tahmini değeri gösteriyor. TRY değeri, doğrudan USD'deki değerin güncel kura göre çevirimiyle elde ediliyor. Buradaki değerler her 30 saniyede bir güncelleniyor, son veriye ulaşmak için sayfayı yenilemeniz gerekebilir.<br/><br/>Toplamda toplanan tutar hakkında daha ayrıntılı bilgi edinmek istiyorsanız Nansen üzerinden gerçek zamanlı takip edebilirsiniz: <a class="text-brand font-medium hover:underline" href="https://portfolio.nansen.ai/dashboard/APE-JBS8U7">https://portfolio.nansen.ai/dashboard/APE-JBS8U7</a>`,
        balance: "Balance",
        bnbValue: "BNB Value",
        thingsToConsider: "Things to Consider While Making a Transfer",
        cryptoNetwork: "{{crypto}} Network",
        cryptoNetworkWarning:
          "All coins are supported but select BEP20 network while sending.",
        whichAddress: "How much was donated to which address?",
        pagination: "{{page}}. Page of {{totalPage}} Pages",
        turkish: "Turkish",
        english: "English",
      },
    },
    tr: {
      translation: {
        title:
          "Türkiye büyük depremlerle sarsılıyor. 10.000 bina yıkıldı. Göcük altında 50.000 kişi var. 13 milyon insan yardım bekliyor. Aşağıdaki kriptopara cüzdan adresleri üzerinden yardımlarınızı iletebilirsiniz.",
        subTitle:
          "Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para ile destek olmak için aşağıdaki adresleri kullanabiliriz.",
        totalDonation: "Toplanan Bağış Miktarı",
        donationAdresses: "Bağış Yapabileceğiniz Kripto Adresleri",
        donationAlert:
          "Transferi gerçekleştirmeden önce, mutlaka orjinal tweet üzerinden adresi kopyalayın. Başka cüzdan bilgilerine güvenmeyin.",
        donationTotalAlert: `Burada belirtilen USD ve TRY karşılıkları, toplamda 3 cüzdan adresi üzerindeki toplam tahmini değeri gösteriyor. TRY değeri, doğrudan USD'deki değerin güncel kura göre çevirimiyle elde ediliyor. Buradaki değerler her 30 saniyede bir güncelleniyor, son veriye ulaşmak için sayfayı yenilemeniz gerekebilir.<br/><br/>Toplamda toplanan tutar hakkında daha ayrıntılı bilgi edinmek istiyorsanız Nansen üzerinden gerçek zamanlı takip edebilirsiniz: <a class="text-brand font-medium hover:underline" href="https://portfolio.nansen.ai/dashboard/APE-JBS8U7">https://portfolio.nansen.ai/dashboard/APE-JBS8U7</a>`,
        balance: "Bakiye",
        bnbValue: "BNB Değeri",
        thingsToConsider: "Transfer Yapılırken Dikkat Edilmesi Gerekenler",
        cryptoNetwork: "{{crypto}} Ağı",
        cryptoNetworkWarning:
          "Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.",
        whichAddress: "Hangi adrese ne kadar bağış yapıldı?",
        pagination: "{{totalPage}} sayfa içinden {{page}}. Sayfa",
        turkish: "Türkçe",
        english: "İngilizce",
      },
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
