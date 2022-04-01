const cep = document.querySelector(".cep");
const btnProcurar = document.querySelector("#pro");

const insertData = (result) => {
    Object.entries(result).map(([campo, value]) => {
        if (document.querySelector("#"+campo)) document.querySelector("#"+campo).value = value
    })
}

btnProcurar.addEventListener("click", event => {
    let unmaskCep = cep.value.replace("-", "")
    const getOptions = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${unmaskCep}/json/` , getOptions)
    .then(resp =>
        resp.json()
        .then(data => insertData(data))
    )
    .catch(err => window.console.log(`Cep não encontrado ${err}`));
})