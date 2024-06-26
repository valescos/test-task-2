import AppleiPhone12 from "../assets/Apple-iPhone-12.png";
import AppleiPhoneXr from "../assets/Apple-iPhone-Xr.png";
import Realme8Pro from "../assets/Realme-8-Pro.png";
import SamsungGalaxyA72 from "../assets/Samsung-Galaxy-A72.png";
import SamsungGalaxyS21 from "../assets/Samsung-Galaxy-S21.png";
import XiaomiMi11Lite from "../assets/Xiaomi-Mi-11-Lite.png";

export const PHONES = [
  {
    model: "Apple iPhone 12",
    img: AppleiPhone12,
    manufacturer: "Apple",
    year: 2020,
    diagonal: "6,1",
    country: "Китай",
    meomory: "128 GB",
    refreshrate: "60 Гц",
    NFC: false,
    ESIM: true,
    wirelesscharger: true,
    price: "81990 ₽",
  },
  {
    model: "Xiaomi Mi 11 Lite",
    img: XiaomiMi11Lite,
    manufacturer: "Xiaomi",
    year: 2021,
    diagonal: "6,55",
    country: "Китай",
    meomory: "128 GB",
    refreshrate: "90 Гц",
    NFC: true,
    ESIM: true,
    wirelesscharger: false,
    price: "27490 ₽",
  },
  {
    model: "Samsung Galaxy A72",
    img: SamsungGalaxyA72,
    manufacturer: "Samsung",
    year: 2021,
    diagonal: "6,7",
    country: "Вьетнам",
    meomory: "128 GB",
    refreshrate: "90 Гц",
    NFC: true,
    ESIM: false,
    wirelesscharger: true,
    price: "32890 ₽",
  },
  {
    model: "Samsung Galaxy S21",
    img: SamsungGalaxyS21,
    manufacturer: "Samsung",
    year: 2021,
    diagonal: "6,2",
    country: "Китай",
    meomory: "128 GB",
    refreshrate: "90 Гц",
    NFC: true,
    ESIM: false,
    wirelesscharger: true,
    price: "41990 ₽",
  },
  {
    model: "Apple iPhone Xr",
    img: AppleiPhoneXr,
    manufacturer: "Apple",
    year: 2021,
    diagonal: "6,1",
    country: "Вьетнам",
    meomory: "128 GB",
    refreshrate: "90 Гц",
    NFC: false,
    ESIM: true,
    wirelesscharger: true,
    price: "55000 ₽",
  },
  {
    model: "Realme 8 Pro",
    img: Realme8Pro,
    manufacturer: "OPPO",
    year: 2022,
    diagonal: "6,4",
    country: "Китай",
    meomory: "128 GB",
    refreshrate: "60 Гц",
    NFC: true,
    ESIM: false,
    wirelesscharger: false,
    price: "19990 ₽",
  },
];

export const PHONE_FEATURES = [
  {
    name: "manufacturer",
    translation: "Производитель",
  },
  {
    name: "year",
    translation: "год релиза",
  },
  {
    name: "diagonal",
    translation: "Диагональ экрана (дюйм)",
  },
  {
    name: "country",
    translation: "Страна-производитель",
  },
  {
    name: "meomory",
    translation: "Объем памяти",
  },
  {
    name: "refreshrate",
    translation: "Частота обновления экрана",
  },
  {
    name: "NFC",
    translation: "NFC",
  },
  {
    name: "ESIM",
    translation: "Поддержка eSIM",
  },
  {
    name: "wirelesscharger",
    translation: "Поддержка беспроводной зарядки",
  },
  {
    name: "price",
    translation: "Стоимость",
  },
];
