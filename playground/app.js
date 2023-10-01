import {MongoClient} from "mongodb"

const getInfo = async () => {
    const resp = await fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/savengo/savengo", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
      return await resp
    
  }

  const data = getInfo()
  console.log( JSON.stringify(await data.body));