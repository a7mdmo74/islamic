// Generated by https://quicktype.io

export interface Salat {
  code: number;
  status: string;
  data: Data;
}

export interface Data {
  timings: { [key: string]: string };
  date: DateClass;
  meta: Meta;
}

export interface DateClass {
  readable: string;
  timestamp: string;
  hijri: Hijri;
  gregorian: Gregorian;
}

export interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: GregorianWeekday;
  month: GregorianMonth;
  year: string;
  designation: Designation;
}

export interface Designation {
  abbreviated: string;
  expanded: string;
}

export interface GregorianMonth {
  number: number;
  en: string;
}

export interface GregorianWeekday {
  en: string;
}

export interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: HijriWeekday;
  month: HijriMonth;
  year: string;
  designation: Designation;
  holidays: any[];
}

export interface HijriMonth {
  number: number;
  en: string;
  ar: string;
}

export interface HijriWeekday {
  en: string;
  ar: string;
}

export interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: { [key: string]: number };
}

export interface Method {
  id: number;
  name: string;
  params: Params;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Params {
  Fajr: number;
  Isha: string;
}
// ==================================================== \\
// Generated by https://quicktype.io

export interface Quran {
  ayahs: Ayahs;
  surahs: Surahs;
  sajdas: Sajdas;
  rukus: HizbQuarters;
  pages: HizbQuarters;
  manzils: HizbQuarters;
  hizbQuarters: HizbQuarters;
  juzs: HizbQuarters;
}

export interface Ayahs {
  count: number;
}

export interface HizbQuarters {
  count: number;
  references: HizbQuartersReference[];
}

export interface HizbQuartersReference {
  surah: number;
  ayah: number;
}

export interface Sajdas {
  count: number;
  references: SajdasReference[];
}

export interface SajdasReference {
  surah: number;
  ayah: number;
  recommended: boolean;
  obligatory: boolean;
}

export interface Surahs {
  count: number;
  references: SurahsReference[];
}

export interface SurahsReference {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: RevelationType;
}

export enum RevelationType {
  Meccan = 'Meccan',
  Medinan = 'Medinan',
}

// ==================================================== \\

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
  edition: Edition;
}

export interface Ayah {
  number: number;
  audio: string;
  audioSecondary: string[];
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction: null;
}
