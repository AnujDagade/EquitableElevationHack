

function saveToNgo(ngoInfo) {

    localStorage.setItem(`ngo:${ngoInfo.email}`, JSON.stringify(ngoInfo))

}
  

export {saveToNgo}