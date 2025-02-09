// src/components/AboutUs.js
import React, { useContext } from "react";
import LanguageContext from "../LanguageContext.js";
import "./AboutUs.css";
import meImage from "../img/me.png"; // Import the image

function AboutUs() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <section className="about-us-page">
      <h2>{isEnglish ? "About Us" : "ስለእኛ"}</h2>
      
      {/* Image added here before the paragraph */}
      <img src={meImage} alt="Terefe Mekuria" className="about-image" />

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

My experiences have been further enriched by participating in training workshops across Ethiopia, 
Kenya, Uganda, and Tanzania. Since moving to the United States 27 years ago, I have worked in
long-term care for over a decade, gaining a deep understanding of the healthcare system's
challenges and opportunities. This exposure has deepened my commitment to making meaningful 
contributions to the U.S. healthcare sector.

At the Professional Nurse Recruiting Agency, we understand the vital role healthcare professionals
play as the backbone of this industry. I take your trust in our agency seriously and I'm dedicated to
supporting and playing a significant role in your transition to a rewarding career in the United States.

Thank you for considering us as your partner in this significant journey. Together, we can build a
stronger healthcare system.`
        ) : (
          `ስሜ ተረፈ መኩሪያ እባላለሁ የፕሮፌሽናል ነርስ ምልመላ ኤጀንሲ (PNRA) ዋና ስራ አስፈፃሚ ነኝ።
በኩራት የመጣሁት ከኢትዮጵያ ነው፣ በጤና አጠባበቅ ጉዞዬን በሳይንስ ባችለር ጀመርኩ።
ከአዲስ አበባ ዩኒቨርሲቲ (1978) እና በኋላ በህብረተሰብ ጤና ማስተርስ ዲግሪ አግኝተዋል
በቤልጂየም ውስጥ የትሮፒካል ሕክምና ተቋም (1991/92). በተጨማሪም፣ በቅድመ ማስጠንቀቂያ የምስክር ወረቀት ያዝኩ።
እና የአደጋ ዝግጁነት እና መከላከል ከዩኒሴፍ፣ ብራስልስ (1992)።

በሙያዬ ሁሉ፣ እንደ የክትትል ኦፊሰር ሆኜ ማገልገልን ጨምሮ ተፅዕኖ ፈጣሪ ሚናዎችን ወስጃለሁ።
የባሌ አስተዳደር ቀይ መስቀልን በመምራት የዓለም ጤና ድርጅት ፈንጣጣ ማጥፋት ፕሮግራም
ማህበረሰብ እና በመካከለኛው አዋሽ የመንግስት እርሻ ሚኒስቴር የሕክምና ክፍልን መሪቻለሁ።
ከስምንት ዓመታት በበለጠ በኢትዮጵያ የኖርዌይ ቤተ ክርስቲያን እርዳታ የጤና ፕሮግራም አማካሪ ሆኜ ሠርቻለሁ።
በክልሉ ውስጥ የጤና አጠባበቅ ስርዓቶችን ለሚያጠናክሩ ፕሮግራሞች አስተዋፅኦ ማድረግ.

በመላው ኢትዮጵያ፣ ኬንያ፣ ኡጋንዳ እና ታንዛኒያ ባሉ የስልጠና አውደ ጥናቶች 
በመሳተፍ ልምዶቼ የበለጠ የበለፀጉ ናቸው። ከዛሬ 27 አመት በፊት ወደ አሜሪካ ከተዛወርኩ ወዲህ ፣ በጤና አጠባበቅ
 ሥርዓቱ ውስጥ ስላሉት ተግዳሮቶች እና እድሎች ጥልቅ ግንዛቤ በማግኘት በረጅም ጊዜ እንክብካቤ ውስጥ ከአሥር 
 ዓመታት በላይ አሳልፌአለሁ። ይህ ልምድ ለዩኤስ የጤና እንክብካቤ ዘርፍ ትርጉም ያለው አስተዋጽዖ ለማድረግ ያለኝን
ቁርጠኝነት አጠናክሮታል።

በፕሮፌሽናል ነርስ ምልመላ ኤጀንሲ፣ የጤና እንክብካቤ ባለሙያዎችን ወሳኝ ሚና እንረዳለን።
የዚህ ኢንዱስትሪ የጀርባ አጥንት ሆነው ማገልገል። በኤጀንሲያችን ላይ ያለዎትን እምነት በቁም ነገር እወስዳለሁ እናም ለእዚህም ቁርጠኛ ነኝ
በዩናይትድ ስቴትስ ውስጥ ወደሚሸልም ሥራ በሚሸጋገሩበት ጊዜ መደገፍ እና ጉልህ ሚና መጫወት።

በዚህ ጉልህ ጉዞ ውስጥ እንደ አጋርዎ ስለቆጠሩን እናመሰግናለን። አንድ ላይ መገንባት እንችላለን
ጠንካራ የጤና አጠባበቅ ሥርዓት.`
        )}
      </p>
    </section>
  );
}

export default AboutUs;
