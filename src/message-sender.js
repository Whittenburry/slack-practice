import token from 'slack-token';

function findIdForChannel(searchName) {
  console.log("looking for", searchName)

  const url = `
    https://slack.com/api/channels.list?
    token=${token}`

  return fetch(url, {method: "POST"})
    .then(res => res.json())
    .then(json => {
      let match
      console.log('token is', token)
      json.channels.forEach(i => {
        if (i.name == searchName) {
          match = i
        }
      })

      return match.id
    })
}

function sendMessageWithId(roomId, message) {
  console.log("Now sending", roomId, message)
  const url = `
    https://slack.com/api/chat.postMessage?
    token=${token}&
    channel=${roomId}&
    text=${message}`
  fetch(url, {method: "POST"})
}

function sendMessageToRoom(roomName, message) {
  const idPromise = findIdForChannel(roomName)

  return idPromise.then(id => sendMessageWithId(id, message))
}

export default sendMessageToRoom
