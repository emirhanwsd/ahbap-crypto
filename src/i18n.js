import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  tr: {
    translation: {
      "Turkiye buyuk depremlerle sarsiliyor": "Türkiye büyük depremlerle sarsılıyor. 10.000 bina yıkıldı. Göcük altında 50.000 kişi var. 13 milyon insan yardım bekliyor. Aşağıdaki kriptopara cüzdan adresleri üzerinden yardımlarınızı iletebilirsiniz.",
      "Merhaba, Ahbap araciligi ile kripto bagis topluyoruz." : "Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para ile destek olmak için aşağıdaki adresleri kullanabiliriz.",
      "Toplanan Bagis Miktari": "Toplanan Bağış Miktarı",
      "Bakiye": "Bakiye",
      "BNB Degeri": "BNB Değeri",
      "Bagis yapacaginiz kripto adresleri:": "Bağış yapacağınız kripto adresleri:",
      "Transfer Yapilirken Dikkat Edilmesi Gerekenler": "Transfer Yapılırken Dikkat Edilmesi Gerekenler",
      "Kripto Agi": "{{kripto}} Ağı",
      "Tum coinler destekleniyor fakat yollarken BEP20 agini secin": "Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.",
      "Hangi adrese ne kadar bagis yapildi?": "Hangi adrese ne kadar bağış yapıldı?",
      "Turkce": "Turkce",
      "Ingilizce": "Ingilizce"
    }
  },
  en: {
    translation: {
      "Turkiye buyuk depremlerle sarsiliyor": "Turkey is effected by destructive earthquakes. 10,000 buildings were collapsed. There are 50,000 people under rubble. 13 million people wait for help. You can send your help via the following cryptocurrency wallet addresses.",
      "Merhaba, Ahbap araciligi ile kripto bagis topluyoruz." : "Merhabalar, Türkiye’de yaşanan deprem afetine yardımcı olmak için Ahbap aracılığı ile kripto bağış topluyoruz. Bu bağışa kripto para ile destek olmak için aşağıdaki adresleri kullanabiliriz.",
      "Toplanan Bagis Miktari": "Toplanan Bağış Miktarı",
      "Bakiye": "Bakiye",
      "BNB Degeri": "BNB Değeri",
      "Bagis yapacaginiz kripto adresleri:": "Bağış yapacağınız kripto adresleri:",
      "Transfer Yapilirken Dikkat Edilmesi Gerekenler": "Transfer Yapılırken Dikkat Edilmesi Gerekenler",
      "Kripto Agi": "{{kripto}} Ağı",
      "Tum coinler destekleniyor fakat yollarken BEP20 agini secin": "Tüm coinler destekleniyor fakat yollarken BEP20 ağını seçin.",
      "Hangi adrese ne kadar bagis yapildi?": "Hangi adrese ne kadar bağış yapıldı?",
      "Turkce": "Turkce",
      "Ingilizce": "Ingilizce"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;