document.querySelector('.first').addEventListener('click', function() {
    this.classList.add('animate');
    
    setTimeout(() => {
        this.classList.toggle('active');
        document.querySelector('.second').classList.toggle('active');
        document.documentElement.classList.toggle('theme-dark');
    }, 150);
    
    setTimeout(() => this.classList.remove('animate'), 300);
});