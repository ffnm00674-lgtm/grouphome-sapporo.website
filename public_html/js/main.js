/* =========================================================
   main.js：全ページ共通JavaScript
   ========================================================= */
document.addEventListener("DOMContentLoaded",()=>{
  // ---------- スマートフォン用ナビゲーション ----------
  const toggle=document.querySelector("#menuToggle");
  const nav=document.querySelector("#mainNav");
  if(toggle&&nav){
    toggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded",String(open));
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded","false");
    }));
  }

  // ---------- FAQの開閉 ----------
  document.querySelectorAll(".faq-question").forEach(button=>{
    button.addEventListener("click",()=>{
      const item=button.closest(".faq-item");
      const open=item.classList.toggle("open");
      button.setAttribute("aria-expanded",String(open));
    });
  });

  // ---------- スクロール表示 ----------
  const items=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12});
    items.forEach(item=>observer.observe(item));
  }else items.forEach(item=>item.classList.add("is-visible"));

  // ---------- フッター年号 ----------
  document.querySelectorAll("[data-current-year]").forEach(el=>el.textContent=new Date().getFullYear());

  // ---------- 問い合わせフォーム ----------
  const form=document.querySelector("#contactForm");
  if(form) form.addEventListener("submit",e=>{
    e.preventDefault();
    const result=document.querySelector("#formResult");
    if(result){result.textContent="現在、このフォームの送信先は設定されていません。お電話でお問い合わせください。";result.hidden=false;}
  });
});
