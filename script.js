// Search form feedback
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will help you plan your trip to Africa. Contact us for details.');
});

// Contact form feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
    this.reset();
});

// Chat bubble click
document.getElementById('chatBubble').addEventListener('click', function() {
    alert('Chat support coming soon!\nCall us at +233 27 422 6334 or +250 738 318 820');
});