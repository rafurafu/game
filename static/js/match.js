// match.js

document.addEventListener('DOMContentLoaded', function () {
    // ページが読み込まれた時にマッチしたユーザーを取得して表示する処理
    fetch('/get_matched_users') // バックエンドのエンドポイントにリクエストを送る（実際のエンドポイントは適切に変更してください）
        .then(response => response.json())
        .then(data => {
            displayMatchedUsers(data); // マッチしたユーザーを表示する関数を呼び出す
        })
        .catch(error => console.error('Error:', error));
});

function displayMatchedUsers(users) {
    const userListContainer = document.getElementById('user-list');

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const userName = document.createElement('h3');
        userName.textContent = user.name;

        const userDescription = document.createElement('p');
        userDescription.textContent = user.description;

        const matchButton = document.createElement('button');
        matchButton.className = 'match-button';
        matchButton.textContent = 'マッチする';
        matchButton.addEventListener('click', function () {
            // マッチングする処理を実装する（バックエンドにリクエストを送るなど）
            alert('マッチングしました!');
        });

        userCard.appendChild(userName);
        userCard.appendChild(userDescription);
        userCard.appendChild(matchButton);

        userListContainer.appendChild(userCard);
    });
}
