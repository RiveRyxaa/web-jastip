// ====== EDIT DATA DI SINI ======
const WA_ADMIN = "https://wa.me/6283188315350"; // ganti nomor admin

// img  = nama file gambar di folder "images" (kosongkan "" kalau mau pakai emoji)
// icon = emoji cadangan kalau gambar tidak ditemukan
const directories = [
  { id:"01", featured:true, tag:"ACTIVE", label:"DIRECTORY_01", img:"images/grup wa.", icon:"👥", title:"GROUP WA JASTIP", desc:"Batch Tercepat, Flash Sale & Info PO", url:"https://chat.whatsapp.com/HomhV7tmNpqFRpMC8C8vqo?mode=gi_t&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAacIH-F3f9bXvmwRbfBRSn4NtaY3M-_Ltu2lSJ0XEOTE1shzYegdKFphF-iJ0Q_aem_uOJ4V8g3hSCZ_5XQ-H36ag" },
  { id:"02", color:"c-blue",   badge:"NEW",   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytuWVcOkyuOfdOt6B9jlBKOsXmTXhCi_EQi7xrcs8lIkJlz2pKfw_HEM&s=10",   icon:"📢", title:"SALURAN WA JASTIP", desc:"Katalog Harian & Live Update", url:"https://whatsapp.com/channel/0029Vb90QQE1iUxWKBzmR037" },
  { id:"03", color:"c-pink",   badge:"FAST",  img:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=thumbnail",     icon:"💬", title:"ADMIN WA FAST RESPON", desc:"Order & Konsultasi Titip", url:"https://wa.me/6283188315350" },
  { id:"04", color:"c-yellow", badge:"VIDEO", img:"https://i.pinimg.com/originals/e4/15/d6/e415d6bd27900cc066d0b8b23a7f1055.png",    icon:"🎵", title:"TIKTOK JASTIP", desc:"Haul & Unboxing Video", url:"https://www.tiktok.com/@jastipbynovilgstn?is_from_webapp=1&sender_device=pc" },
  { id:"05", color:"c-sky",    badge:"FEEDS", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjeAVjNCCuJYml1I4WlNOtcQQEsEb_VgnvNXq9b0jXQ&s=10", icon:"📷", title:"INSTAGRAM JASTIP", desc:"Feeds & Stories", url:"https://www.instagram.com/jastipbynovilgstn?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==" }
];
// ================================

const arrow = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

// isi kotak ikon: emoji + gambar di atasnya (kalau gambar gagal dimuat, emoji tetap terlihat)
function iconHTML(d){
  const pic = d.img ? `<img src="${d.img}" alt="" onerror="this.remove()">` : "";
  return `<div class="icon">${d.icon}${pic}</div>`;
}

function cardHTML(d){
  if (d.featured) {
    return `<a class="dir featured" href="${d.url}" target="_blank" rel="noopener">
      ${iconHTML(d)}
      <div class="body">
        <div class="meta-top"><span class="tag">${d.tag}</span>${d.label}</div>
        <h2>${d.title}</h2><p>${d.desc}</p>
      </div>
      <span class="go">${arrow}</span></a>`;
  }
  return `<a class="dir ${d.color}" href="${d.url}" target="_blank" rel="noopener">
    <span class="badge">${d.badge}</span>
    ${iconHTML(d)}
    <h2>${d.title}</h2><p>${d.desc}</p>
    <div class="dir-meta"><span>DIR_${d.id}</span>${arrow}</div></a>`;
}

document.getElementById("directory").innerHTML = directories.map(cardHTML).join("");
document.getElementById("ctaLink").href = WA_ADMIN;
document.getElementById("year").textContent = new Date().getFullYear();
