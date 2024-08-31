// document.addEventListener('DOMContentLoaded', function() {
//     const commentSection = document.querySelector('.comments-section');
//     const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

//     storedComments.forEach(comment => {
//         const newComment = document.createElement('div');
//         newComment.classList.add('comment');
//         newComment.innerHTML = `
//             <div class="user-avatar">
//                 <i class="material-icons">person</i>
//             </div>
//             <div class="comment-content">
//                 <div class="user-info">
//                     <span class="username">${comment.username}</span>
//                     <div class="rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}</div>
//                 </div>
//                 <div class="comment-text">${comment.commentText}</div>
//             </div>
//         `;
//         commentSection.insertBefore(newComment, document.querySelector('input'));
//     });

//     document.querySelector('button').addEventListener('click', function() {
//         const username = document.querySelector('#username').value.trim();
//         const commentText = document.querySelector('#commentText').value.trim();
//         const rating = document.querySelector('#rating').value;

//         if (username && commentText) {
//             const newComment = {
//                 username: username,
//                 commentText: commentText,
//                 rating: rating
//             };

//             storedComments.push(newComment);
//             localStorage.setItem('comments', JSON.stringify(storedComments));

//             const commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             commentDiv.innerHTML = `
//                 <div class="user-avatar">
//                     <i class="material-icons">person</i>
//                 </div>
//                 <div class="comment-content">
//                     <div class="user-info">
//                         <span class="username">${username}</span>
//                         <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
//                     </div>
//                     <div class="comment-text">${commentText}</div>
//                 </div>
//             `;
//             commentSection.insertBefore(commentDiv, document.querySelector('input'));

//             document.querySelector('#username').value = '';
//             document.querySelector('#commentText').value = '';
//             document.querySelector('#rating').value = '5';
//         } else {
//             alert('Por favor, completa todos los campos.');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const commentSection = document.querySelector('.comments-section');
//     const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

//     storedComments.forEach(comment => {
//         const newComment = document.createElement('div');
//         newComment.classList.add('comment');
//         newComment.innerHTML = `
//             <div class="user-avatar">
//                 <i class="material-icons">person</i>
//             </div>
//             <div class="comment-content">
//                 <div class="user-info">
//                     <span class="username">${comment.username}</span>
//                     <div class="rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}</div>
//                 </div>
//                 <div class="comment-text">${comment.commentText}</div>
//             </div>
//         `;
//         commentSection.insertBefore(newComment, document.querySelector('#username'));
//     });

//     document.querySelector('#envíar').addEventListener('click', function() {
//         const username = document.querySelector('#username').value.trim();
//         const commentText = document.querySelector('#commentText').value.trim();
//         const rating = document.querySelector('#rating').value;

//         if (username && commentText) {
//             const newComment = {
//                 username: username,
//                 commentText: commentText,
//                 rating: rating
//             };

//             storedComments.push(newComment);
//             localStorage.setItem('comments', JSON.stringify(storedComments));

//             const commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             commentDiv.innerHTML = `
//                 <div class="user-avatar">
//                     <i class="material-icons">person</i>
//                 </div>
//                 <div class="comment-content">
//                     <div class="user-info">
//                         <span class="username">${username}</span>
//                         <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
//                     </div>
//                     <div class="comment-text">${commentText}</div>
//                 </div>
//             `;
//             commentSection.appendChild(commentDiv);

//             document.querySelector('#username').value = '';
//             document.querySelector('#commentText').value = '';
//             document.querySelector('#rating').value = '5';
//         } else {
//             alert('Por favor, completa todos los campos.');
//         }
//     });
// });


document.getElementById('envíar').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var commentText = document.getElementById('commentText').value;
    var rating = document.getElementById('rating').value;

    if (username && commentText) {
        var commentSection = document.querySelector('.comments-section');

        var newComment = document.createElement('div');
        newComment.classList.add('comment');

        var userAvatar = document.createElement('div');
        userAvatar.classList.add('user-avatar');
        userAvatar.innerHTML = '<i class="material-icons">person</i>';

        var commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');

        var userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `
            <span class="username">${username}</span>
            <div class="rating">${'★'.repeat(rating) + '☆'.repeat(5 - rating)}</div>
        `;

        var commentTextElement = document.createElement('div');
        commentTextElement.classList.add('comment-text');
        commentTextElement.textContent = commentText;

        commentContent.appendChild(userInfo);
        commentContent.appendChild(commentTextElement);

        newComment.appendChild(userAvatar);
        newComment.appendChild(commentContent);

        commentSection.appendChild(newComment);

        // Clear input fields
        document.getElementById('username').value = '';
        document.getElementById('commentText').value = '';
        document.getElementById('rating').value = '5';
    } else {
        alert('Por favor, llena todos los campos.');
    }
});