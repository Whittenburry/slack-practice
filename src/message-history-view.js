'use strict';
import slackToken from 'slack-token';
import * as MS from 'message-sender';

console.log(MS);

export default class MessageHistoryView {
  getHistory (channelId) {
    // const channelId = `C0WBYH2QP`;
    const url = `
      https://slack.com/api/channels.history?
      token=${slackToken}&
      channel=${channelId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.messages[0]))
  }
}
