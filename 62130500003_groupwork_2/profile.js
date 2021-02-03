    const app = {
        data() {
            return {                
                name: 'Kamolwish Woramethaleot',
                location: 'Thailand',
                follow: 'Follow',
                followers: 'Followers',
                followersdata: '8,789',
                projects: 'Projects',
                projectsdata: '142',
                ranks: 'Ranks',
                ranksdata: '129',
                image1: './images/image1.jpg',
                image2: './images/image2.jpg'
            }
        }             
    }
    var mountedApp = Vue.createApp(app).mount('#app')