const searchClass = async (className) => {
    const classSplit = className.split(" ")
    const classList = await fetch(`https://www.dnd5eapi.co/api/classes/${classSplit[0]}%20{classSplit[1]}`)
    const classListJson = await classList.json()
    return classListJson
}