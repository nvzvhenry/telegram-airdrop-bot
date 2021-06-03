const keyWallet = "👛 Wallet";
const keyRules = "📌 Rules";
const check = "Check";
module.exports = {
  step1: "1. DogeKing Community on Facebook",
  step2: "2. Join DogeKing Group on Telegram",
  step3: "3. Follow, Retweet, Like a Post",
  enterUser:  "Bind your twitter account before CHECK",
  check,
  keyPoint: "🅿️ Points",
  keyWallet,
  keyRules,
  desRules: `Competition on introducing DogeKing Community with rewards in DOGEKING Token!
To celebrate the breakthrough development of the community, DogeKing launches a campaign on community introduction to thank for the community's support.
Please follow the steps below to get the reward:
\n1) All participants (including those invited by others) have to complete 3 tasks in order to join the campaign.
Those invited by others also have to complete 3 tasks so that inviters can get points.
2) Please connect your Twitter Username to our Bot so that we can confirm your status!
3) Rewards are given based on your points, which means that the more points you get, the more valuable reward you gain.
\n(This activity is just related to DogeKing Community)
\n📢 How to win:
1) Find @DOGEKING\\_Airdrop\\_Bot in Telegram and enter/start to start the bot and follow the guidance;
2) After you connect your #DOGEKING BEP20 (unchangeable) with (@DOGEKING\\_Airdrop\\_Bot), the only introduction link will come out immediately;
3) You can require or invite your friends to join by clicking your only introduction link;
4) Those you invite can get points after completing 3 tasks and they have to active in DogeKing Community of DogeKing. Fake or inactive accounts cannot get rewards.
\n⚠️NOTE:
▫️ All participants have to meet the requirement on the number of #DOGEKING cards.
▫️ Those who are invited need to be active in https://t.me/DogeKingCommunity.`,
  keyHelp: "📨 Contact",
  desHelp: `All contact information:
Website: https://www.dogeking.finance/
Twitter: https://twitter.com/Dogekin43793836
Telegram Channel: https://t.me/dogekingcommunity
Facebook: https://facebook.com/Dogekingcommunity
Chat with us: https://t.me/dogekingcommunity`,
  startStep: `👇 Welcome to Dogeking Airdrop, please complete the following tasks to earn free DOGEKING tokens. \n\nClick on [${check}] after you are done with the tasks to enter the next session where you input your BEP20 Address:`,
  validTwiiter: "Invalid twitter account please submit your twitter username with @:",
  duplicateTw: "Twitter account is already in use. Please enter another account!",
  accTwOk: (acc) => {
    return  `*${acc} ✅* \n\nYou have successfully bind your twitter account with DOGEKING Airdrop Bot.
Press 👆 *${check}* to check completed tasks.`
  },
  validWallet: "Invalid wallet address, please try again:",
  walletOk: (address) => {
    return `*${address} ✅* \n\nYou have successfully bind your wallet address.
You can check again by click keyboard *${keyWallet}*.
See more information or need help, click keyboard *${keyRules}*.`
  },
  done: (id) => {
    return `🎉 Congrats, you have completed the airdrop tasks and  will receive a share of the 1% total supply of DOGEKING. 
    \nAirdrop Distribution will start after airdrop ends
\n💵 Set your wallet address to receive rewards at *${keyWallet}*.
\n👥 You can earn more tokens by inviting other users to DOGEKING Airdrop Bot.
\n👏 For each person you invite, you will get a reward.
\n🔗 Your referral link：https://t.me/DOGEKING\\_Airdrop\\_Bot?start=${id}`
  },
  enterTw: "If you are done step 3, enter twitter username so we can check it out.\nSend you twitter account starting with @:",
  addressWl: (address) => {
    return `Your wallet BEP20 (BSC) address: *${address}*`;
  },
  sendAddress: `*⚠️ Please enter it correctly as you are only allowed to enter once.
\n👛 Send your BEP20 (BSC) address:*`,
  twNotFollow: "You haven't followed page twitter",
  twNotReTweet: "You haven't retweet post twitter",
  twNotLike: "You haven't like post twitter",
  twNotUser: "You must bind username twitter",
  teleNotFollow: "You haven't follow chanel telegram",
  teleNotJoin: "You haven't join group telegram",
  notFoundTw: "Not found user twitter, please try again."
}