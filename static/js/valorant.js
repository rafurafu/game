// 他のセクションを非表示にする処理を追加できます

    // 表示対象のセクションを表示
    var sections = ['search', 'match', 'notifications', 'dm'];
    sections.forEach(function(section) {
        var element = document.getElementById(section + 'Section');
        if (element) {
            if (section === sectionId) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }
    });
//--------------------------------------------------
function addTweet() {
    var role = document.getElementById('role').value;
    var number = document.getElementById('number').value;
    var rank = document.getElementById('rank').value;
    var tweetText = document.getElementById('tweetText').value;
    var currentTime = getCurrentTime();

    fetch('/add_tweet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: role, number: number, rank: rank, tweetText: tweetText, time: currentTime }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var tweetList = document.querySelector('.tweet-list');
        var tweet = document.createElement('div');
        tweet.className = 'tweet';
        tweet.innerHTML = `<div class="user-info"><h3>ユーザー情報</h3><p><strong>役割：</strong> ${role}</p><p><strong>募集する人数：</strong> ${number}</p><p><strong>ランク：</strong> ${rank}</p></div><p>${tweetText}</p><p><strong>時刻：</strong> ${currentTime}</p>`;

        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '削除';
        deleteButton.addEventListener('click', function () {
            deleteTweet(tweet);
        });

        tweet.appendChild(deleteButton);

        tweetList.insertBefore(tweet, tweetList.firstChild);

        document.getElementById('role').value = '';
        document.getElementById('number').value = '';
        document.getElementById('rank').value = '';
        document.getElementById('tweetText').value = '';
    })
    .catch(error => console.error('Error:', error));
}

function deleteTweet(tweetElement) {
    tweetElement.remove();
}

function getCurrentTime() {
    const date = new Date();
    return date.toLocaleTimeString();
}

function matchButtonClicked(){
    console.log("match in") //画面が変わる時にチェックするだけ ログアウトの時
    window.location.href = "/match"
}


