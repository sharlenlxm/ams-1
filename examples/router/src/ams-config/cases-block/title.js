import ams from '@ams-team/ams';

ams.block('title', {
    resources: {
    },
    /**
     * 配置区块
     */
    blocks: {
        titleBlock1: {
            type: 'title',
            options: {
                title: '标题类型的主标题'
            }
        },
        titleBlock2: {
            type: 'title',
            options: {
                title: '标题类型的主标题'
            },
            props: {
                'suffix-info': '我是提示', // 后缀提示
                // 'suffix-info-warning': '我是提示warning', // 后缀提示
                // 'suffix-info-danger': '我是提示danger' // 后缀提示
            }
        },
        titleBlock3: {
            type: 'title',
            options: {
                title: '标题类型的主标题'
            },
            props: {
                // 'suffix-info': '我是提示', // 后缀提示
                'suffix-info-warning': '我是提示warning', // 后缀提示
                // 'suffix-info-danger': '我是提示danger' // 后缀提示
            }
        },
        titleBlock4: {
            type: 'title',
            options: {
                title: '标题类型的主标题'
            },
            props: {
                // 'suffix-info': '我是提示', // 后缀提示
                // 'suffix-info-warning': '我是提示warning', // 后缀提示
                'suffix-info-danger': '我是提示danger' // 后缀提示
            }
        },
        titleBlock5: {
            type: 'title',
            options: {
                title: '标题类型的主标题',
                subTitle: '标题类型的副标题'
            }
        },
        titleBlock6: {
            type: 'title',
            options: {
                title: '标题类型的主标题',
                subTitle: '标题类型的副标题'
            },
            props: {
                'suffix-info': '我是提示', // 后缀提示
                // 'suffix-info-warning': '我是提示warning', // 后缀提示
                // 'suffix-info-danger': '我是提示danger' // 后缀提示
            }
        }
    }
});
