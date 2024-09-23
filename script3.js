class ImageCard {
    constructor(imageUrl, description, buttonText, link) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.buttonText = buttonText;
        this.link = link;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'image-card';
        
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.description;
        img.className = 'image-card__image';
        
        const desc = document.createElement('p');
        desc.className = 'image-card__description';
        desc.textContent = this.description;

        const button = document.createElement('a');
        button.className = 'image-card__button';
        button.textContent = this.buttonText;

        if (this.link) {
            button.href = this.link;
            button.target = '_blank';
        } else {
            button.href = '#';
            button.onclick = (e) => {
                e.preventDefault();
                alert(this.description);
            };
        }

        card.appendChild(img);
        card.appendChild(desc);
        card.appendChild(button);
        
        return card;
    }
}
