export const menuGroup = [
  {
    label: '实验数据集',
    path: '',
    icon: 'el-icon-s-data',
    children: [
      {
        label: '数据集上传',
        path: '',
        name: '数据集上传'
      },
      {
        label: '数据集下载',
        path: '',
        name: '数据集下载'
      },
      {
        label: '数据集删除',
        path: '',
        name: '数据集删除'
      },
      {
        label: '数据集查看',
        path: '',
        name: '数据集查看'
      }
    ]
  },
  {
    label: '模型管理',
    path: '',
    icon: 'el-icon-menu',
    children: [
      {
        label: '模型上传',
        path: ''
      },
      {
        label: '模型下载',
        path: ''
      },
      {
        label: '模型删除',
        path: ''
      },
      {
        label: '模型查看',
        path: ''
      }
    ]
  },
  {
    label: '自然语言处理',
    icon: 'el-icon-document',
    children: [
      {
        label: '文本分词',
        path: ''
      },
      {
        label: '文本摘要',
        path: ''
      },
      {
        label: '聊天机器人',
        path: ''
      },
      {
        label: '句法分析',
        children: [
          {
            label: '语法分析',
            path: ''
          }
        ]
      }
    ]
  },
  {
    label: '情绪识别',
    icon: 'el-icon-setting',
    path: ''
  },
  {
    label: '语音识别',
    icon: 'el-icon-mic'
  },
  {
    label: '人脸识别',
    icon: 'el-icon-s-check',
    children: [
      {
        label: '人脸检测',
        path: ''
      },
      {
        label: '人脸匹配',
        path: ''
      },
      {
        label: '表情识别',
        path: ''
      }
    ]
  },
  {
    label: '动作识别',
    path: '',
    icon: 'el-icon-video-camera-solid'
  },
  {
    label: '物体识别',
    path: '',
    icon: 'el-icon-camera-solid'
  }
]
