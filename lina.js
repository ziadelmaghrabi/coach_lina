 // Smooth Scrolling مع تعويض navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70; // ارتفاع navbar
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

// بدء الكتابة على load لجميع الأجهزة
window.addEventListener("load", () => {
  if (!started) {
    started = true;
    type();
  }
});

// Profile Image 3D Hover
const img = document.querySelector('.profile-img');
img.addEventListener('mousemove', (e) => {
  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  img.style.setProperty('--rotateY', `${x / 20}deg`);
  img.style.setProperty('--rotateX', `${-y / 20}deg`);
});
img.addEventListener('mouseleave', () => {
  img.style.setProperty('--rotateY', '0deg');
  img.style.setProperty('--rotateX', '0deg');
});

// عرض المهارات ديناميكياً
function displaySkills() {
  const projectParagraph = document.querySelector(".project p");
  projectParagraph.innerHTML = text.skills.map(skill => `• ${skill}`).join("<br>");
}
