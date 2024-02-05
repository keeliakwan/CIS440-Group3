// function to display feedback entries 
function displayFeedback() {
	const feedbackListContainer = document.querySelector('.feedback-list');

	feedbackList.forEach(feedback => {
	  const feedbackItem = document.createElement('div');
	  feedbackItem.classList.add('feedback-item');
	  feedbackItem.innerHTML = `<p>${feedback}</p>`;
	  feedbackListContainer.appendChild(feedbackItem);
    })}