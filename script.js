        let button = document.getElementById('no');
        let height = window.innerHeight - 50;
        let width = window.innerWidth - 50;

        button.addEventListener('mouseover', function() {
            button.style.position = "absolute"
            button.style.top = Math.random() * height + "px";
            button.style.left = Math.random() * width + "px";
        })
        if (isMobile) {
            button.addEventListener('touchend', function() {
                // Obtém a altura e a largura da tela
                let height = window.innerHeight - 50;
                let width = window.innerWidth - 50;
            
                // Move o botão para uma posição aleatória na tela
                button.style.position = "absolute";
                button.style.top = Math.random() * height + "px";
                button.style.left = Math.random() * width + "px";
            })
        }

        function openPopup() {
        document.getElementById('popup').style.display = 'block' ;
        }
        function closePopup() {
        document.getElementById('popup').style.display = 'none';
        }