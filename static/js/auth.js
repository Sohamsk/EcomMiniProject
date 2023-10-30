document
  .querySelector("[data-work = register]")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    location.replace("/register");
  });

document
  .querySelector("[data-work = login]")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      email: document.querySelector("[data-work = username]").value,
      password: document.querySelector("[data-work = password]").value,
    });
    const resp = await fetch("/auth/login", {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    if (resp.status === 200) location.replace("/");
    else console.log(js.status);
  });
