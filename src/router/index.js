import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import VueRouter from 'vue-router'
import HomeNews from '@/pages/HomeNews.vue'
import HomeMessage from '@/pages/HomeMessage'

export default new VueRouter({
    // 这里是 routes , 不是 routers
    routes: [
        { 
            path: '/about',
             component: AboutPage 
        },
        {
            path: '/home',
            component: HomePage,
            children: [
                {
                    path: 'news',
                    component: HomeNews,
                },
                {
                    path: 'message',
                    component: HomeMessage,
                },
            ]
        },
    ]
})