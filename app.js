// ==========================================================================
// MAPOWANIE STATUSÓW
// ==========================================================================
const statusMap = {
  "Obowiązujący": "status-active",
  "Akt utracił moc": "status-repealed",
  "Znowelizowany": "status-amended",
  "Akt jednorazowy": "status-onetime"
};

// ==========================================================================
// BAZA DANYCH KDU Z ORYGINALNYMI IKONAMI
// ==========================================================================
const kduDb = {
  "2026": [
    { pos: 49, title: "Dekret z 24.02.2026 r. o organizacji arystokracji (znowelizowany)", date: "2026-09-11", status: "Obowiązujący", note: null, pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 48, title: "Ustawa z 26.08.2026 r. o szkolnictwie wyższym i nauce", date: "2026-08-26", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 47, title: "Ustawa z 25.08.2026 r. o wolnościach sumienia i wyznania oraz koronnym podatku religijnym", date: "2026-08-25", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 46, title: "Rozporządzenie Ministra Finansów z 24.08.2026 r. w sprawie wykazu koronnych spółek handlowych, nad którymi kontrolę sprawują Skarbiec Koronny lub podmioty bezpośrednio lub pośrednio kontrolowane przez Skarbiec Koronny", date: "2026-08-24", status: "Obowiązujący", note: null, pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 45, title: "Ustawa z 22.08.2026 r. o koronnym podatku od obrotu międzyregionalnego i dóbr luksusowych", date: "2026-08-22", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 44, title: "Ustawa z 22.08.2026 r. o koronnym podatku dochodowym", date: "2026-08-22", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 43, title: "Ustawa z 22.08.2026 r. o podatkach koronnych", date: "2026-08-22", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 42, title: "Ustawa z 22.08.2026 r. o Koronnej Administracji Skarbowej", date: "2026-08-22", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 41, title: "Ustawa z 16.08.2026 r. o Policjach Regionalnych i służbach porządkowych", date: "2026-08-16", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 40, title: "Ustawa z 16.08.2026 r. o Koronnej Służbie Ratowniczo-Gaśniczej i Ochronie Ludności", date: "2026-08-16", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 39, title: "Ustawa z 16.08.2026 r. o Koronnym Korpusie Ochrony Porządku", date: "2026-08-16", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 38, title: "Rozporządzenie Ministra Spraw Wewnętrznych i Bezpieczeństwa Państwa z 03.08.2026 r. w sprawie warunków technicznych, standardów kryptograficznych, protokołów bezpieczeństwa oraz architektury połączeń bazodanowych Centralnego Rejestru Adresów Elektronicznych (CRAE)", date: "2026-08-03", status: "Obowiązujący", note: null, pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 37, title: "Ustawa z 02.08.2026 r. o Centralnym Rejestrze Adresów Elektronicznych", date: "2026-08-02", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 36, title: "Ustawa z 31.05.2026 r. Koronny Kodeks Handlu Międzyregionalnego (znowelizowana)", date: "2026-08-02", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 35, title: "Ustawa z 17.03.2025 r. o samorządzie prowincji (znowelizowana)", date: "2026-07-21", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 34, title: "Ustawa z 15.03.2025 r. o samorządzie gminy (znowelizowana)", date: "2026-07-21", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 33, title: "Ustawa z 19.07.2026 r. o Rzeczniku Praw Obywatelskich i Rzeczniku Praw Multikont i Botów", date: "2026-07-19", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 32, title: "Ustawa z 31.05.2026 r. wprowadzająca Koronny Kodeks Cywilny i Koronny Kodeks Handlu Międzyregionalnego", date: "2026-05-31", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 31, title: "Ustawa z 31.05.2026 r. Koronny Kodeks Handlu Międzyregionalnego", date: "2026-05-31", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 36", pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 30, title: "Ustawa z 31.05.2026 r. Koronny Kodeks Cywilny", date: "2026-05-31", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 29, title: "Ustawa z 27.05.2026 r. Koronny Kodeks Postępowania Karnego", date: "2026-05-27", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 28, title: "Ustawa z 27.05.2026 r. Koronny Kodeks Karny", date: "2026-05-27", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 27, title: "Ustawa z 26.05.2026 r. o zasadach cebulacji", date: "2026-05-26", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 26, title: "Ustawa z 26.05.2026 r. Koronny Kodeks Egzekucyjny", date: "2026-05-26", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 25, title: "Ustawa z 15.05.2026 r. Koronny Kodeks Postępowania Cywilnego", date: "2026-05-15", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 24, title: "Ustawa z 15.05.2026 r. o ustroju koronnych sądów powszechnych", date: "2026-05-15", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 23, title: "Ustawa z 14.05.2026 r. o Koronnym Kościele Ignistrigona", date: "2026-05-14", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 22, title: "Konkordat Szkarłatu i Złota z 11.05.2026 r.", date: "2026-05-11", status: "Obowiązujący", note: null, pdfImg: "traktat_pdf.png", docxImg: "traktat_docx.png" },
    { pos: 21, title: "Rozporządzenie Przewodniczącego Rządu Koronnego z 06.03.2026 r. o szczegółowym zakresie działania ministrów koronnych (znowelizowane)", date: "2026-04-16", status: "Obowiązujący", note: null, pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 20, title: "Rozporządzenie Przewodniczącego Rządu Koronnego z 16.04.2026 r. w sprawie przekształcenia Ministerstwa Spraw Wojskowych", date: "2026-04-16", status: "Akt jednorazowy", note: null, pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 19, title: "Ustawa z 26.10.2023 r. o Inkwizycji Koronnej (znowelizowana)", date: "2026-04-12", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 18, title: "Ustawa z 12.04.2026 r. o Wysokim Trybunale Koronnym", date: "2026-04-12", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 17, title: "Ustawa z 30.12.2025 r. o działach administracji koronnej (znowelizowana)", date: "2026-04-05", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 16, title: "Ustawa z 05.04.2026 r. o Wielkiej Armii Koronnej", date: "2026-04-05", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 15, title: "Ustawa z 31.03.2026 r. Koronny Kodeks Postępowania Administracyjnego", date: "2026-03-31", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 14, title: "Ustawa z 31.03.2026 r. o Koronnym Trybunale Administracyjnym", date: "2026-03-31", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 13, title: "Ustawa z 29.03.2026 r. o Koronnym Sądzie Najwyższym", date: "2026-03-29", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 12, title: "Rozporządzenie Przewodniczącego Rządu Koronnego z 06.03.2026 r. o szczegółowym zakresie działania ministrów koronnych", date: "2026-03-06", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 21", pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 11, title: "Rozporządzenie Przewodniczącego Rządu Koronnego z 05.03.2026 r. w sprawie utworzenia ministerstw", date: "2026-03-05", status: "Akt jednorazowy", note: null, pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 10, title: "Ustawa z 05.03.2026 r. o Rządzie Koronnym", date: "2026-03-05", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 9, title: "Obwieszczenie Krulewskiej Rady Wyborczej z 05.03.2026 r. w sprawie ogłoszenia wyników wyborów do Izby Multikont Senatu Koronnego IV kadencji, które odbyły się 04.03.2026 r.", date: "2026-03-05", status: "Akt jednorazowy", note: null, pdfImg: "Pozostałe_akty_pdf.png", docxImg: "Pozostałe_akty_docx.png" },
    { pos: 8, title: "Ustawa z 15.08.2025 r. o organizacji i trybie postępowania Senatu (znowelizowana)", date: "2026-03-03", status: "Obowiązujący", note: "Tekst znowelizowany Kr. Dz. U. z 2025 r. poz. 21", pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 7, title: "Dekret z 26.03.2025 r. o prawie wyborczym (znowelizowany)", date: "2026-03-02", status: "Obowiązujący", note: "Tekst znowelizowany Kr. Dz. U. z 2025 r. poz. 16", pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 6, title: "Dekret z 08.12.2023 r. o Rodzinie Krulewskiej i sukcesji Tronu Korony (znowelizowany)", date: "2026-03-02", status: "Obowiązujący", note: "Tekst znowelizowany Kr. Dz. U. z 2023 r. poz. 33", pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 5, title: "Dekret z 24.02.2026 r. o organizacji arystokracji", date: "2026-02-24", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 49", pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 4, title: "Obwieszczenie Krula Multikont z 05.02.2026 r. o wejściu w życie Konstytucji Korony Krulestwa Multikont", date: "2026-02-05", status: "Akt jednorazowy", note: null, pdfImg: "Pozostałe_akty_pdf.png", docxImg: "Pozostałe_akty_docx.png" },
    { pos: 3, title: "Dekret z 04.02.2026 r. o utworzeniu regionów", date: "2026-02-04", status: "Obowiązujący", note: null, pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 2, title: "Dekret z 01.02.2026 r. o dostosowaniu stanu prawnego do Konstytucji Korony Krulestwa Multikont", date: "2026-02-01", status: "Obowiązujący", note: null, pdfImg: "dekret_pdf.png", docxImg: "dekret_docx.png" },
    { pos: 1, title: "Ustawa z 29.01.2026 r. wprowadzająca Konstytucję Korony Krulestwa Multikont", date: "2026-01-29", status: "Obowiązujący", note: null, pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" }
  ],
  "2025": [
    { pos: 27, title: "Ustawa z 30.12.2025 r. o działach administracji koronnej", date: "2025-12-30", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 17", pdfImg: "ustawa_pdf.png", docxImg: "ustawa_docx.png" },
    { pos: 26, title: "Konstytucja Korony Krulestwa Multikont z 26.12.2025 r.", date: "2025-12-26", status: "Obowiązujący", note: "Weszła w życie z dniem 05.02.2026 r.", pdfImg: "konstytucja_pdf.png", docxImg: "konstytucja_docx.png" },
    { pos: 25, title: "Traktat z 16.12.2025 r. zawarty pomiędzy Koroną Krulestwa Multikont a Patriarchatem Lewosławia dotyczący porozumienia w sprawie nacjonalizacji Lewosławnego Kościoła Krulestwa i przekształcenia go w Koronny Kościół Ignistrigona, jak również relacji Świętego Kościoła Lewosławia z Koronnym Kościołem Ignistrigona i Koroną Krulestwa Multikont", date: "2025-12-16", status: "Akt utracił moc", note: "Utracił moc z dniem 11.05.2026 r. w zw. z wejściem w życie Konkordatu Szkarłatu i Złota", pdfImg: "traktat_pdf.png", docxImg: "traktat_docx.png" },
    { pos: 24, title: "Dekret Konstytucyjny z 04.12.2025 r. o przemianowaniu Krulestwa Multikont na Koronę Krulestwa Multikont", date: "2025-12-04", status: "Obowiązujący", note: null, pdfImg: "dekretkonst_pdf.png", docxImg: "dekretkonst_docx.png" },
    { pos: 23, title: "Dyrektywa wykonawcza Wielkiego Diuka z 28.08.2025 r. w sprawie określenia okręgów właściwości cebulatorów regionalnych", date: "2025-08-28", status: "Akt utracił moc", note: "Uchylony na mocy art. 56 Kr. Dz. U z 2026 r. poz. 26", pdfImg: "dyrektywa_pdf.png", docxImg: "dyrektywa_docx.png" },
    { pos: 22, title: "Ustawa z 28.08.2025 r. o egzekucji administracyjnej", date: "2025-08-28", status: "Akt utracił moc", note: "Uchylony na mocy art. 56 Kr. Dz. U z 2026 r. poz. 26", pdfImg: "ustawa.png", docxImg: null },
    { pos: 21, title: "Ustawa z 15.08.2025 r. o organizacji i trybie postępowania Senatu", date: "2025-08-15", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 8", pdfImg: "ustawa.png", docxImg: null },
    { pos: 20, title: "Dyrektywa wykonawcza Lorda Kanclerza z 21.07.2025 r. o utworzeniu Państwowego Ośrodka Hodowli Cebul w Kwiatogrodzie", date: "2025-07-21", status: "Akt utracił moc", note: "Uchylony na mocy art. 23 Kr. Dz. U z 2026 r. poz. 27", pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 19, title: "Dekret z 08.06.2025 r. o Monitorze Krulewskim", date: "2025-06-08", status: "Obowiązujący", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 18, title: "Dyrektywa Wykonawcza Rady Lordów z 22.05.2025 r. o nadaniu statusu gminy miejskiej gminom", date: "2025-05-22", status: "Obowiązujący", note: null, pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 17, title: "Dekret z 28.03.2025 r. o dwustopniowym podziale terytorialnym Krulestwa Multikont", date: "2025-03-28", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 9 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 16, title: "Dekret z 26.03.2025 r. o prawie wyborczym", date: "2025-03-26", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 7", pdfImg: "dekret.png", docxImg: null },
    { pos: 15, title: "Ustawa z 25.03.2025 r. o samorządzie marchii", date: "2025-03-25", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 10 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 14, title: "Ustawa z 19.03.2025 r. o kasztelanie i terenowej administracji rządowej", date: "2025-03-19", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 9 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 13, title: "Ustawa z 17.03.2025 r. o samorządzie prowincji", date: "2025-03-17", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 35", pdfImg: "ustawa.png", docxImg: null },
    { pos: 12, title: "Ustawa z 15.03.2025 r. o samorządzie gminy", date: "2025-03-15", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 34", pdfImg: "ustawa.png", docxImg: null },
    { pos: 11, title: "Dekret z 15.03.2025 r. o stosowaniu herbów wynikających z posiadania osobistego tytułu szlacheckiego", date: "2025-03-15", status: "Akt utracił moc", note: "Uchylony na mocy art. 48 Kr. Dz. U z 2026 r. poz. 5", pdfImg: "dekret.png", docxImg: null },
    { pos: 10, title: "Dekret z 02.03.2025 r. o ustanowieniu Marchii Świdnik", date: "2025-03-02", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 8 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 9, title: "Dyrektywa Wykonawcza Krula z 26.02.2025 r. wzór oznakowań stopni w Biurze Bezpieczeństwa Krulestwa i Krulewskiej Organizacji Wywiadu", date: "2025-02-26", status: "Obowiązujący", note: null, pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 8, title: "Ustawa z 26.02.2025 r. o Biurze Bezpieczeństwa Krulestwa i Krulewskiej Organizacji Wywiadu", date: "2025-02-26", status: "Obowiązujący", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 7, title: "Ustawa z 24.02.2025 r. o zasadach cebulacji", date: "2025-02-24", status: "Akt utracił moc", note: "Uchylony na mocy art. 23 Kr. Dz. U z 2026 r. poz. 27", pdfImg: "ustawa.png", docxImg: null },
    { pos: 6, title: "Ustawa z 18.02.2025 r. o prawie zobowiązań", date: "2025-02-18", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 8 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 5, title: "Konwencja o ochronie mediów Multikont z 22.01.2025 r.", date: "2025-01-22", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 4, title: "Obwieszczenie Krulewskiej Rady Wyborczej w sprawie ogłoszenia wyników wyborów do Izby Multikont Senatu Krulestwa III kadencji, które odbyły się 18.01.2025 r.", date: "2025-01-19", status: "Akt jednorazowy", note: null, pdfImg: "Pozostałe_akty.png", docxImg: null },
    { pos: 3, title: "Ustawa z 15.01.2025 r. o własności prywatnej", date: "2025-01-15", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 7 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 2, title: "Dekret Konstytucyjny z 14.01.2025 r. o źródłach prawa w Krulestwie Multikont", date: "2025-01-14", status: "Akt utracił moc", note: "Uchylony na mocy art. 149 Kr. Dz. U z 2025 r. poz. 26", pdfImg: "dekretkonst.png", docxImg: null },
    { pos: 1, title: "Dekret z 12.01.2025 r. o zmianie adresu strony internetowej Krulewskiego Dziennika Ustaw", date: "2025-01-12", status: "Obowiązujący", note: null, pdfImg: "dekret.png", docxImg: null }
  ],
  "2024": [
    { pos: 26, title: "Konwencja o przeciwdziałaniu naruszeniom prawa Multikont z 13.12.2024 r.", date: "2024-12-13", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 25, title: "Dekret Krula z 29.11.2024 r. o ustanowieniu Marchii Ganozewsze, Marchii Górnomorze i Marchii Bonisławiec", date: "2024-11-29", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 7 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 24, title: "Uchwała Senatu Krulestwa Multikont z 22.11.2024 r. w sprawie ustanowienia Orderu im. Lorda Haarta", date: "2024-11-13", status: "Obowiązujący", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 23, title: "Karta Praw Podstawowych Multikont z 30.10.2024 r.", date: "2024-11-13", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 22, title: "Dekret Krula z 12.11.2024 r. o nadawaniu sygnatur sprawom sądowym", date: "2024-11-12", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 6 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 21, title: "Dekret Krula z 12.11.2024 r. o ogłaszaniu aktów prawa i innych aktów w Krulewskim Dzienniku Ustaw", date: "2024-11-12", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 5 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 20, title: "II Traktat Tarkwinogrodzki o Demokratycznym Wolnym Związku Zawodowym Multikont z 15.09.2024 r.", date: "2024-09-20", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 19, title: "Dekret Krula z 07.09.2024 r. o warunkach używania herbów rodowych", date: "2024-09-07", status: "Akt utracił moc", note: "Uchylony na mocy art. 48 Kr. Dz. U z 2026 r. poz. 5", pdfImg: "dekret.png", docxImg: null },
    { pos: 18, title: "Dekret Konstytucyjny z 29.08.2024 r. o arystokratycznej polityce rodowej i przywilejach szlacheckich", date: "2024-08-29", status: "Akt utracił moc", note: "Uchylony na mocy art. 149 Kr. Dz. U z 2025 r. poz. 26", pdfImg: "dekretkonst.png", docxImg: null },
    { pos: 17, title: "Dekret Krula z 16.06.2024 r. o nadawaniu numerów i sygnatur aktom i orzeczeniom", date: "2024-06-16", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 ust. 1 Kr.Dz.U. z 2024 r. poz. 21", pdfImg: "dekret.png", docxImg: null },
    { pos: 16, title: "Dyrektywa Wykonawcza Krula z 14.06.2024 r. wzór oznakowań stopni w BBK", date: "2024-06-14", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 Kr.Dz.U. z 2025 r. poz. 9", pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 15, title: "Dyrektywa Wykonawcza Wielkiego Diuka z 14.06.2024 r. wzór oznakowań stopni w KSPP", date: "2024-06-14", status: "Akt utracił moc", note: "Utraciła moc w zw. z wejściem w życie Kr. Dz. U. z 2026 r. poz. 39", pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 14, title: "Ustawa z 14.06.2024 r. o podstawowych zasadach prawa cywilnego", date: "2024-06-14", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 6 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 13, title: "Konwencja o międzynarodowym certyfikacie prawdziwości Multikonta z 11.06.2024 r.", date: "2024-06-11", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 12, title: "Wyrok Międzynarodowego Trybunału Sprawiedliwości Multikont z 23.05.2024 r. w sprawie szkodliwej działalności fejk kont i altkont (Wyrok nr 01/2024)", date: "2024-05-24", status: "Akt utracił moc", note: null, pdfImg: "wyrokMTSM.png", docxImg: null },
    { pos: 11, title: "Ustawa z 20.04.2024 r. o wolnościach sumienia i wyznania oraz związkach wyznaniowych", date: "2024-04-20", status: "Akt utracił moc", note: "Uchylony na mocy art. 34 Kr. Dz. U z 2026 r. poz. 47", pdfImg: "ustawa.png", docxImg: null },
    { pos: 10, title: "Rozporządzenie Wielkiego Skarbnika z 03.04.2024 r. w sprawie znaków pieniężnych Krulestwa Multikont", date: "2024-04-03", status: "Obowiązujący", note: null, pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 9, title: "Dekret Krula z 03.04.2024 r. o ustanowieniu adresu strony internetowej Krulewskiego Dziennika Ustaw", date: "2024-04-03", status: "Akt utracił moc", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 8, title: "Ustawa z 02.04.2024 r. o Krulewskim Banku Centralnym", date: "2024-04-02", status: "Obowiązujący", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 7, title: "Traktat o Lidze Państw Lewosławnych z 03.03.2024 r.", date: "2024-03-03", status: "Obowiązujący", note: null, pdfImg: "lpl.png", docxImg: null },
    { pos: 6, title: "Dekret Krula z 11.02.2024 r. o organizacji Sądu Najwyższego", date: "2024-02-11", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 4 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 5, title: "Dekret Krula z 11.02.2024 r. o organizacji sądów prowincjonalnych", date: "2024-02-11", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 3 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 4, title: "Ustawa z 11.02.2024 r. o ustroju sądów prowincjonalnych", date: "2024-02-11", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 5 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 3, title: "Ustawa z 09.02.2024 r. o Sądzie Najwyższym", date: "2024-02-09", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 4 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 2, title: "Ustawa z 09.02.2024 r. Kodeks Postępowania Administracyjnego", date: "2024-02-09", status: "Akt utracił moc", note: "Uchylony na mocy art. 84 Kr. Dz. U z 2026 r. poz. 15", pdfImg: "ustawa.png", docxImg: null },
    { pos: 1, title: "Obwieszczenie Krulewskiej Rady Wyborczej w sprawie ogłoszenia wyników wyborów do Izby Multikont Senatu Krulestwa II kadencji, które odbyły się 17.01.2024 r.", date: "2024-01-18", status: "Akt jednorazowy", note: null, pdfImg: "Pozostałe_akty.png", docxImg: null }
  ],
  "2023": [
    { pos: 34, title: "Dekret Krula z 15.12.2023 r. o Gwardii Krula", date: "2023-12-15", status: "Obowiązujący", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 33, title: "Dekret Krula z 08.12.2023 r. o Rodzinie Krulewskiej i sukcesji Tronu Krulestwa", date: "2023-12-08", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 6", pdfImg: "dekret.png", docxImg: null },
    { pos: 32, title: "Ustawa z 06.12.2023 r. o samorządzie prowincji i administracji w prowincji", date: "2023-12-06", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 31, title: "Konwencja o zwalczaniu szkodliwej działalności altkont i fejk kont z 29.11.2023 r.", date: "2023-11-29", status: "Obowiązujący", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 30, title: "Wyrok Wysokiego Trybunału z 15.11.2023 r. w sprawie wniosku Krula Multikont o stwierdzenie prawdziwości Multikont (sygn. wyr. WT01/2023)", date: "2023-11-15", status: "Akt utracił moc", note: null, pdfImg: "wyrokWT.png", docxImg: null },
    { pos: 29, title: "Ustawa z 05.11.2023 r. Kodeks Postępowania Karnego", date: "2023-11-05", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 3 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 28, title: "Ustawa z 05.11.2023 r. o partiach politycznych", date: "2023-11-05", status: "Obowiązujący", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 27, title: "Dekret Krula z 29.10.2023 r. o organizacji Krulewskiej Inkwizycji", date: "2023-10-29", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 2 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 26, title: "Ustawa z 26.10.2023 r. o Krulewskiej Inkwizycji", date: "2023-10-26", status: "Znowelizowany", note: "Znowelizowany przez Kr. Dz. U. z 2026 r. poz. 19", pdfImg: "ustawa.png", docxImg: null },
    { pos: 25, title: "Dyrektywa wykonawcza Lorda Marszałka z 29.09.2023 r. wzór oznakowań stopni wojskowych Wielkiej Armii Krulestwa", date: "2023-09-29", status: "Akt utracił moc", note: "Uchylony na mocy art. 44 ust. 2 Kr. Dz. U z 2026 r. poz. 16", pdfImg: "dyrektywa.png", docxImg: null },
    { pos: 24, title: "Ustawa z 21.06.2023 r. Kodeks Wojskowy", date: "2023-06-21", status: "Akt utracił moc", note: "Uchylony na mocy art. 44 ust. 2 Kr. Dz. U z 2026 r. poz. 16", pdfImg: "ustawa.png", docxImg: null },
    { pos: 23, title: "Ustawa z 28.05.2023 r. o ewidencjach urzędników państwowych", date: "2023-05-28", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 2 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 22, title: "Ustawa z 08.04.2023 r. o Korpusie Sił Porządku Państwa", date: "2023-04-08", status: "Akt utracił moc", note: "Uchylony na mocy art. 29 ust. 1 Kr. Dz. U z 2026 r. poz. 39", pdfImg: "ustawa.png", docxImg: null },
    { pos: 21, title: "Dekret Krula z 08.04.2023 r. o organizacji Rady Lordów", date: "2023-04-08", status: "Akt utracił moc", note: "Uchylony na mocy art. 3 pkt 1 Kr. Dz. U z 2026 r. poz. 2", pdfImg: "dekret.png", docxImg: null },
    { pos: 20, title: "Ustawa z 06.04.2023 r. o Biurze Bezpieczeństwa Krulestwa", date: "2023-04-06", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 19, title: "Ustawa z 02.04.2023 r. Kodeks Karny Krulestwa", date: "2023-04-02", status: "Akt utracił moc", note: "Uchylony na mocy art. 55 ust. 1 Kr. Dz. U z 2026 r. poz. 28", pdfImg: "ustawa.png", docxImg: null },
    { pos: 18, title: "Dekret Krula z 02.04.2023 r. o ustroju sądów prowincjonalnych", date: "2023-04-02", status: "Akt utracił moc", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 17, title: "Ustawa z 27.02.2023 r. o religii i związkach wyznaniowych", date: "2023-02-27", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 16, title: "Traktat o DWZZM (I Traktat Tarkwinogrodzki) z 22.02.2023 r.", date: "2023-02-22", status: "Akt utracił moc", note: null, pdfImg: "dwzzm.png", docxImg: null },
    { pos: 15, title: "Ustawa z 01.02.2023 r. o Wysokim Trybunale", date: "2023-02-01", status: "Akt utracił moc", note: "Uchylony na mocy art. 5 pkt 1 Kr. Dz. U z 2026 r. poz. 1", pdfImg: "ustawa.png", docxImg: null },
    { pos: 14, title: "Ustawa z 01.02.2023 r. o ustroju Stolicy Krulestwa", date: "2023-02-01", status: "Obowiązujący", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 13, title: "Ustawa z 01.02.2023 r. o siłach zbrojnych Krulestwa", date: "2023-02-01", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 12, title: "Ustawa z 01.02.2023 r. o siłach porządkowych Krulestwa", date: "2023-02-01", status: "Akt utracił moc", note: "Uchylony na mocy art. 29 ust. 2 Kr. Dz. U z 2026 r. poz. 39", pdfImg: "ustawa.png", docxImg: null },
    { pos: 11, title: "Ustawa z 01.02.2023 r. o Senacie Krulestwa", date: "2023-02-01", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 10, title: "Ustawa z 01.02.2023 r. o Sądzie Najwyższym Krulestwa", date: "2023-02-01", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 9, title: "Ustawa z 01.02.2023 r. o Rodzinie Krulewskiej", date: "2023-02-01", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 8, title: "Ustawa z 01.02.2023 r. o Radzie Lordów i administracji rządowej", date: "2023-02-01", status: "Akt utracił moc", note: "Uchylony na mocy art. 36 Kr. Dz. U z 2025 r. poz. 27", pdfImg: "ustawa.png", docxImg: null },
    { pos: 7, title: "Ustawa z 01.02.2023 r. o DWZZM-Krulestwo", date: "2023-02-01", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 6, title: "Obwieszczenie Krulewskiej Rady Wyborczej w sprawie ogłoszenia wyników wyborów do Izby Multikont Senatu Krulestwa I kadencji, które odbyły się 05.01.2023 r.", date: "2023-01-06", status: "Akt jednorazowy", note: null, pdfImg: "Pozostałe_akty.png", docxImg: null },
    { pos: 5, title: "Dekret Krula z 06.01.2023 r. o tytułach naukowych i uczelniach państwowych", date: "2023-01-06", status: "Akt utracił moc", note: "Uchylony na mocy art. 29 Kr. Dz. U. z 2026 r. poz. 48", pdfImg: "dekret.png", docxImg: null },
    { pos: 4, title: "Dekret Krula z 04.01.2023 r. o wyborach w Krulestwie", date: "2023-01-04", status: "Akt utracił moc", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 3, title: "Dekret Krula z 01.01.2023 r. o tytułach szlacheckich i odznaczeniach", date: "2023-01-01", status: "Akt utracił moc", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 2, title: "Dekret Krula z 01.01.2023 r. o prowincjach w Krulestwie", date: "2023-01-01", status: "Akt utracił moc", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 1, title: "Konstytucja Krulestwa Multikont z 01.01.2023 r.", date: "2023-01-01", status: "Akt utracił moc", note: "Uchylony na mocy art. 149 Kr. Dz. U z 2025 r. poz. 26", pdfImg: "konstytucja.png", docxImg: null }
  ],
  "2022": [
    { pos: 18, title: "Dekret Krula z 26.12.2022 r. o składzie Rady Konstytucyjnej", date: "2022-12-26", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 17, title: "Ustawa z dnia 03.10.2022 r. o administracji rządowej", date: "2022-10-03", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 16, title: "Dekret Krulewski z dnia 10.09.2022 r. w sprawie odwołania Regenta", date: "2022-09-10", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 15, title: "Dekret Krulewski z dnia 21.08.2022 r. w sprawie powołania Regenta", date: "2022-08-21", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 14, title: "Dekret Krulewski z dnia 12.07.2022 r. w sprawie przejęcia przez Radę Regencyjną obowiązku wykonywania praw Krula ze względu na przejściową niemożność do sprawowania urzędu", date: "2022-07-12", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 13, title: "Ustawa z dnia 09.07.2022 r. o siłach porządkowych Krulestwa", date: "2022-07-09", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 12, title: "Dekret Krulewski z dnia 09.07.2022 r. w sprawie utworzenia urzędu Wielkiego Diuka", date: "2022-07-09", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 11, title: "Ustawa z dnia 21.06.2022 r. o Senacie Krulestwa", date: "2022-06-21", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 10, title: "Dekret Krulewski z dnia 11.06.2022 r. w sprawie nadania Puchaczowi Potężnemu tytułu Diuka", date: "2022-06-11", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 9, title: "Ustawa z dnia 09.06.2022 r. o DWZZM-Krulestwo", date: "2022-06-09", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 8, title: "Ustawa z dnia 08.06.2022 r. o mieście stołecznym Krulestwa Trójmieście", date: "2022-06-08", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 7, title: "Traktat z dnia 08.06.2022 r. likwidujący Lewosławną Republikę Trójmiasta i wcielający Trójmiasto do Krulestwa", date: "2022-06-08", status: "Akt utracił moc", note: null, pdfImg: "traktat.png", docxImg: null },
    { pos: 6, title: "Ustawa z dnia 29.05.2022 r. o siłach zbrojnych Krulestwa", date: "2022-05-29", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 5, title: "Ustawa z dnia 14.05.2022 r. o Naczelnym Sądzie Konstytucyjnym", date: "2022-05-14", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 4, title: "Ustawa z dnia 10.05.2022 r. o Sądzie Najwyższym Krulestwa", date: "2022-05-10", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 3, title: "Ustawa z dnia 10.05.2022 r. o Rodzinie Krulewskiej", date: "2022-05-09", status: "Akt utracił moc", note: null, pdfImg: "ustawa.png", docxImg: null },
    { pos: 2, title: "Dekret Krulewski z dnia 09.05.2022 r. w sprawie ustanowienia dnia 3 lutego świętem narodowym", date: "2022-05-09", status: "Obowiązujący", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 1, title: "Dekret Krulewski z dnia 06.05.2022 r. w sprawie specjalnej operacji wojskowej", date: "2022-05-06", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null }
  ],
  "2021": [
    { pos: 3, title: "Edykt Krulewski z dnia 12.12.2021 r. o zawarciu przyjaźni Krulestwa Multikont z Gosią", date: "2021-12-12", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 2, title: "Edykt Krulewski z dnia 07.12.2021 r. o mobilizacji sił zbrojnych DWZZM-Krulestwo", date: "2021-12-07", status: "Akt jednorazowy", note: null, pdfImg: "dekret.png", docxImg: null },
    { pos: 1, title: "Konstytucja Krulestwa z dnia 30.09.2021 r.", date: "2021-09-30", status: "Akt utracił moc", note: "Uchylony na mocy art. 108 ust. 2 Kr. Dz. U z 2023 r. poz. 1", pdfImg: "konstytucja.png", docxImg: null }
  ]
};

let currentTab = "2026";

function renderTableHtml(items, yearLabel) {
  return `
    <article class="item-card">
      <header class="item-header">
        <span class="item-sig">${yearLabel}</span>
        <span class="badge-grand">Liczba pozycji: ${items.length}</span>
      </header>
      <div class="item-body">
        <div class="table-responsive">
          <table class="official-table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">Pozycja</th>
                <th>Tytuł aktu</th>
                <th style="width: 110px; text-align: center;">Data ogłoszenia</th>
                <th style="width: 150px; text-align: center;">Status aktu</th>
                <th style="width: 120px; text-align: center;">Pliki</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(item => {
                const statusClass = statusMap[item.status] || "status-onetime";
                
                let statusHtml = '';
                if (item.note) {
                  statusHtml = `
                    <div class="tooltip-container">
                      <span class="badge-status ${statusClass}">${item.status}</span>
                      <span class="tooltip-text">${item.note}</span>
                    </div>
                  `;
                } else {
                  statusHtml = `<span class="badge-status ${statusClass}">${item.status}</span>`;
                }

                const itemYear = item.year || currentTab;

                return `
                <tr>
                  <td style="text-align: center;"><strong>${item.pos}</strong></td>
                  <td style="color: #f1f3f5; font-weight: 500; text-align: justify;">${item.title}</td>
                  <td style="text-align: center; color: #d1d5db;">${item.date}</td>
                  <td style="text-align: center; vertical-align: middle;">${statusHtml}</td>
                  <td style="text-align: center;">
                    <div class="file-icons">
                      ${item.pdfImg ? `
                        <a href="${itemYear}/KrDzU${itemYear}poz${item.pos}.pdf" target="_blank" title="Pobierz plik PDF" class="file-link">
                          <img src="${item.pdfImg}" alt="Plik PDF" class="legacy-icon">
                        </a>
                      ` : ''}
                      ${item.docxImg ? `
                        <a href="${itemYear}/KrDzU${itemYear}poz${item.pos}.docx" target="_blank" title="Pobierz plik DOCX" class="file-link">
                          <img src="${item.docxImg}" alt="Plik DOCX" class="legacy-icon">
                        </a>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `}).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  `;
}

function generateTabs() {
  const container = document.getElementById("tabsBarContainer");
  if (!container) return;
  const years = Object.keys(kduDb).sort((a, b) => b - a);
  container.innerHTML = years.map(year => `
    <button class="tab-button ${year === currentTab ? 'active' : ''}" onclick="loadTab('${year}', this)">Rocznik ${year}</button>
  `).join('');
}

function loadTab(year, btnElement) {
  currentTab = year;
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const container = document.getElementById("contentContainer");
  if (!container) return;

  const items = kduDb[year] || [];
  container.innerHTML = renderTableHtml(items, `Krulewski Dziennik Ustaw z ${year} r.`);
}

function hasMatch(val, query) {
  if (!val) return false;
  return String(val).toLowerCase().includes(query);
}

function handleSearch() {
  const input = document.getElementById("registrySearch");
  const container = document.getElementById("contentContainer");
  if (!input || !container) return;
  
  const query = input.value.trim().toLowerCase();

  if (!query) {
    const activeBtn = Array.from(document.querySelectorAll('.tab-button')).find(b => b.textContent.includes(currentTab));
    loadTab(currentTab, activeBtn);
    return;
  }

  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

  let matches = [];
  Object.keys(kduDb).forEach(year => {
    kduDb[year].forEach(item => {
      if (
        hasMatch(item.pos, query) ||
        hasMatch(item.title, query) ||
        hasMatch(item.date, query) ||
        hasMatch(item.status, query)
      ) {
        matches.push({ ...item, year });
      }
    });
  });

  if (matches.length === 0) {
    container.innerHTML = `<div class="search-no-results">Nie odnaleziono aktów prawnych dla frazy: <strong>${query}</strong>.</div>`;
    return;
  }

  container.innerHTML = renderTableHtml(matches, `Wyniki wyszukiwania we wszystkich rocznikach (Trafień: ${matches.length})`);
}

function clearSearch() {
  const input = document.getElementById("registrySearch");
  if (input) {
    input.value = "";
    const targetBtn = Array.from(document.querySelectorAll('.tab-button')).find(b => b.textContent.includes(currentTab));
    if (targetBtn) targetBtn.classList.add('active');
    loadTab(currentTab, targetBtn);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  generateTabs();
  loadTab('2026', document.querySelector('.tab-button'));
});