'use strict';
import token from 'slack-token';
// 1)
// write a fetch
// gets the history for a hard coded channel id (C0W8YH2QP)
// console.log the messages returned from ^
export default class MessageHistoryView {
  constructor(element) {
    this.element = element;

    this.historyFetch();
  }

  historyFetch() {
    const url = `
    https://slack.com/api/channels.history?
    token=${token}`;

    return fetch(url, {method: `POST`})
    .then(response => response.json())
    .then((info) => {
      console.log(info.messages.text);
    });
  }
}

// stuff

// 2)
// function takes a channel id, fetches that channel
// function goGetChannelStuff(id) {
//   // stuff
// }
// goGetChannelStuff("C0W8YH2QP")

// 3)
// function takes channel name
// goGetChannelStuffByName("slack_practice")
// looks up the channel id
// _uses_ that in function from #2

// Still be done:
// put those messages on the page instead of console.logging them
