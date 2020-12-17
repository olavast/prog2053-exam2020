import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  render() {

  return html`
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  </head>
  <form onsubmit="javascript: return false;" id="userForm" method="POST">
  <div class="form-group" style="width: 30rem;">
    <label for="email">Email</label>
    <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
    <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
  </div>
  <div class="form-group" style="width: 30rem;">
    <label for="lastName">Etternavn</label>
    <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
  </div>
  <div class="form-group" style="width: 30rem;">
    <label for="firstName">Fornavn</label>
    <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
  </div>
  <div class="form-group" style="width: 30rem;">
    <label for="oldpwd">Gammelt Passord</label>
    <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
  </div>
  <div class="form-group" style="width: 30rem;">
    <label for="newpwd">Nytt Passord</label>
    <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
</div>
<input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-success mt-4 ml-2" value="Endre"></input>
</form>
  `;
}

updateUser(b) {
  //data fra HTML form
  const dataForm = new FormData(e.target.form);
  console.log(b)
  fetch('api/updateUser.php', {
   method: 'POST',
   body: dataForm
  }).then(res=>res.json())
    .then(data=>{
      if (data.status=='success') {
          console.log("Brukeren ble oppdatert");
      } else {
          console.log("Brukeren ble ikke oppdatert");
      }
    })
}
 

}
customElements.define('edit-user', EditUser);
