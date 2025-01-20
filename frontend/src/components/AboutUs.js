// src/components/AboutUs.js
import React, { useContext } from "react";
import LanguageContext from "../LanguageContext.js";
import "./AboutUs.css";

function AboutUs() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <section className="about-us-page">
      <h2>{isEnglish ? "About Us" : "ስለእኛ"}</h2>
      <p>
        {isEnglish ? (
          `My name is Terefe Mekuria, and I am the CEO of the Professional Nurse Recruiting Agency (PNRA).
I proudly hail from Ethiopia, where I began my journey in healthcare with a Bachelor of Science
degree from Addis Ababa University (1978) and later earned a Master of Public Health from the
Institute of Tropical Medicine in Belgium (1991/92). Additionally, I hold a Certificate in Early Warning
and Disaster Preparedness and Prevention from UNICEF, Brussels (1992).

Throughout my career, I have taken on impactful roles, including serving as a Surveillance Officer in
the WHO's smallpox eradication program, leading the Bale Administrative Region for the Red Cross
Society, and heading the Medical Division at the Ministry of State Farm, Middle Awash. For over
eight years, I worked as a Health Program Consultant for Norwegian Church Aid in Ethiopia,
contributing to programs that strengthened healthcare systems across the region.

My experiences have been further enriched through participation in training workshops in Ethiopia,
Kenya, Uganda, and Tanzania. Since moving to the United States 27 years ago, I have worked in
long-term care for over a decade, gaining a deep understanding of the healthcare system's
challenges and opportunities. This exposure fuels my commitment to making meaningful
contributions to the U.S. healthcare sector.

At the Professional Nurse Recruiting Agency, we understand the vital role healthcare professionals
play as the backbone of this industry. I take your trust in our agency seriously and am dedicated to
supporting and playing a significant role in your transition to a rewarding career in the United States.

Thank you for considering us as your partner in this significant journey. Together, we can build a
stronger healthcare system.`
        ) : (
          `እኔ ተረፈ መኩሪያ ነኝ፣ እና እኔ የሙያ ነርስ ቅጥር ኤጀንሲ (PNRA) ዋና እና ዋና ተመካቂ ነኝ።
እኔ በኢትዮጵያ በአዲስ አበባ ዩኒቨርሲቲ የሳይንስ ምርጫ (1978) በሳይንስ መሠረት በምርምር ምርምር መሠረት
እና በቤልጄም (1991/92) በትሪፕሊካ መተንረሻ እና በኦዋርን እና በእናት ወልዶች
በመማሪያ አርታኢነት፣ በቤልጄም (1992) በቅርንጫፉ በቅርንጫፍ።

በክርስቶስ አማኑኤል፣ እኔ በደቡብ አሜሪካ በምስራቃዊነት እና እኔ በቀላልነት እንደምንቅስቅስ እና 
እና በብቅት በቅርንጫፉ ላይ እናት ምርምር በሙያ በሚያክልና ከስራው ውስጥ እንደማንስቅስቅ እና እናት እንደማንስቅስቅ ምንስቅስቅ ምንስቅስቅ።`
        )}
      </p>
    </section>
  );
}

export default AboutUs;
