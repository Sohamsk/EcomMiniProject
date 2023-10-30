document.querySelector(".p680").addEventListener("click", async (e) => {
  e.preventDefault();
  let body = JSON.stringify({
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#summary").value,
    password: document.querySelector("#pwd").value,
  });

  let result = await fetch(`/auth/register`, {
    method: "POST",
    body: body,
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  if (result.status === 201) {
    location.replace("/");
  } else {
    alert("we have a problem");
  }
});
