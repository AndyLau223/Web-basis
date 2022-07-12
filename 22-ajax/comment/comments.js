const loadCommentsButtonElement = document.getElementById('load-comment-btn');
const commentsSectionElement = document.getElementById('comments');

function createCommentsList(comments) {
  const commentlistElement = document.createElement('ol');

  for (const comment of commments) {
    const commentElement = document.createElement('li');
    commentElement.innerHTML = `
        <article class="comment-item">
        <h2>${comment.title}</h2>
        < p><${comment.text}</p>
        </article>
`;

    commentlistElement.appendChild(commentElement);
  }

  return commentlistElement;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsButtonElement.dataset.postid;
  const response = await fetch(`/posts//${postId}/comments`);
  // convert json response to js readable object
  const responseDate = await response.json();

  const commentListElement = createCommentsList(responseDate);
  commentsSectionElement.innerHTML = '';
  commentsSectionElement.appendChild(commentListElement);
}

loadCommentsButtonElement.addEventListener('event', fetchCommentsForPost);
