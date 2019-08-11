module.exports = function getExamTopic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          type: 'radio',
          topic: '人们常常把软件工程的方法（开发方法）、工具（支持方法的工具）、（ ）称为软件工程三要素。',
          options: ['程序', '质量', '人员', '过程']
        }, {
          type: 'radio',
          topic: '下面的（ ）说法是正确的。',
          options: ['软件危机在20世纪70年代末期全面爆发', '当前先进的软件工程方法已经解决了软件危机的问题', '软件危机是指在计算机软件的开发和维护过程中遇到的一系列严重问题', '软件危机是指在软件产品中存在一系列的质量问题']
        }, {
          type: 'multiple',
          topic: '软件工程的基本目标是（ ）。',
          options: ['消除软件固有的复杂性', '开发高质量的软件', '努力发挥开发人员的创造性潜能', '更好地维护正在使用的软件产品']
        }, {
          type: 'radio',
          topic: '开发软件所需高成本和产品的低质量之间有着尖锐的矛盾，这种现象称作（ ）',
          options: ['软件工程', '软件周期', '软件危机', '软件产生']
        }, {
          type: 'multiple',
          topic: '面向过程方法，设计时强调( )的思想采用“自顶向下，逐步求精”的技术对于系统进行划分，分解和抽象是它的两个基本手段。',
          options: ['组件化', '模块化', '构建化', '包']
        }, {
          type: 'radio',
          topic: '从事物的组成部件及每个部件的属性、功能来认识事物。这种方法被称为（ ）的方法。',
          options: ['面向对象', '面向数据', '面向过程', '面向属性']
        }
      ])
    }, 3000)

  })
}