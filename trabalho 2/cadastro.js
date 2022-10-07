let bancoUsuario = []

function cadastrarUsuario(usuario,email,senha){
    let novoUsuario = {
        usuario : usuario,
        email : email,
        senha : senha,
    }
    if(bancoUsuario == 0) {
        bancoUsuario.push(novoUsuario)
        return alert("Usuario Cadastrado com Sucesso!")
        
    }else{

        for(let i in bancoUsuario){
            if( bancoUsuario[i].usuario != usuario && bancoUsuario[i].email != email){
bancoUsuario.push(novoUsuario)
            }else{
            return alert("Nome de usuário ou email já existem!")
        }
    }
}


}
function cadastrar(){
let usuario = document.getElementById("nome").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

cadastrarUsuario(usuario,email,senha)

document.getElementById("usuario").value = ""
document.getElementById("email").value = ""
document.getElementById("senha").value = ""

console.log("--------------------------")
console.log("Lista de Usuario")
console.log("--------------------------")
console.log(bancoUsuario)




}


    

