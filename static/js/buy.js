const buy = document.querySelector("#buy");

buy.addEventListener("click", async (e) => {
  e.preventDefault();
  const resp = await fetch(`/buy/${buy.getAttribute("data-buy")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.status == 401) {
    location.replace("/login");
  } else if (resp.status == 202) {
    const orderid = await resp.json();
    alert(`OrderId is ${orderid.orderid}`);
  }
});
