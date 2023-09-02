

function saveToNgo(ngoInfo) {

    localStorage.setItem(`ngo:${ngoInfo.email}`, JSON.stringify(ngoInfo))

}
function saveToVictim(victimInfo) {
    localStorage.setItem(`victim:${victimInfo.email}`, JSON.stringify(victimInfo))
}


function getInfo(key, user)
{
    const info = []
    const victimKey = key.filter(
        (key) => {
            let splitKey = key.split(":")[0]
            if(splitKey === "victim")
                return true
            else
                return false
        }
    )
    const ngoKey = key.filter(
        (key) => {
            let splitKey = key.split(":")[0]
            if(splitKey === "ngo")
                return true
            else
                return false
        }
    )
    if(user==="victim") {
        victimKey.forEach( key => info.push(JSON.parse(localStorage.getItem(key)))  )
    }else
    {
        ngoKey.forEach( key => info.push(JSON.parse(localStorage.getItem(key)))  )
        
    }
    
    return info
}
export {saveToNgo, saveToVictim, getInfo}