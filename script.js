function scrollRight() {
  const container = document.getElementById("scrollContainer");
  container.scrollBy({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
}

function scrollleft() {
  const container = document.getElementById("scrollContainer");
  container.scrollBy({
    top: 0,
    left: -100,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".barang");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 } // 10% dari elemen terlihat
  );

  products.forEach((barang) => {
    observer.observe(barang);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".barang-lagi");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 } // 10% dari elemen terlihat
  );

  products.forEach((barang) => {
    observer.observe(barang);
  });
});

document.querySelectorAll(".barang, .barang-lagi").forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector("h1").textContent;
    const image = item.querySelector("img").src;
    const price = item.querySelector("h3").textContent;
    const description = item.querySelector("p").textContent;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = image;
    document.getElementById("modal-price").textContent = price;
    document.getElementById("modal-description").textContent = description;

    document.getElementById("modal").style.display = "flex";
  });
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
});

document.querySelector(".buy-button").addEventListener("click", () => {
  Swal.fire({
    title: "🎉 Berhasil Dibeli!",
    text: "Terima kasih telah membeli produk kami.",
    icon: "success",
    confirmButtonText: "Lanjutkan Belanja",
    background: "#1e1e2d",
    color: "#ffffff",
    confirmButtonColor: "#ffcc00",
    backdrop: `
        rgba(0,0,0,0.8)
      `,
  });

  document.getElementById("modal").style.display = "none";
});
