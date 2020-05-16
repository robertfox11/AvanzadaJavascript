const downloadUser = (count) =>
  new Promise((resolve, reject) => {
    //pasar la cantidad a la api
    const api = `https://jsonplaceholder.typicode.com/posts/${count}/comments`;
    // llamado ajax
    const xhr = new XMLHttpRequest();
    //abrir el contenedor
    xhr.open("GET", api, true);
    //onload
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(error(xhr.statusText));
      }
    };
    xhr.onerror = (error) => reject(error);
    //Send
    xhr.send();
  });
// VAmos a imprimier en el html
downloadUser(5).then(
  (miembros) => imprimiHtml(miembros),
  (error) => console.error(new Error("hubo un error" + error))
);
function imprimiHtml(users) {
  let html = "";
  users.forEach((user) => {
    console.log(user);
    html += `
        <li>Email :${user.email}</li>
        <li>Body :${user.body}</li>
    `;
  });
  const contenedorApp = document.querySelector("#app");
  contenedorApp.innerHTML = html;
}
