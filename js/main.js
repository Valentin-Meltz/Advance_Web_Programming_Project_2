// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            product: 'PC Bazooka RGB Gen 12',
            description: 'PC gamer Intel Core i5-12400F 32 Go SSD 1 To NVIDIA GeForce RTX 4060 8 Go - LAN 2.5 GbE - Wi-Fi 6E (Windows 11)',
            brand: "LDLC",
            image: 'https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183936.jpg',
            url: 'https://www.ldlc.com/fiche/PB00630276.html',
            inStock: true,
            inventory: 12,
            onSale: true,
            categories: ['PC', 'Gaming', 'Desktop', 'Work'],
            options: [
                {
                  id: 1010, colorImage: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183936.jpg", image: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183936.jpg", quantity: 10
                },
                {
                  id: 1020, colorImage: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183937.jpg", image: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183937.jpg", quantity: 6
                },
                {
                  id: 1030, colorImage: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183939.jpg", image: "https://media.ldlc.com/r374/ld/products/00/06/18/39/LD0006183939.jpg", quantity: 0
                }
              ],

            cart: 0,

            styles: {
                color: 'darkgreen',
                backgroundColor: 'lightyellow',
                fontStyle: 'italic'
            }
        }
    },
    methods: {
        updateImage(styleImage) {
            this.image = styleImage;
        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
});