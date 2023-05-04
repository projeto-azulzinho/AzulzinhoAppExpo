length == 0 || null || undefined 

const validation = (param) => {
    if(param == null || param == undefined || param.length == 0)
        return "Campo não preenchido"
}