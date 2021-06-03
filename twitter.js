require('dotenv').config();
const listText = require('./listText');
const { TwitterApi } = require('twitter-api-v2');

const idPage = process.env.TW_ID_PAGE
const idPost = process.env.TW_ID_POST

async function getInstance() {
  const amountKey = 16; 
  const listIntance = Array.from(Array(amountKey).keys()).map(index => {
    return new TwitterApi(process.env[`TW_BEARER_TOKEN${index}`])
  })
  let temp = null;
  const genedNum = [];
  while (genedNum.length != listIntance.length) {
    const random = Math.floor(Math.random() * listIntance.length);
    if (genedNum.includes(random)) continue;
    genedNum.push(random);
    try {
      const result = await listIntance[random].v1.get(`application/rate_limit_status.json`)
      const remaining = result.resources['followers']['/followers/list']['remaining'];
      if (+remaining > 1) {
        temp = random;
        break;
      }
    } catch (error) {
      continue;
    }
  }
  return temp !== null ? listIntance[temp] : false;
}


async function getIdByUsername(usernameCheck) {
  try {
    const twInstance = await getInstance();
    if (!twInstance) return { status: false, message: 'limit' }
    const roClient = twInstance.readOnly;
    const user = await roClient.v1.get('/users/show.json', { screen_name: usernameCheck });
    return user.id_str;
  } catch (error) {
    return false;
  }
}

async function checkTwitter(userId) {
  const twInstance = await getInstance();
  if (!twInstance) return { status: false, message: 'limit' }
  const roClient = twInstance.readOnly;
  const check = {
    isFollowed: 0,
    isReTweet: 0,
    isLiked: 0
  }

  try {
    // check retweet
    const retws = await roClient.v1.get(`statuses/retweets/${idPost}.json`)
    for (let index = 0; index < retws.length; index++) {
      if (retws[index].user.id_str == userId) {
        check.isReTweet = 1;
        break;
      }
    }
    if (!check.isReTweet) return { status: false, message: listText.twNotReTweet }

    // check like
    const listLikes = await roClient.v1.get('favorites/list.json', { user_id: userId })
    for (let index = 0; index < listLikes.length; index++) {
      if (listLikes[index].id_str == idPost) {
        check.isLiked = 1
        break;
      }
    }
    if (!check.isLiked) return { status: false, message: listText.twNotLike }

    //check follow
    // const followers = await roClient.v1.get('followers/list.json', { user_id: idPage })
    // for (let index = 0; index < followers.users.length; index++) {
    //   if (followers.users[index].id == userId) {
    //     check.isFollowed = 1
    //     break;
    //   }
    // }
    // if (!check.isFollowed) return { status: false, message: listText.twNotFollow }

    return { status: true, message: 'Done mission' }
  } catch (error) {
    console.log('Error Telegram: ', error.message);
    return { status: false, message: 'Something errors' }
  }
}

module.exports = {
  getIdByUsername,
  checkTwitter
}
// async function test() {
//   for (let index = 0; index < 300; index++) {
//     const res = await checkTwitter('1075458878291173376');
//     console.log(index);
//     if (!res.status) {
//       break;
//     }
//   }
// }
// test()