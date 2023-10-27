document.querySelector(".p680").addEventListener("click", async (e) => {
  e.preventDefault();
  let body = JSON.stringify({
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#summary").value,
  });

  let result = await fetch(
    `/buy/${document.querySelector(".p680").getAttribute("data")}`,
    {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let resp = await result.json();
  if (resp.status === 1) {
    alert("Order Failed only one order per email id");
  } else if (resp.status === 0) {
    {
      document.querySelector(".p680").disabled = true;
      alert("Order Successfull");
    }
  }
});
