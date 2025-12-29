// "GO" button scrolls smoothly to Contact section
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent. We will contact you shortly.');
    this.reset();
});

// Chat bubble
document.getElementById('chatBubble').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});