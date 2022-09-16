import { createI18n } from 'vue-i18n';
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";

export default createI18n({
    locale: "en",
    fallbackLocale: "ru",
    messages: {
        en,
        ru
    },
    numberFormats: {
        en: {
            currency: {
                style: "currency",
                currency: "USD"
            }
        },
        ru: {
            currency: {
                style: "currency",
                currency: "RUB"
            }
        },
    }
});