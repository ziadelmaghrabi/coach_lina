 // Smooth Scrolling مع تعويض navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const topPos = target.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  });
});

// بيانات لينا - Bio و Skills
const text = {
  bio: "أنا لينا محمود، مدربة سباحة في طنطا وطالبة في كلية التربية الرياضية. أمتلك خبرة واسعة في تدريب السباحة لمختلف الفئات العمرية والمستويات، مع القدرة على تطوير الأداء البدني والمهاري بأساليب تدريب حديثة ومحفّزة. أحمل عدة شهادات معتمدة في مجال السباحة، أبرزها شهادة الإنقاذ من الاتحاد المصري للسباحة، مما يعزز قدرتي على التعامل مع حالات الطوارئ والحفاظ على أعلى مستويات الأمان داخل حمام السباحة. أنا شغوفة بتعليم السباحة، وتنمية ثقة المتدربين في الماء، وخلق بيئة تدريب إيجابية تساعدهم على تحسين مستواهم وتحقيق أهدافهم الرياضية.",
  skills: [
    "تدريب السباحة لجميع الأعمار والمستويات",
    "تطوير تقنيات السباحة الأساسية (الحرة – الظهر – الصدر – الفراشة)",
    "إعداد خطط تدريب فردية وجماعية",
    "مهارات الإنقاذ والسلامة المائية",
    "الإسعافات الأولية والتعامل مع الحالات الطارئة",
    "متابعة وتقييم أداء المتدربين بشكل مستمر",
    "إدارة الجلسات التدريبية بكفاءة واحترافية",
    "مهارات تواصل قوية والقدرة على التعامل مع الأطفال",
    "تحفيز المتدربين وبناء الثقة داخل الماء"
  ]
};

// Typing Animation للـ bio
let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if (i < text.bio.length) {
    typingText.textContent += text.bio[i];
    i++;
    setTimeout(type, 25);
  } else {
    displaySkills(); // بعد انتهاء typing
  }
}

// Desktop: بدء الكتابة عند hover
aboutSection.addEventListener("mouseenter", () => {
  if (!started && window.innerWidth > 768) {
    started = true;
    type();
  }
});

// Mobile
