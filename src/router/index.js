import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/basetable',
            component: resolve => require(['../components/page/BaseTable.vue'], resolve)
        },
        {
            path: '/vuetable',
            component: resolve => require(['../components/page/VueTable.vue'], resolve)
        },
        {
            path: '/baseform',
            component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
            path: '/vueeditor',
            component: resolve => require(['../components/page/VueEditor.vue'], resolve)
        },
        {
            path: '/markdown',
            component: resolve => require(['../components/page/Markdown.vue'], resolve)
        },
        {
            path: '/upload',
            component: resolve => require(['../components/page/Upload.vue'], resolve)
        },
        {
            path: '/basecharts',
            component: resolve => require(['../components/page/BaseCharts.vue'], resolve)
        },
        {
            path: '/mixcharts',
            component: resolve => require(['../components/page/MixCharts.vue'], resolve)
        }
    ]
})
