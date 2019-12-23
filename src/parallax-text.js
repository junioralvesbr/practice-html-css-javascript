document.addEventListener('mouseover', parallax);

    function parallax(event) {
        this.querySelectorAll('.layer').forEach(item => {
            let x = (event.pageX * 10 / 100);
            let y = (event.pageY * 10 / 100);
            item.style.transform = `translate(${x}px, ${y}px)`;
        })
    }