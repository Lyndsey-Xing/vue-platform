import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/Layout/Container'

import DelelteData from '@/pages/DataCollection/DelelteData'
import Download from '@/pages/DataCollection/Download'
import Upload from '@/pages/DataCollection/Upload'
import Query from '@/pages/DataCollection/Query'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container,
      redirect: '/DataCollection/Upload',
      children: [
        {
          name: '数据集上传',
          path: 'DataCollection/Upload',
          component: Upload
        },
        {
          name: '数据集下载',
          path: 'DataCollection/Download',
          component: Download
        },
        {
          name: '数据集删除',
          path: 'DataCollection/Delete',
          component: DelelteData
        },
        {
          name: '数据集查看',
          path: 'DataCollection/Query',
          component: Query
        }
      ]
    }
  ]
})
